import './app.css'
import { BsHouseFill } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import Therminer from './assets/SVG/therminer.svg'
import { Outlet } from 'react-router-dom'
import { LinkNav } from './components/linkNav'

export default function header () {
  return (
    <>
      <div className='App-Header'>
        <div className='logo'>
          <img className='logo-Icon' src={Therminer} />
          <h1>Therminer</h1>
        </div>
        <div className='App-Nav'>
          <LinkNav name='home' class='home-link active' url='/' icon={<BsHouseFill />} />
          <LinkNav name='user' class='user-link' url='/profile' icon={<FaUserAlt />} />
          <div className='underline' />
        </div>
      </div>
      <div className='App-Body'>
        <Outlet />
      </div>
    </>
  )
}
