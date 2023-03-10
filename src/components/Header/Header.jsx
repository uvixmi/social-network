import React from "react"
import { NavLink } from "react-router-dom"
import s from "./Header.module.css"
const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="https://static.vecteezy.com/system/resources/previews/001/191/989/non_2x/circle-logo-png.png"
        alt=""
      />

      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} -<button onClick={props.logout}>Log out</button>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  )
}

export default Header
