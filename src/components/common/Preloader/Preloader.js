import loader from "./my-loader.svg"
import React from "react"
import s from "./Preload.module.css"

let Preloader = (props) => {
  return <div className={s.load}> {<img src={loader} />}</div>
}

export default Preloader
