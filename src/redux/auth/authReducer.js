import authType from "./authType";

const initialAuthState = {
  name: "",
  isAuth: false,
  token: "",
  isLoading: false,
  error: "",
};

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case "auth/LOADING_START":
      return { ...state, isLoading: true };

    case "auth/LOADING_END":
      return { ...state, isLoading: false };

    case "auth/GET_USER_SUCCESS":
      return {
        ...state,
        name: action.payload.name,
        isAuth: true,
      };

    case "auth/GET_USER_FAILURE":
      console.log(action.payload);
      return { ...state, error: action.payload.error };

    case "auth/LOGIN_SUCCESS":
      return {
        ...state,
        name: action.payload.user.name,
        token: action.payload.token,
        isAuth: true,
      };

    case "auth/LOGIN_FAILURE":
      return { ...state, error: action.payload.error };

    case "auth/REGISTER_SUCCESS":
      return {
        ...state,
        name: action.payload.user.name,
        token: action.payload.token,
        isAuth: true,
      };

    case "auth/REGISTER_FAILURE":
      return { ...state, error: action.payload.error };

    case authType.LOGOUT_SUCCESS:
      return initialAuthState;

    default:
      return state;
  }
};

export default authReducer;
