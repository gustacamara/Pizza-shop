import { Dialog, DialogTrigger } from '@radix-ui/react-dialog'
import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'

import { OrderDetails } from './order-details'

export function OrderTableRow() {
  return (
    <>
      <TableRow>
        <TableCell>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant={'outline'} size={'xs'}>
                <Search className="h-3 w-3" />
                <span className="sr-only">Detalhes do pedido</span>
              </Button>
            </DialogTrigger>

            <OrderDetails />
          </Dialog>
        </TableCell>
        <TableCell className="font-mono text-xs font-medium">
          asdfhaksdjhfkashd
        </TableCell>
        <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
        <TableCell>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-slate-400"></span>
            <span className="text-muted-foreground font-medium">Pendente</span>
          </div>
        </TableCell>
        <TableCell>Luis Gustavo Câmara Martins</TableCell>
        <TableCell className="font-medium">R$ 124,99</TableCell>
        <TableCell>
          <Button variant={'outline'} size={'xs'}>
            <ArrowRight className="mr-2 h-3 w-3" />
            Aprovar
          </Button>
        </TableCell>
        <TableCell>
          <Button variant={'ghost'} size={'xs'}>
            <X className="mr-2 h-3 w-3" />
            Cancelar
          </Button>
        </TableCell>
      </TableRow>
    </>
  )
}
