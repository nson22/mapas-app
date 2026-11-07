import { ImportForm } from '@/components/study/forms';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function StudyData() {
  return <div className="mx-auto max-w-3xl space-y-7"><h1 className="text-4xl font-bold">Seu progresso</h1><p className="text-muted-foreground">Conclusões, anotações e revisões ficam salvas neste computador. Exporte uma cópia para guardar ou transferir.</p>
    <Card><CardHeader><CardTitle>Guardar uma cópia</CardTitle></CardHeader><CardContent><Button asChild><a href="/manausprev/backup" download>Exportar progresso em JSON</a></Button></CardContent></Card>
    <Card><CardHeader><CardTitle>Importar progresso</CardTitle></CardHeader><CardContent className="space-y-5"><p className="text-sm text-muted-foreground">Aceita o backup desta aplicação ou o JSON exportado pela página HTML anterior. A importação substitui o progresso atual. Exporte antes de substituir.</p><ImportForm /></CardContent></Card>
  </div>;
}
