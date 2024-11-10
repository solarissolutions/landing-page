import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts'
import { Button } from './ui/button'
import { Link } from 'lucide-react'


const data = [
    { tokens: 0, kgCO2: 1.53 },
    { tokens: 10, kgCO2: 6.53 },
    { tokens: 15, kgCO2: 9.80 },
    { tokens: 20, kgCO2: 13.07 },
    { tokens: 25, kgCO2: 16.34 },
    { tokens: 25, kgCO2: 16.34 },
    { tokens: 28, kgCO2: 22.34 },
    { tokens: 29, kgCO2: 25.34 },
    { tokens: 29, kgCO2: 26.34 },
]

const dataOptmized = [
    { tokens: 0, kgCO2: 1.22 },
    { tokens: 8, kgCO2: 4.22 },
    { tokens: 12, kgCO2: 5.83 },
    { tokens: 16, kgCO2: 8.44 },
    { tokens: 18, kgCO2: 9.75 },
    { tokens: 18, kgCO2: 9.75 },
    { tokens: 19, kgCO2: 9.75 },
    { tokens: 20, kgCO2: 10.75 },
    { tokens: 21, kgCO2: 12.75 },
]

export default function AITokenUsageComparison() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
          Comparação de Uso de Tokens de IA
        </h2>
        <p className="text-xl text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
          Veja como nossa abordagem otimizada reduz significativamente o uso de tokens de IA, 
          resultando em menor consumo de energia e custos reduzidos.
        </p>
        <div className="ml-60 mr-60">
          <Card>
            <CardHeader>
              <CardTitle>Uso de Tokens em um Projeto Comum</CardTitle>
              <CardDescription>Comparação entre uso tradicional e otimizado</CardDescription>
            </CardHeader>
            <CardContent>
            <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart 
                    data={dataOptmized}
                    margin={{ top: 30, right: 30, left: 20, bottom: 25 }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                        dataKey="tokens" 
                        type="number" 
                        label={{ value: 'Tokens', position: 'bottom', offset: 0 }}
                    />
                    <YAxis 
                        type="number" 
                        label={{ value: 'kg CO2', angle: -90, position: 'insideLeft', offset: 10 }}
                    />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} />
                    <Line 
                        type="monotone" 
                        dataKey="kgCO2" 
                        data={data} 
                        name="Projeto Comum" 
                        stroke="#82ca9d" 
                        strokeWidth={2} 
                    />
                    <Line 
                        type="monotone" 
                        dataKey="kgCO2" 
                        data={dataOptmized} 
                        name="Projeto Otimizado"
                        stroke="#FFB927" 
                        strokeWidth={2} 
                    />
                   
                    </LineChart>
                </ResponsiveContainer>
                </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Nossos clientes experimentam, em média, uma redução de 40-60% no uso de tokens de IA, 
            o que se traduz diretamente em economia de energia e custos.
          </p>
          <Button asChild size="lg" className="bg-[#FFB927] hover:bg-[#E5A622] text-black">
            <Link href="#agendar">Descubra Como Podemos Otimizar Seu Uso de IA</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}