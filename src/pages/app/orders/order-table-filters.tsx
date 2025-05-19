import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@radix-ui/react-select'
import { Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'

export function OrderFilters() {
  return (
    <>
      <form className="flex items-center gap-2">
        <span className="text-sm font-semibold">Filtros: </span>
        <Input placeholder="ID do pedido" className="h-8 w-auto" />
        <Input placeholder="Nome do cliente" className="h-8 w-[320]" />
        <Input placeholder="Nome do cliente" className="h-8 w-[320]" />
        <Select>
          <SelectTrigger className="h-8 w-[180]">
            <SelectValue />
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="peding">Pendente</SelectItem>
              <SelectItem value="canceled">Cancelado</SelectItem>
              <SelectItem value="processing">Em Preparo</SelectItem>
              <SelectItem value="delivering">Em entrega</SelectItem>
              <SelectItem value="delivered">Entregue</SelectItem>
            </SelectContent>
          </SelectTrigger>
        </Select>
        <Button type="submit" variant={'secondary'} size={'xs'}>
          <Search className="mr-2 h-4 w-4" />
          Filtrar resultados
        </Button>
        <Button type="submit" variant={'outline'} size={'xs'}>
          <X className="mr-2 h-4 w-4" />
          Remover filtros
        </Button>
      </form>
    </>
  )
}
