import React from "react"
import { NavLink } from "react-router-dom"
import Paginator from "./Paginator"
import s from "./Users.module.css"
import userPh from "./user_ph.png"

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= 10; i++) pages.push(i)

  const pagesList = pages.map((p) => {
    return (
      <span
        className={props.currentPage === p && s.selectedItem}
        onClick={(e) => {
          props.onPageChanged(p)
        }}
      >
        {p}
      </span>
    )
  })

  return (
    <>
      <Paginator
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
      ></Paginator>
      <div className={s.user_view}>
        {props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <NavLink to={"/profile/" + u.id}>
                  <img
                    src={u.photos.small != null ? u.photos.small : userPh}
                    className={s.userPhoto}
                  />
                </NavLink>
              </div>

              <div>
                {u.followed ? (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id == u.id
                    )}
                    onClick={() => {
                      props.unfollow(u.id)
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id == u.id
                    )}
                    onClick={() => {
                      props.follow(u.id)
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"} </div>
              </span>
            </span>
          </div>
        ))}
      </div>
    </>
  )
}
export default Users
