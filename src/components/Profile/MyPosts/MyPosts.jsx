import React from "react"
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
import { Field, reduxForm } from "redux-form"
import {
  maxLengthCreator,
  requiredField,
} from "../../../utils/validation/Validator"
import { Textarea } from "../../common/FormControls/FormsControls"

const MyPosts = (props) => {
  let postElements = props.posts.map((post) => (
    <Post message={post.message} likesсount={post.likesсount} />
  ))
  let addNewPost = (values) => {
    props.addPost(values.newPost)
  }

  return (
    <div className={s.postBlock}>
      <h3>My Posts</h3>
      <AddNewPostReduxForm onSubmit={addNewPost} />
      <div className={s.posts}>{postElements}</div>
    </div>
  )
}

const maxLength = maxLengthCreator(10)

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Enter Your Post"
          component={Textarea}
          name="newPost"
          validate={[requiredField, maxLength]}
        ></Field>
      </div>
      <button>Add post</button>
    </form>
  )
}

const AddNewPostReduxForm = reduxForm({ form: "addNewPostForm" })(
  AddNewPostForm
)

export default MyPosts
