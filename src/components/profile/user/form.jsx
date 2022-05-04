import InputForm from './inputForm'
import { Button, DivColumn } from './user.style'

const userInfo = {
  Direccion: {
    value: '',
    type: 'text'
  },
  Email: {
    value: 'hola',
    type: 'text'
  },
  Password: {
    value: '',
    type: 'password'
  }
}

export function FormUser () {
  return (
    <form>
      <DivColumn>
        {Object.keys(userInfo).map(category => {
          return <InputForm key={category} name={category} type={userInfo[category].type} />
        })}
        <Button type='button'>Save</Button>
      </DivColumn>
    </form>
  )
}
