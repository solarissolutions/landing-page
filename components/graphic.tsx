import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { year: 2020, consumption: 580 },
  { year: 2025, consumption: 610 },
  { year: 2030, consumption: 640 },
  { year: 2035, consumption: 670 },
  { year: 2040, consumption: 700 },
  { year: 2045, consumption: 730 },
  { year: 2050, consumption: 760 },
]

export default function GlobalEnergyConsumption() {
  return (
    <section className="w-full">
      <div className="container px-4 md:px-6">
        <Card>
          <CardContent>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 30, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="consumption" stroke="#FFB927" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}