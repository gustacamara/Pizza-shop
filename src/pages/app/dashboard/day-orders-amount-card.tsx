import { Utensils } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function DayOrdersAmountCard() {
  return (
    <>
      <Card className="mg-0 gap-2">
        <CardHeader className="pd-2 flex flex-row items-center justify-between space-y-0">
          <CardTitle className="text-base font-semibold">
            Cancelamentos no (dia)
          </CardTitle>
          <Utensils className="text-primary-foreground h-4 w-4" />
        </CardHeader>
        <CardContent className="space-y-1">
          <span className="text-2xl font-bold tracking-tight">32</span>
          <p className="text-muted-foreground text-xs">
            <span className="text-rose-500 dark:text-rose-400">-5%</span> em
            relação a ontem
          </p>
        </CardContent>
      </Card>
    </>
  )
}
