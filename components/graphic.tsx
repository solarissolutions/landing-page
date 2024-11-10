import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { year: 2022, 'Consumo de Energia (TWh)': 400 },
  { year: 2024, 'Consumo de Energia (TWh)': 800 },
  { year: 2026, 'Consumo de Energia (TWh)': 1050 },
  { year: 2030, 'Consumo de Energia (TWh)': 1300 },
];

export default function GlobalEnergyConsumo() {
  return (
    <section className="w-full">
      <div className="container px-1 md:px-6">
        <Card>
          <CardContent className="overflow-hidden max-w-full">
            <div className="h-[400px] w-full md:w-full sm:w-[90vw]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 30, right: 30, left: 20, bottom: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" label={{ value: 'Ano', position: 'bottom', offset: 10 }}/>
                  <YAxis label={{ value: 'Consumo', angle: -90, position: 'insideLeft', offset: -5 }}/>
                  <Tooltip />
                  <Legend verticalAlign="top" height={76} offset={10} className="hidden md:block" />
                  <Line type="monotone" dataKey='Consumo de Energia (TWh)' stroke="#FFB927" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
