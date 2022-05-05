import { DivFlexBox, H2, Span } from '../index.style'
import { WalletIcon } from './wallet.style'

export function Wallet () {
  return (
    <DivFlexBox>
      <WalletIcon />
      <DivFlexBox direction='column'>
        <H2>Ganancias totales</H2>
        <Span weigth='bold'>99999 BTC</Span>
      </DivFlexBox>
      <Span color='green' weigth='bold'>+9999 BTC hoy</Span>
    </DivFlexBox>
  )
}
