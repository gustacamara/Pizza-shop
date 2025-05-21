import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const chartConfig = {
  date: {
    label: 'Data',
    color: colors.violet['500'],
  },
} satisfies ChartConfig

const data = [
  { date: '10/12', revenue: 800 },
  { date: '11/12', revenue: 123 },
  { date: '12/12', revenue: 300 },
  { date: '13/12', revenue: 780 },
  { date: '14/12', revenue: 123 },
  { date: '15/12', revenue: 959 },
  { date: '16/12', revenue: 1200 },
]

export function ReveniueCard() {
  return (
    <>
      <Card className="mg-0 col-span-6 gap-2">
        <CardHeader className="flex flex-row items-center justify-between pb-8">
          <div className="space-y-1">
            <CardTitle className="text-base font-medium">
              Receita no periodo
            </CardTitle>
            <CardDescription>Receita diária no período</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[240px] w-full">
            <LineChart style={{ fontSize: 12 }} data={data}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
              <YAxis
                stroke="#888"
                dataKey="revenue"
                axisLine={false}
                tickLine={false}
                width={80}
                tickFormatter={(value: number) =>
                  value.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'brl',
                  })
                }
                tickMargin={4}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
                animationDuration={400}
              />
              <Line
                dataKey="revenue"
                type="linear"
                stroke={colors.rose[500]}
                strokeWidth={2}
                dot={{ fill: colors.rose[500], r: 2 }}
                activeDot={{
                  r: 4,
                }}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </>
  )
}
