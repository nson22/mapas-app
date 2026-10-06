import type { DiagramNode } from '@/lib/resumos';

const COLUMNS = [167, 500, 833];
const ROW_Y = (row: number) => 190 + 146 * row;
const NODE_W = 280;
const NODE_H = 100;

function layout(count: number) {
  const points: { x: number; y: number }[] = [];
  const rows = Math.ceil(count / 3);
  for (let row = 0; row < rows; row++) {
    const items = Math.min(3, count - row * 3);
    const xs = items === 3 ? COLUMNS : items === 2 ? [333, 667] : [500];
    xs.forEach((x) => points.push({ x, y: ROW_Y(row) }));
  }
  const height = ROW_Y(rows - 1) + NODE_H + 30;
  return { points, height };
}

function NodeLabel({ lines, tag }: { lines: string[]; tag: string }) {
  const first = lines.length > 1 ? 34 : tag ? 40 : 50;
  return (
    <>
      {lines.map((line, i) => (
        <text key={i} className="label" textAnchor="middle" x={0} y={first + 24 * i}>
          {line}
        </text>
      ))}
      {tag && (
        <text className="kicker" textAnchor="middle" x={0} y={first + 24 * (lines.length - 1) + 26}>
          {tag}
        </text>
      )}
    </>
  );
}

export default function MindMap({
  center,
  note,
  nodes,
}: {
  center: string[];
  note?: string;
  nodes: DiagramNode[];
}) {
  if (nodes.length === 0) return null;
  const { points, height } = layout(nodes.length);
  const label = `Esquema com ${nodes.length} ramos: ${nodes.map((n) => n.lines.join(' ')).join(', ')}.`;
  const centerY = center.length > 1 ? [58, 86] : [72];

  return (
    <section className="diagram-section">
      <div className="wrap">
        <div className="diagram-intro">
          <h2>Esquema</h2>
          {note && <p>{note}</p>}
        </div>
        <div className="diagram-frame">
          <svg className="mindmap" viewBox={`0 0 1000 ${height}`} role="img" aria-label={label}>
            <g className="mm-lines">
              {points.map((p, i) => (
                <line key={i} x1={500} y1={104} x2={p.x} y2={p.y} />
              ))}
            </g>
            <g className="mm-center">
              <rect x={350} y={20} width={300} height={84} rx={18} />
              {center.map((line, i) => (
                <text key={i} className="label" textAnchor="middle" x={500} y={centerY[i] ?? 72}>
                  {line}
                </text>
              ))}
            </g>
            {nodes.map((node, i) => (
              <a key={node.id} className="mm-link" href={`#${node.id}`} aria-label={`Ir para ${node.lines.join(' ')}`}>
                <g className={`mm-node ${node.tone}`.trim()} transform={`translate(${points[i].x},${points[i].y})`}>
                  <rect className="card" x={-NODE_W / 2} y={0} width={NODE_W} height={NODE_H} rx={14} />
                  <NodeLabel lines={node.lines} tag={node.tag} />
                </g>
              </a>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
