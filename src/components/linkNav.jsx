import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { $ } from '../utils/dom'

function activar (name) {
  const element = $('.' + name + '-link')
  $('.active').classList.toggle('active')
  element.classList.toggle('active')
}

export const LinkNav = props => {
  const linkClass = classNames('nav-logo', props.class)

  return (
    <Link to={props.url} className={linkClass} onClick={() => activar(props.name)} title={props.name}>
      {props.icon}
    </Link>
  )
}
