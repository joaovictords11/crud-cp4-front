import { NavLink } from 'react-router-dom'

const navBarStyle = "text-3xl hover:opacity-80"
const navBarStyleSelected = "text-3xl hover:opacity-80 border-b-2 border-b-black"

const NavBar = () => {
  return (
    <header className='flex justify-center items-center gap-8 p-6'>
        <NavLink to="/" className={({ isActive }) => isActive ? navBarStyleSelected : navBarStyle}>Targets</NavLink>
        <NavLink to='/todos' className={({ isActive }) => isActive ? navBarStyleSelected : navBarStyle}>ToDo</NavLink>
    </header>
  )
}

export default NavBar