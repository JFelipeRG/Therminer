import { DivFlexBox, Span } from '../index.style'

export default function settingOption ({ option }) {
  return (
    <>
      <DivFlexBox margin='auto' border='true' justify='space-between' widthStyle='70%'>
        <Span>{option}</Span>
        <div className='switch-button'>Prueba</div>
      </DivFlexBox>
    </>
  )
}
