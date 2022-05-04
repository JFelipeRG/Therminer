import { Label, Input } from './user.style'

export default function InputForm ({ name, type }) {
  return (
    <>
      <Label htmlFor={name}>{name}</Label>
      <Input type={type} id={name} />
    </>
  )
}
