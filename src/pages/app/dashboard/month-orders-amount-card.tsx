import { Utensils } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthOrdersAmountCard() {
  return (
    <>
      <Card className="mg-0 gap-2">
        <CardHeader className="pd-2 flex flex-row items-center justify-between space-y-0">
          <CardTitle className="text-base font-semibold">
            Pedidos (mês)
          </CardTitle>
          <Utensils className="text-primary-foreground h-4 w-4" />
        </CardHeader>
        <CardContent className="space-y-1">
          <span className="text-2xl font-bold tracking-tight">268</span>
          <p className="text-muted-foreground text-xs">
            <span className="text-emerald-500 dark:text-emerald-400">+12%</span>{' '}
            em relação ao mês passado
          </p>
        </CardContent>
      </Card>
    </>
  )
}
