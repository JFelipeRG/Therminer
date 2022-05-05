import { UserInfo, FormUser, Wallet, Equipment } from '../../components/profile/index'

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
