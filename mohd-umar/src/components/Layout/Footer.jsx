import { Link, NavLink} from 'react-router-dom'
import {DUMMY_ICON} from '../UI/IconData'
import Icon from '../UI/Icon'

const Footer = () => {
  return (
    <footer className="footer footer-center bg-transparent text-base-content rounded p-10">
    <nav className="grid grid-flow-col gap-4">
    <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  px-1">
        
          <li>
            <NavLink to="/about"  className={({ isActive }) => isActive ? ' bg-sky-500  text-white ' : ' hover:text-white hover:bg-sky-700'}>About</NavLink>
          </li>
         
          <li>
            <NavLink to="/services"  className={({ isActive }) => isActive ? ' bg-sky-500  text-white ' : ' hover:text-white hover:bg-sky-700'}>Services</NavLink>
          </li>
         
        
          <li>
            <NavLink to="/contact"  className={({ isActive }) => isActive ? ' bg-sky-500  text-white ' : ' hover:text-white hover:bg-sky-700'}>Contact</NavLink>
          </li>
        </ul>
      </div>
     
    </nav>
    <nav>
      <div className="grid grid-flow-col gap-4">
      {DUMMY_ICON.map((icon) => (
              <Icon
                key={icon.id}
                brands={icon.brands}
                iconName={icon.icon}
                link={icon.link}
                title={icon.title}
              />
            ))}
      </div>
    </nav>
    <aside>
      <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
    </aside>
  </footer>
  )
}

export default Footer
