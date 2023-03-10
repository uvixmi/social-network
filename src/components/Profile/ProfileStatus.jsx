import React from "react"
import Preloader from "../common/Preloader/Preloader"
import s from "./ProfileInfo.module.css"

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  }

  activateEditMode = () => {
    this.setState({ editMode: true })
  }
  deactivateEditMode = () => {
    this.setState({ editMode: false })
    this.props.updateStatus(this.state.status)
  }
  onStatusChange = (e) => {
    let newO = { status: e.currentTarget.value }
    this.setState(newO)
    console.log(this.state.status)
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status })
    }
  }
  render() {
    return (
      <>
        {!this.state.editMode && (
          <div className={s.content}>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || "----"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.state.status}
            ></input>
          </div>
        )}
      </>
    )
  }
}

export default ProfileStatus
