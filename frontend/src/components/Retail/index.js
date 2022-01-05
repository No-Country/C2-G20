import { Icon } from "@iconify/react"

export default function Header() {
  return (
    <header>
      <div className="header_container-top">
        <Icon icon="bx:bx-menu-alt-left" className="icon-header icon-menu" />
        <h2>Grupo20</h2>
        <Icon
          className="icon-header icon-user"
          icon="ant-design:user-outlined"
        />
      </div>
      <div className="header_container-search">
        <input
          type="text"
          className="input-search"
          placeholder="Buscar producto..."
        />
        <Icon icon="bx:bx-search" className="icon-header icon-search" />
      </div>
    </header>
  )
}
