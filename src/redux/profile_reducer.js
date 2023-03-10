import { userAPI, profileAPI } from "../api/api"

const ADD_POST = "ADD-POST"

const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
let initialState = {
  posts: [
    { message: "Post 1", likesсount: 2 },
    { message: "Post 1", likesсount: 4 },
    { message: "Post 1", likesсount: 37 },
    { message: "Post 1", likesсount: 21 },
    { message: "Post 1", likesсount: 22 },
  ],

  profile: null,
  status: "",
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3423,
        message: action.newPost,
        likesсount: 0,
      }

      return { ...state, posts: [...state.posts, newPost], newPostText: "" }
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }
    case SET_STATUS: {
      return { ...state, status: action.status }
    }

    default:
      return state
  }
}

export const addPostActionCreator = (newPost) => {
  return {
    type: ADD_POST,
    newPost: newPost,
  }
}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await userAPI.getProfile(userId)
  dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data))
}

export const setStatus = (status) => ({ type: SET_STATUS, status })

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) dispatch(setStatus(status))
}

export default profileReducer
