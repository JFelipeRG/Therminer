import './app.css'
import { BsHouseFill } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { Link, Outlet } from 'react-router-dom'
import { $ } from './utils/dom'
import classNames from 'classnames'

function activar (e) {
  const element = e.target.tagName === 'path' ? e.target.parentNode.parentNode : e.target.parentNode
  $('.active').classList.toggle('active')
  element.classList.toggle('active')
}

function LinkNav (props) {
  const linkClass = classNames('nav-logo', props.class)

  return (
    <Link to={props.url} className={linkClass}>
      {props.icon}
    </Link>
  )
}

export default function header () {
  return (
    <div>
      <div className='App-Header'>
        <div className='logo'>
          <img src='/src/assets/therminer icon.png' />
          <h1>Therminer</h1>
        </div>
        <div className='App-Nav'>
          <LinkNav class='active' url='/' icon={<BsHouseFill onClick={activar} />} />
          <LinkNav class='' url='/user' icon={<FaUserAlt onClick={activar} />} />
          <div className='underline' />
        </div>
      </div>
      <div className='App-Body'>
        <Outlet />
      </div>
    </div>
  )
}
