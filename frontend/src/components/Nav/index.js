import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const NavItem = ({item, link, icon, active, ...rootDOMAttributes}) => {
  return <li className="nav-item" {...rootDOMAttributes}>
    <Link to={link} className={`nav-link ${active === item ? 'nav-link-active' : 'nav-link-inactive'}`}>
      <Icon icon={icon} width="32" height="32" />
      <span className="link-text">{item}</span>
    </Link>
  </li>
}

export default function NavBar () {
  const [active, setActive] = useState(false)
  const [theme, setTheme] = useState(false)

  return <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <Link to="/" className="nav-link">
            <span className="link-text logo-text">Grupo20</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="angle-double-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
            >
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                  className="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                  className="fa-primary"
                ></path>
              </g>
            </svg>
          </Link>
        </li>
        <NavItem 
          item={'Dashboard'}
          link={'/Dashboard'}
          icon={"fluent:home-16-filled"}
          active={active}
          onClick={()=>setActive('Dashboard')}/>
        <NavItem 
          item={'Statitics'}
          link={'/Dashboard/Statitics'}
          icon={"whh:statistics"}
          active={active}
          onClick={()=>setActive('Statitics')}/>
        <NavItem 
          item={'Setting'}
          link={'/Dashboard/Setting'}
          icon={'fluent:settings-28-filled'}
          active={active}
          onClick={()=>setActive('Setting')}/>
        <NavItem 
          item={'Cliente'}
          link={'/Dashboard/Cliente'}
          icon={"ph:users-bold"}
          active={active}
          onClick={()=>setActive('Cliente')}/>
        <NavItem 
          item={'Soon...'}
          link={'#'}
          icon={`${ theme ? 'ic:round-wb-sunny' : "eva:moon-fill"}`}
          active={active}
          onClick={()=>setTheme(!theme)}/>
      </ul>
    </nav>
}