import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  ReferenceDot,
} from 'recharts'
import { aeroData, optimalPoint } from '../data/aeroData'

interface AerodynamicChartProps {
  showGrid: boolean
  activeCurves: {
    pressure: boolean
    staticPressure: boolean
    power: boolean
    efficiency: boolean
  }
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 border border-slate-600 rounded-lg p-3 shadow-xl">
        <p className="text-sm font-semibold text-white mb-2">
          Q = {label} тыс. м³/ч
        </p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
            {entry.dataKey === 'eta' ? ' %' : entry.dataKey === 'N' ? ' кВт' : ' Па'}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export default function AerodynamicChart({ showGrid, activeCurves }: AerodynamicChartProps) {
  return (
    <div className="w-full">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-white">
          Зависимость параметров от расхода воздуха
        </h2>
        <p className="text-sm text-slate-400">
          n = 1450 об/мин • D₂ = 250 мм • ρ = 1.2 кг/м³
        </p>
      </div>

      <div className="w-full h-[500px] sm:h-[550px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={aeroData}
            margin={{ top: 20, right: 60, left: 20, bottom: 20 }}
          >
            {showGrid && (
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.5} />
            )}
            <XAxis
              dataKey="Q"
              type="number"
              domain={[0, 52]}
              stroke="#94a3b8"
              label={{
                value: 'Q, тыс. м³/ч',
                position: 'insideBottom',
                offset: -10,
                style: { fill: '#94a3b8', fontSize: 13 },
              }}
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              tickLine={{ stroke: '#475569' }}
            />
            <YAxis
              yAxisId="left"
              stroke="#94a3b8"
              domain={[0, 3500]}
              label={{
                value: 'P, Па / N, кВт',
                angle: -90,
                position: 'insideLeft',
                offset: 10,
                style: { fill: '#94a3b8', fontSize: 13 },
              }}
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              tickLine={{ stroke: '#475569' }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#94a3b8"
              domain={[0, 100]}
              label={{
                value: 'η, %',
                angle: 90,
                position: 'insideRight',
                offset: 10,
                style: { fill: '#94a3b8', fontSize: 13 },
              }}
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              tickLine={{ stroke: '#475569' }}
            />
            <Tooltip content={<CustomTooltip />} />

            {/* Optimal point reference line */}
            <ReferenceLine
              x={optimalPoint.Q}
              yAxisId="left"
              stroke="#fbbf24"
              strokeDasharray="5 5"
              opacity={0.5}
            />

            {/* Pressure curve */}
            {activeCurves.pressure && (
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="P"
                name="Полное давление P"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ fill: '#3b82f6', r: 3 }}
                activeDot={{ r: 6, fill: '#3b82f6', stroke: '#fff', strokeWidth: 2 }}
              />
            )}

            {/* Static pressure curve */}
            {activeCurves.staticPressure && (
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="Pst"
                name="Статическое давление Pst"
                stroke="#06b6d4"
                strokeWidth={2.5}
                strokeDasharray="8 4"
                dot={{ fill: '#06b6d4', r: 2.5 }}
                activeDot={{ r: 5, fill: '#06b6d4', stroke: '#fff', strokeWidth: 2 }}
              />
            )}

            {/* Power curve */}
            {activeCurves.power && (
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="N"
                name="Мощность N"
                stroke="#f97316"
                strokeWidth={2.5}
                dot={{ fill: '#f97316', r: 3 }}
                activeDot={{ r: 6, fill: '#f97316', stroke: '#fff', strokeWidth: 2 }}
              />
            )}

            {/* Efficiency curve */}
            {activeCurves.efficiency && (
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="eta"
                name="КПД η"
                stroke="#22c55e"
                strokeWidth={3}
                dot={{ fill: '#22c55e', r: 3 }}
                activeDot={{ r: 6, fill: '#22c55e', stroke: '#fff', strokeWidth: 2 }}
              />
            )}

            {/* Optimal point marker */}
            {activeCurves.efficiency && (
              <ReferenceDot
                x={optimalPoint.Q}
                y={optimalPoint.eta}
                yAxisId="right"
                r={8}
                fill="#fbbf24"
                stroke="#fff"
                strokeWidth={2}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Optimal point annotation */}
      <div className="mt-4 flex items-center gap-2 text-sm">
        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span className="text-yellow-400 font-medium">Рабочая точка (оптимальный режим):</span>
        <span className="text-slate-300">
          Q = {optimalPoint.Q} тыс. м³/ч, P = {optimalPoint.P} Па, η = {optimalPoint.eta}%
        </span>
      </div>
    </div>
  )
}
