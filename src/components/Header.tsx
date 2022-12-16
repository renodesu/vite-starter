import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="flex p-2 gap-4">
      <NavLink to="/">Root</NavLink>
      <NavLink to="/typography">Typography</NavLink>
    </header>
  )
}

export default Header
