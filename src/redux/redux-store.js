import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux"
import authReducer from "./auth-reducer"
import dialogsReducer from "./dialogs_reducer"
import profileReducer from "./profile_reducer"
import sidebarReducer from "./sidebar_reducer"
import usersReducer from "./users_reducer"
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from "redux-form"
import appReducer from "./app-reducer"
let reducersBatch = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
})

let store = createStore(reducersBatch, applyMiddleware(thunkMiddleware))

window.store = store

export default store
