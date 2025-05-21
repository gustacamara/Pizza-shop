import { Cell, Pie, PieChart } from 'recharts'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const chartConfig = {
  product: {
    label: 'product',
  },
} satisfies ChartConfig

const data = [
  { product: 'Peperone', amount: 12 },
  { product: 'Robalo', amount: 60 },
  { product: 'Calabresa', amount: 20 },
  { product: 'Moda', amount: 40 },
  { product: '4 Queijos', amount: 49 },
]

const NUMBER_OF_COLORS = 5

export function PopularProducsChart() {
  return (
    <>
      <Card className="mg-0 col-span-3 gap-2">
        <CardHeader className="pb-8">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-medium">
              Produtos populares
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto min-h-full max-w-full"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={data}
                dataKey="amount"
                nameKey="product"
                outerRadius={86}
                innerRadius={58}
                labelLine={false}
                label={({ product, amount }) => `${product} (${amount})`}
              >
                {data.map((_, index) => {
                  return (
                    <Cell
                      key={`cell-${index}`}
                      className="animate-out duration-400 hover:opacity-80"
                      fill={`var(--chart-${1 + (index % NUMBER_OF_COLORS)})`}
                    />
                  )
                })}
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </>
  )
}
