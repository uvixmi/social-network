import dialogsReducer from "./dialogs_reducer"
import profileReducer from "./profile_reducer"
import sidebarReducer from "./sidebar_reducer"

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"
let store = {
  _state: {
    profilePage: {
      posts: [
        { message: "Post 1", likescount: 2 },
        { message: "Post 1", likescount: 4 },
        { message: "Post 1", likescount: 37 },
        { message: "Post 1", likescount: 21 },
        { message: "Post 1", likescount: 22 },
      ],
      newPostText: "NewPost",
    },
    messagesPage: {
      messages: [
        { message: "Hello" },
        { message: "How are you?" },
        { message: "Damba loh" },
      ],
      dials: [
        { id: 1, name: "Damba" },
        { id: 2, name: "Vadim" },
        { id: 3, name: "Odel" },
        { id: 4, name: "Ortem" },
        { id: 5, name: "Ya" },
        { id: 6, name: "Test" },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },
  getState() {
    return this._state
  },
  _callSubscriber() {
    console.log("State changed")
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state)
  },

  subscribe(observer) {
    this._callSubscriber = observer
  },
}

export default store
window.store = store
