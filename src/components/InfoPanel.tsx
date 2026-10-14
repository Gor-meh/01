import { fanSpecs } from '../data/aeroData'

export default function InfoPanel() {
  return (
    <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-5">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Технические характеристики вентилятора {fanSpecs.name}
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-1">
          <p className="text-xs text-slate-500 uppercase tracking-wider">Тип</p>
          <p className="text-sm text-slate-200 font-medium">{fanSpecs.type}</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-slate-500 uppercase tracking-wider">Диаметр рабочего колеса</p>
          <p className="text-sm text-slate-200 font-medium">{fanSpecs.diameter} мм</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-slate-500 uppercase tracking-wider">Частота вращения</p>
          <p className="text-sm text-slate-200 font-medium">{fanSpecs.rpm} об/мин</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-slate-500 uppercase tracking-wider">Количество лопаток</p>
          <p className="text-sm text-slate-200 font-medium">{fanSpecs.bladeCount}</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-slate-500 uppercase tracking-wider">Тип лопаток</p>
          <p className="text-sm text-slate-200 font-medium">{fanSpecs.bladeType}</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-slate-500 uppercase tracking-wider">Макс. производительность</p>
          <p className="text-sm text-slate-200 font-medium">{fanSpecs.maxFlow.toLocaleString()} м³/ч</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-slate-500 uppercase tracking-wider">Макс. полное давление</p>
          <p className="text-sm text-slate-200 font-medium">{fanSpecs.maxPressure.toLocaleString()} Па</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-slate-500 uppercase tracking-wider">Макс. потребляемая мощность</p>
          <p className="text-sm text-slate-200 font-medium">{fanSpecs.maxPower} кВт</p>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-slate-700/50">
        <h4 className="text-sm font-semibold text-slate-300 mb-2">Описание</h4>
        <p className="text-sm text-slate-400 leading-relaxed">
          Вентилятор центробежный ВЦ-25М предназначен для перемещения воздуха и газовых смесей. 
          Аэродинамическая характеристика показывает зависимость полного и статического давления, 
          потребляемой мощности и КПД от объёмного расхода воздуха. 
          Рабочее колесо с лопатками, загнутыми назад, обеспечивает высокий КПД и низкий уровень шума. 
          Оптимальная рабочая точка находится в зоне максимального КПД (η<sub>max</sub> = {fanSpecs.maxEfficiency}%).
        </p>
      </div>

      <div className="mt-4 pt-4 border-t border-slate-700/50">
        <h4 className="text-sm font-semibold text-slate-300 mb-2">Обозначения на графике</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-4 h-0.5 bg-blue-500 rounded"></span>
            <span className="text-slate-400"><b className="text-blue-400">P</b> — полное давление, Па</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-0.5 bg-cyan-500 rounded" style={{ borderBottom: '2px dashed #06b6d4' }}></span>
            <span className="text-slate-400"><b className="text-cyan-400">Pst</b> — статическое давление, Па</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-0.5 bg-orange-500 rounded"></span>
            <span className="text-slate-400"><b className="text-orange-400">N</b> — мощность на валу, кВт</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-0.5 bg-green-500 rounded"></span>
            <span className="text-slate-400"><b className="text-green-400">η</b> — полный КПД, %</span>
          </div>
        </div>
      </div>
    </div>
  )
}
