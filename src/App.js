import "./App.css"
import React from "react"
import Navbar from "./components/Navbar/Navbar"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import HeaderContainer from "./components/Header/HeaderContainer"
import UsersContainer from "./components/Users/UsersContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"
import LoginPage from "./components/Login/Login"
import { initializeApp } from "./redux/app-reducer"
import { connect } from "react-redux"
import Preloader from "./components/common/Preloader/Preloader"

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) return <Preloader></Preloader>
    else
      return (
        <BrowserRouter>
          <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
            <div className="app-wrapper-content">
              <Routes>
                <Route path="/dialogs" element={<DialogsContainer />} />
                <Route
                  path="/profile/:userId?"
                  element={<ProfileContainer />}
                />
                <Route path="/users" element={<UsersContainer />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default connect(mapStateToProps, { initializeApp })(App)
