'use client'

import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

// Dados simulados
const energyData = [
  { name: 'Jan', atual: 4, otimizado: 3 },
  { name: 'Fev', atual: 3, otimizado: 2 },
  { name: 'Mar', atual: 2, otimizado: 1.5 },
  { name: 'Abr', atual: 2.78, otimizado: 2 },
  { name: 'Mai', atual: 1.89, otimizado: 1.3 },
  { name: 'Jun', atual: 2.39, otimizado: 1.7 },
]

const modelData = [
  { name: 'Modelo A', value: 400 },
  { name: 'Modelo B', value: 300 },
  { name: 'Modelo C', value: 200 },
  { name: 'Modelo D', value: 100 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export default function DashboardInterface() {
  return (
    <div className="min-h-screen">
        <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
            Nossas Soluções
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            Veja um exemplo de dashboard de controle de consumo energético e otimização de modelos de IA.
            </p>
        </div>
      {/* Conteúdo principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-100 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Visão Geral do Consumo Energético */}
          <Card className="col-span-full">
            <CardHeader>
              <CardTitle>Visão Geral do Consumo Energético</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={energyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis  label={{ value: 'Consumo (TWh)', angle: -90, position: 'insideLeft', offset: 10 }}/>
                    <Tooltip />
                    <Area type="monotone" dataKey="otimizado" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="atual" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">1.2 TWh</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total de Consumo</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">15%</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Redução de Consumo</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">500 ton</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Emissões Evitadas</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Status dos Modelos de IA */}
          <Card className="col-span-full md:col-span-1">
            <CardHeader>
              <CardTitle>Status dos Modelos de IA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={modelData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label
                    >
                      {modelData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <ul className="mt-4">
                {modelData.map((model) => (
                  <li key={model.name} className="flex justify-between items-center mb-2">
                    <span>{model.name}</span>
                    <span className="font-bold">{model.value} kWh</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Sugestões de Otimização */}
          <Card>
            <CardHeader>
              <CardTitle>Sugestões de Otimização</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-100 rounded-lg">
                <div>
                  <p className="font-medium">Otimização de Prompt para Modelo Diagnóstico A</p>
                  <p className="text-sm text-gray-600">Pode reduzir consumo em 5%</p>
                </div>
                <Button size="sm" className="bg-green-600 hover:bg-green-700">Aplicar</Button>
              </div>
              <div className="flex items-center justify-between p-4 bg-blue-100 rounded-lg">
                <div>
                  <p className="font-medium">Mover workloads do Modelo Atendimento B</p>
                  <p className="text-sm text-gray-600">Reduz o pico de consumo</p>
                </div>
                <Button size="sm" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Detalhes
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Controle de Data Center Verde */}
          <Card>
            <CardHeader>
              <CardTitle>Controle de Data Center Verde</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">Workloads em Data Centers Verdes</span>
                  <span className="text-2xl font-bold text-green-600">75%</span>
                </div>
                <Progress value={75} className="mt-2" />
              </div>
              <p className="text-sm text-gray-600">
                Sugestão: Mover 15% dos workloads restantes para parceiros de energia renovável pode reduzir emissões em
                10%.
              </p>
              <Button variant="outline" className="w-full">
                Planejar Migração
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}