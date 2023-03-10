import React from "react"
import Preloader from "../common/Preloader/Preloader"
import s from "./ProfileInfo.module.css"
import ProfileStatusWithHooks from "./ProfileStatus"

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className={s.content}>
      {/* <img
        src="https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg"
        className={s.image}
      /> */}
      {props.profile.photos.large && (
        <img src={props.profile.photos.large} className={s.image} />
      )}

      <ProfileStatusWithHooks
        status={props.status}
        updateStatus={props.updateStatus}
      />
    </div>
  )
}

export default ProfileInfo
