import { Img, PencilIcon } from './user.style'
import { DivFlexBox, H2 } from '../index.style'

export function UserInfo () {
  return (
    <>
      <DivFlexBox>
        <Img src='src\assets\img\user.png' alt='' />
        <PencilIcon />
      </DivFlexBox>
      <H2>User Name</H2>
    </>
  )
}
