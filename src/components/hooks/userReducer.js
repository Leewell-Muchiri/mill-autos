// userReducer.js

const initialState = {
  user: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESET_USER_DATA":
      return {
        ...state,
        user: [],
      };
    default:
      return state;
    case "ADD_NAME":
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    case "name":
      return {
        ...state,
        name: action.payload,
      };
  }
};

export default userReducer;
