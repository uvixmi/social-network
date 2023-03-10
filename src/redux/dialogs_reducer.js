const SEND_MESSAGE = "SEND-MESSAGE"

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody
      return {
        ...state,

        messages: [...state.messages, { id: 7, message: body }],
      }
    default:
      return state
  }
}

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody: newMessageBody,
})

export default dialogsReducer
