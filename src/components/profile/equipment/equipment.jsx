import LabelInfo from './labelComponentInfo'

const components = {
  Fabricante: {
    value: 'fabricante'
  },
  Modelo: {
    value: 'modelo'
  },
  Algoritmo: {
    value: 'algoritmo'
  },
  Hashrate: {
    value: 'hashrate'
  }
}

export default function equipment () {
  return (
    <div>
      <h1>Equipment Info</h1>
      <hr />
      {Object.keys(components).map(category => {
        return <LabelInfo key={category} name={category} info={components[category].value} />
      })}
    </div>
  )
}
