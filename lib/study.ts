import path from 'node:path';
import { createStudyStore } from './study-store';
export * from './study-model';

const globalDb = globalThis as typeof globalThis & { studyStore?: ReturnType<typeof createStudyStore> };
export function store() {
  return globalDb.studyStore ??= createStudyStore(process.env.STUDY_DB_PATH || path.join(process.cwd(), '.data', 'manausprev.sqlite'));
}
