import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthCanceledOrdersAmountCard() {
  return (
    <>
      <Card className="mg-0 gap-2">
        <CardHeader className="pd-2 flex flex-row items-center justify-between space-y-0">
          <CardTitle className="text-base font-semibold">
            Cancelamentos (mês)
          </CardTitle>
          <DollarSign className="text-primary-foreground h-4 w-4" />
        </CardHeader>
        <CardContent className="space-y-1">
          <span className="text-2xl font-bold tracking-tight">14</span>
          <p className="text-muted-foreground text-xs">
            <span className="text-emerald-500 dark:text-emerald-400">-9%</span>{' '}
            em relação ao mês passado
          </p>
        </CardContent>
      </Card>
    </>
  )
}
