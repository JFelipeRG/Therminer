import { DivFlexBox, Span } from '../../index.style'

export default function labelComponent ({ name, info }) {
  return (
    <>
      <DivFlexBox width='70%' justify='space-between'>
        <Span weigth='bold'>{name}</Span>
        <Span border='true'>{info}</Span>
      </DivFlexBox>
    </>
  )
}
