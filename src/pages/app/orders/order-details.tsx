import {
  DialogContent,
  DialogDescription,
  DialogHeader,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function OrderDetails() {
  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogHeader>Pedido: liasdfij12836451lk123</DialogHeader>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>
      <div className="space-y-6 rounded-md">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                  <span className="text-muted-foreground font-medium">
                    Pendente
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">Gustavo Câmara</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">69 9 9999-9999</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end">
                gustacamara.dev@hotmail.com
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Realizado há
              </TableCell>
              <TableCell className="flex justify-end">há 20 minutos</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-muted-foreground">Produto</TableHead>
              <TableHead className="text-muted-foreground text-right">
                Qtd.
              </TableHead>
              <TableHead className="text-muted-foreground text-right">
                Preço
              </TableHead>
              <TableHead className="text-muted-foreground text-right">
                Subtotal
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Pizza peperone GG</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$ 50.00</TableCell>
              <TableCell className="text-right">R$ 100.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pizza de Banofe PP</TableCell>
              <TableCell className="text-right">1</TableCell>
              <TableCell className="text-right">R$ 20.00</TableCell>
              <TableCell className="text-right">R$ 20.00</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total do pedido</TableCell>
              <TableCell className="text-right font-medium">
                R$ 120.00
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}
