import './app.css'
import { BsHouseFill } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { Link, Outlet } from 'react-router-dom'

export default function header () {
  return (
    <div>
      <div className='App-Header'>
        <div className='logo'>
          <img src='/assets/therminer icon.png' />
          <h1>Therminer</h1>
        </div>
        <nav>
          <Link to='/'>
            <BsHouseFill className='nav-logo' />
          </Link>
          <Link to='/user'>
            <FaUserAlt className='nav-logo' />
          </Link>
        </nav>
      </div>
      <div className='App-Body'>
        <Outlet />
      </div>
    </div>
  )
}
