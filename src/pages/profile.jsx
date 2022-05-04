import Equipment from '../components/profile/equipment/equipment'
import Wallet from '../components/profile/wallet'
import UserInfo from '../components/profile/user/userInfo'
import FormUSer from '../components/profile/user/form'

import './profile.css'

export default function user () {
  return (
    <div className='data-Container'>
      <div>
        <UserInfo />
        <FormUSer />
      </div>
      <hr />
      <div>
        <Equipment />
        <Wallet />
      </div>
    </div>
  )
}
