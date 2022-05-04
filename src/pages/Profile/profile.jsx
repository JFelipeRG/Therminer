import Equipment from '../../components/profile/equipment/equipment'
import Wallet from '../../components/profile/wallet'
import { UserInfo, FormUser } from '../../components/profile/user/index'

import './profile.css'

export default function user () {
  return (
    <div className='data-Container'>
      <div className='user-Info-Container'>
        <UserInfo />
        <FormUser />
      </div>
      <hr className='hr-Profile' />
      <div className='graphics-Container'>
        <Equipment />
        <Wallet />
      </div>
    </div>
  )
}
