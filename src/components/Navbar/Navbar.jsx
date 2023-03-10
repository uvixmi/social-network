import React from "react"
import s from "./Navbar.module.css"
import { NavLink } from "react-router-dom"
const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.navItem}>
        <NavLink
          to="/profile"
          className={(navData) => (navData.isActive ? s.activeLink : s.item)}
        >
          PROFILE
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/dialogs"
          className={(navData) => (navData.isActive ? s.activeLink : s.item)}
        >
          MESSAGES
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/users"
          className={(navData) => (navData.isActive ? s.activeLink : s.item)}
        >
          USERS
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/news"
          className={(navData) => (navData.isActive ? s.activeLink : s.item)}
        >
          NEWS
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/music"
          className={(navData) => (navData.isActive ? s.activeLink : s.item)}
        >
          MUSIC
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/settings"
          className={(navData) => (navData.isActive ? s.activeLink : s.item)}
        >
          SETTINGS
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
