import { Icon } from "@iconify/react"
import IconConfig from "../IconConfig"
import "./index.css"

export default function HeaderDashboard() {
  return (
    <header className="header-dashboard">
      <nav className="nav-dashboard">
        <Icon icon="fluent:home-16-filled" className="icon-header" />
        <Icon icon="whh:statistics" className="icon-header" />
        <IconConfig />
        <Icon icon="ph:users-bold" className="icon-header" />
      </nav>
    </header>
  )
}
