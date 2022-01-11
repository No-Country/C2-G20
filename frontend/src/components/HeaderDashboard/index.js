import { Icon } from "@iconify/react"
import IconConfig from "../IconConfig"
import "./index.css"
import {
  Link
} from 'react-router-dom'

export default function HeaderDashboard() {
  return (
    <header className="header-dashboard">
      <nav className="nav-dashboard">
        <Link to='/Dashboard'>
        <Icon icon="fluent:home-16-filled" className="icon-header"/>
        </Link>
        <Link to='/Dashboard/Statitics'>
        <Icon icon="whh:statistics" className="icon-header" />
        </Link>
        <Link to='/Dashboard/Setting'>
        <IconConfig className="icon-header"/>
        </Link>
        <Link to='/Dashboard/Cliente'>
        <Icon icon="ph:users-bold" className="icon-header" />
        </Link>
      </nav>
      
    </header>
  )
}
