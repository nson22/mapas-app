import type { ReactNode } from 'react';

type Props = { children?: ReactNode };

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ');

export function Category({ id, title, count, children }: Props & { id?: string; title?: string; count?: string }) {
  return (
    <section id={id} className="category">
      <div className="wrap">
        <div className="category-head">
          {title && <h2>{title}</h2>}
          {count && <span className="count">{count}</span>}
        </div>
      </div>
      {children}
    </section>
  );
}

export function Branch({
  id,
  num,
  title,
  kicker,
  tone,
  variant,
  children,
}: Props & { id?: string; num?: string; title?: string; kicker?: string; tone?: string; variant?: string }) {
  return (
    <div className="wrap">
      <section id={id} className={cx('branch', tone, variant)}>
        <div className="branch-head">
          {num && <span className="branch-num">{num}</span>}
          {title && <h2>{title}</h2>}
          {kicker && <span className="branch-kicker">{kicker}</span>}
        </div>
        {children}
      </section>
    </div>
  );
}

export function Quadro({ title, note, children }: Props & { title?: string; note?: string }) {
  return (
    <section className="grid-section">
      <div className="wrap">
        {(title || note) && (
          <div className="diagram-intro">
            {title && <h2>{title}</h2>}
            {note && <p>{note}</p>}
          </div>
        )}
        <div className="class-grid">{children}</div>
      </div>
    </section>
  );
}

export function Card({
  tone,
  tag,
  title,
  href,
  ex,
  children,
}: Props & { tone?: string; tag?: string; title?: string; href?: string; ex?: string }) {
  return (
    <a className={cx('class-card', tone)} href={href}>
      {tag && <span className="tag">{tag}</span>}
      {title && <h3>{title}</h3>}
      {children}
      {ex && <span className="ex">{ex}</span>}
    </a>
  );
}

export function Callout({ variant, tag, children }: Props & { variant?: string; tag?: string }) {
  return (
    <div className={cx('callout', variant)}>
      {tag && <span className="tag">{tag}</span>}
      {children}
    </div>
  );
}

export function Grid({ cols, children }: Props & { cols?: string }) {
  return <div className={`grid-${cols ?? '2'}`}>{children}</div>;
}

export function Example({ variant, tag, children }: Props & { variant?: string; tag?: string }) {
  return (
    <div className={cx('example', variant)}>
      {tag && <span className="tag">{tag}</span>}
      {children}
    </div>
  );
}

export function Chips({ children }: Props) {
  return <div className="chips">{children}</div>;
}

export function Group({ label, children }: Props & { label?: string }) {
  return (
    <div className="chip-group">
      {label && <span className="gl">{label}</span>}
      {children}
    </div>
  );
}

export function Case({ cite, tese, children }: Props & { cite?: string; tese?: string }) {
  return (
    <div className="case">
      {cite && <span className="cite">{cite}</span>}
      {tese && <span className="tese">{tese}</span>}
      {children}
    </div>
  );
}
