import { useState } from 'react'
import AerodynamicChart from './components/AerodynamicChart'
import InfoPanel from './components/InfoPanel'

function App() {
  const [showGrid, setShowGrid] = useState(true)
  const [activeCurves, setActiveCurves] = useState({
    pressure: true,
    staticPressure: true,
    power: true,
    efficiency: true,
  })

  const toggleCurve = (curve: keyof typeof activeCurves) => {
    setActiveCurves(prev => ({ ...prev, [curve]: !prev[curve] }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">ВЦ-25М</h1>
                <p className="text-xs text-slate-400">Аэродинамическая характеристика вентилятора</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowGrid(!showGrid)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  showGrid
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                Сетка
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Legend / Controls */}
        <div className="mb-6 bg-slate-800/50 rounded-xl border border-slate-700/50 p-4">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-sm text-slate-400 font-medium">Кривые:</span>
            <button
              onClick={() => toggleCurve('pressure')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeCurves.pressure
                  ? 'bg-blue-600/20 text-blue-300 border border-blue-500/50'
                  : 'bg-slate-700/50 text-slate-500 border border-slate-600/50'
              }`}
            >
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              Полное давление P
            </button>
            <button
              onClick={() => toggleCurve('staticPressure')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeCurves.staticPressure
                  ? 'bg-cyan-600/20 text-cyan-300 border border-cyan-500/50'
                  : 'bg-slate-700/50 text-slate-500 border border-slate-600/50'
              }`}
            >
              <span className="w-3 h-3 rounded-full bg-cyan-500"></span>
              Статическое давление Pst
            </button>
            <button
              onClick={() => toggleCurve('power')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeCurves.power
                  ? 'bg-orange-600/20 text-orange-300 border border-orange-500/50'
                  : 'bg-slate-700/50 text-slate-500 border border-slate-600/50'
              }`}
            >
              <span className="w-3 h-3 rounded-full bg-orange-500"></span>
              Мощность N
            </button>
            <button
              onClick={() => toggleCurve('efficiency')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeCurves.efficiency
                  ? 'bg-green-600/20 text-green-300 border border-green-500/50'
                  : 'bg-slate-700/50 text-slate-500 border border-slate-600/50'
              }`}
            >
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              КПД η
            </button>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-4 sm:p-6">
          <AerodynamicChart
            showGrid={showGrid}
            activeCurves={activeCurves}
          />
        </div>

        {/* Info Panel */}
        <div className="mt-6">
          <InfoPanel />
        </div>

        {/* Technical specs */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-slate-300">Производительность</h3>
            </div>
            <p className="text-2xl font-bold text-white">5 000 — 50 000</p>
            <p className="text-sm text-slate-400">м³/ч</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-600/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-slate-300">Полное давление</h3>
            </div>
            <p className="text-2xl font-bold text-white">до 3 200</p>
            <p className="text-sm text-slate-400">Па</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-green-600/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-slate-300">Макс. КПД</h3>
            </div>
            <p className="text-2xl font-bold text-white">82</p>
            <p className="text-sm text-slate-400">%</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-slate-500">
            Вентилятор центробежный ВЦ-25М • Аэродинамическая характеристика
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
