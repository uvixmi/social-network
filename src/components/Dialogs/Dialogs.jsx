import s from "./Dialogs.module.css"
import { Navigate } from "react-router-dom"
import DialogItem from "./DialogItem.js/DialogItex"
import Message from "./Message/Meesage"
import { Field, reduxForm } from "redux-form"
import {
  maxLengthCreator,
  requiredField,
} from "../../utils/validation/Validator"
import { Textarea } from "../common/FormControls/FormsControls"

const Dialogs = (props) => {
  let dialogsElements = props.messagesPage.dials.map((elem) => (
    <DialogItem name={elem.name} id={elem.id} />
  ))
  let messageElements = props.messagesPage.messages.map((elem) => (
    <Message message={elem.message} />
  ))

  let addNewMessage = (values) => {
    props.sendMessageClick(values.newMessageBody)
  }

  if (!props.isAuth) return <Navigate to="/login" />
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messageElements}</div>
        <AddMessageReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  )
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newMessageBody"
          validate={[requiredField, maxLength50]}
          placeholder="Enter Your Message"
        ></Field>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}
const AddMessageReduxForm = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
)

export default Dialogs
