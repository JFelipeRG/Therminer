import { Img, H2, PencilIcon, Div } from './user.style'

export function UserInfo () {
  return (
    <>
      <Div>
        <Img src='src\assets\img\user.png' alt='' />
        <PencilIcon />
      </Div>
      <H2>User Name</H2>
    </>
  )
}
