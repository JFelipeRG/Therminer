import InputForm from './inputForm'

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

export default function form () {
  return (
    <form>
      {Object.keys(userInfo).map(category => {
        return <InputForm key={category} name={category} type={userInfo[category].type} />
      })}
      <input type='submit' value='Save' />
    </form>
  )
}
