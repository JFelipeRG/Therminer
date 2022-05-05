import LabelInfo from './labelComponentInfo'
import { DivFlexBox, H2 } from '../../index.style'

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

export function Equipment () {
  return (
    <DivFlexBox direction='column'>
      <H2 width='60%' border='true'>Equipment Info</H2>
      {Object.keys(components).map(category => {
        return <LabelInfo key={category} name={category} info={components[category].value} />
      })}
    </DivFlexBox>
  )
}
