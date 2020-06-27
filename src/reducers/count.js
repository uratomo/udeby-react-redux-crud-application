import { INCREMENT, DECREMENT } from "../actions";

const initialState = { value: 0 };

//  増減に関するロジック
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
};
