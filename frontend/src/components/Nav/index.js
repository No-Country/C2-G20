import { Icon } from "@iconify/react"
import { useState, useContext } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Nav.css"
import { PrefContext } from "../../context/PrefContext"

const NavItem = ({ item, link, icon, para, ...rootDOMAttributes }) => {
  return (
    <li className="nav-item" {...rootDOMAttributes}>
      <Link
        to={link}
        className={`nav-link ${
          para === link ? "nav-link-active" : "nav-link-inactive"
        }`}
      >
        <Icon icon={icon} width="32" height="32" />
        <span className="link-text">{item}</span>
      </Link>
    </li>
  )
}

export default function NavBar() {
  const { theme, setTheme } = useContext(PrefContext)
  const parametro = useLocation().pathname
  return (
    <nav className={`navbar nav ${theme ? "dark" : ""}`}>
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
          item={"Dashboard"}
          link={"/Dashboard"}
          icon={"fluent:home-16-filled"}
          para={parametro}
        />
        <NavItem
          item={"Statitics"}
          link={"/Dashboard/Statitics"}
          icon={"whh:statistics"}
          para={parametro}
        />
        <NavItem
          item={"Cliente"}
          link={"/Dashboard/Cliente"}
          icon={"ph:users-bold"}
          para={parametro}
        />
        <NavItem
          item={"Setting"}
          link={"/Dashboard/Setting"}
          icon={"fluent:settings-28-filled"}
          para={parametro}
        />
        <NavItem
          item={"Soon..."}
          link={"#"}
          icon={`${theme ? "ic:round-wb-sunny" : "eva:moon-fill"}`}
          para={parametro}
          onClick={() => setTheme(!theme)}
        />
      </ul>
    </nav>
  )
}