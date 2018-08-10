import {
  RECEIVE_CHAT,
  RECEIVE_CHATS,
  RECEIVE_MESSAGE
} from '../actions/chat_actions';

// TODO create selectors to retrieve messages by chat rather than loading all
  // for each chat

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_CHATS:
      return action.payload.messages;
    case RECEIVE_CHAT:
      return Object.assign(newState, action.messages);
    case RECEIVE_MESSAGE:
      newState[action.message.id] = action.message;
      return newState;
    default:
      return state;
  }
};

export default messagesReducer;
