import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
        <Link to="/">Targets</Link>
        <Link to='/todos'>ToDo</Link>
    </header>
  )
}

export default NavBar