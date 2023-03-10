import React, { useEffect, useState } from "react"
import Preloader from "../common/Preloader/Preloader"
import s from "./ProfileInfo.module.css"

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])
  const activateMode = () => {
    setEditMode(true)
  }
  const deactivateMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }
  return (
    <>
      {!editMode && (
        <div className={s.content}>
          <span onDoubleClick={activateMode}>{props.status || "----"}</span>
        </div>
      )}

      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateMode}
            value={status}
          ></input>
        </div>
      )}
    </>
  )
}

export default ProfileStatusWithHooks
