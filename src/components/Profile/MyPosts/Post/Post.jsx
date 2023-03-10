import s from "./Post.module.css"

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://abrakadabra.fun/uploads/posts/2022-03/1647809364_1-abrakadabra-fun-p-milie-avatarki-na-vatsap-2.jpg"></img>
      {props.message}
      <div />
      <span>{`likes: ${props.likesсount}`}</span>
    </div>
  )
}

export default Post
