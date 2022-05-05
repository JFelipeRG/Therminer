import SettingOption from '../../components/home/settingOption'

import './home.css'

const options = ['Modo Equipo', 'Circuito Calefacción']

export default function home () {
  return (
    <>
      <div className='panel-Control'>
        {options.map(option => {
          return <SettingOption key={option} option={option} />
        })}
      </div>
      <div className='grafic-Container'>
        <div className='chart-Container'>
          <div className='chart-Settings'>
            <select name='type' id='type-chart'>
              <option value='consumo'>Consumo</option>
              <option value='temp-equipo'>Temperatura Equipo</option>
              <option value='temp-agua'>Temperatura Agua</option>
            </select>
            <div className='time-Chart'>
              <span>Mes</span>
              <span>Semana</span>
              <span>Dia</span>
            </div>
          </div>
        </div>
        <div className='tempScroll-Container' />
      </div>
    </>
  )
}
