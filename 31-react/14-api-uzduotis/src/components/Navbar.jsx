import { NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <div className='navbar'>
            <div className="brand">
                <NavLink to= '/'></NavLink>
            </div>
            <ul className="links">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/posts">Posts</NavLink></li>
                <li><NavLink to="/comments">Comments</NavLink></li>
                <li><NavLink to="/todos">Todos</NavLink></li>
            </ul>
        </div>
  )
}

export default Navbar