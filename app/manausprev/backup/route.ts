import { store, today } from '@/lib/study';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export function GET() {
  return new Response(JSON.stringify({ app: 'mapas-manausprev', version: 1, state: store().read() }, null, 2), {
    headers: { 'Content-Type': 'application/json', 'Content-Disposition': `attachment; filename="manausprev-${today()}.json"`, 'Cache-Control': 'no-store' },
  });
}
