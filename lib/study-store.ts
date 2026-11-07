import { DatabaseSync } from 'node:sqlite';
import { mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

export type StudyProgress = {
  done: Record<string, string>;
  reviews: Record<string, string>;
  notes: Record<string, string>;
};

export function createStudyStore(filename: string) {
  if (filename !== ':memory:') mkdirSync(dirname(filename), { recursive: true });
  const db = new DatabaseSync(filename);
  db.exec(`PRAGMA journal_mode=WAL;
    PRAGMA busy_timeout=5000;
    CREATE TABLE IF NOT EXISTS completions (id TEXT PRIMARY KEY, completed_on TEXT NOT NULL);
    CREATE TABLE IF NOT EXISTS reviews (id TEXT PRIMARY KEY, completed_on TEXT NOT NULL);
    CREATE TABLE IF NOT EXISTS notes (date TEXT PRIMARY KEY, body TEXT NOT NULL);
    PRAGMA user_version=1;`);
  return {
    read(): StudyProgress {
      return {
        done: Object.fromEntries(db.prepare('SELECT id, completed_on FROM completions').all().map(r => [r.id, r.completed_on])),
        reviews: Object.fromEntries(db.prepare('SELECT id, completed_on FROM reviews').all().map(r => [r.id, r.completed_on])),
        notes: Object.fromEntries(db.prepare('SELECT date, body FROM notes').all().map(r => [r.date, r.body])),
      };
    },
    complete(id: string, date: string | null) {
      db.exec('BEGIN IMMEDIATE');
      try {
        if (date) db.prepare('INSERT INTO completions VALUES (?, ?) ON CONFLICT(id) DO NOTHING').run(id, date);
        else {
          db.prepare('DELETE FROM completions WHERE id=?').run(id);
          // A new study completion starts a fresh review cycle.
          for (const offset of [1, 7, 14]) db.prepare('DELETE FROM reviews WHERE id=?').run(`${id}-r${offset}`);
        }
        db.exec('COMMIT');
      } catch (error) { db.exec('ROLLBACK'); throw error; }
    },
    review(id: string, date: string | null) {
      if (date) db.prepare('INSERT INTO reviews VALUES (?, ?) ON CONFLICT(id) DO NOTHING').run(id, date);
      else db.prepare('DELETE FROM reviews WHERE id=?').run(id);
    },
    note(date: string, body: string) {
      db.prepare('INSERT INTO notes VALUES (?, ?) ON CONFLICT(date) DO UPDATE SET body=excluded.body').run(date, body);
    },
    replace(progress: StudyProgress) {
      db.exec('BEGIN IMMEDIATE');
      try {
        db.exec('DELETE FROM completions; DELETE FROM reviews; DELETE FROM notes;');
        for (const [id, value] of Object.entries(progress.done)) db.prepare('INSERT INTO completions VALUES (?, ?)').run(id, value);
        for (const [id, value] of Object.entries(progress.reviews)) db.prepare('INSERT INTO reviews VALUES (?, ?)').run(id, value);
        for (const [id, value] of Object.entries(progress.notes)) db.prepare('INSERT INTO notes VALUES (?, ?)').run(id, value);
        db.exec('COMMIT');
      } catch (error) { db.exec('ROLLBACK'); throw error; }
    },
    close() { db.close(); },
  };
}
