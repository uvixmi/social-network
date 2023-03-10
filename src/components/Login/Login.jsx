import React from "react"
import { Field, reduxForm } from "redux-form"
import { requiredField } from "../../utils/validation/Validator"
import { Input } from "../common/FormControls/FormsControls"
import { connect } from "react-redux"
import { login, logout } from "../../redux/auth-reducer"
import { Navigate } from "react-router-dom"
import { CreateField } from "../common/FormControls/FormsControls"
const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {CreateField("Email", "email", requiredField, Input)}
      {CreateField("Password", "password", requiredField, Input, {
        type: "password",
      })}
      {CreateField(
        null,
        "rememberMe",
        null,
        Input,
        {
          type: "checkbox",
        },
        "remember me"
      )}

      {error && <div> {error}</div>}
      <div>
        <button type="text">Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm)
const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }
  if (props.isAuth) return <Navigate to="/profile" />

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  }
}

export default connect(mapStateToProps, { login, logout })(Login)
