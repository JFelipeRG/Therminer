import { DivSpace } from '../user/user.style'

export default function labelComponent ({ name, info }) {
  return (
    <DivSpace>
      <h3>{name}</h3>
      <h3>{info}</h3>
    </DivSpace>
  )
}
