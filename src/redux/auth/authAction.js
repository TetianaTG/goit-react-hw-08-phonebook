import authType from "./authType";

/* LOADER */

const loadingStart = () => ({
  type: authType.LOADING_START,
});

const loadingEnd = () => ({
  type: authType.LOADING_END,
});

/* GET CURRENT USER */

const getCurrentUserSuccess = (data) => ({
  type: authType.GET_USER_SUCCESS,

  payload: data,
});

const getCurrentUserFailure = (error) => ({
  type: authType.GET_USER_FAILURE,
  payload: error,
});

/* LOGIN */

const loginSuccess = (data) => ({
  type: authType.LOGIN_SUCCESS,

  payload: data,
});

const loginFailure = (error) => ({
  type: authType.LOGIN_FAILURE,

  payload: error,
});

/* REGISTER */

const registerSuccess = (data) => ({
  type: authType.REGISTER_SUCCESS,

  payload: data,
});

const registerFailure = (error) => ({
  type: authType.REGISTER_FAILURE,

  payload: { error },
});

/* LOGOUT */

const logoutSuccess = () => ({
  type: authType.LOGOUT_SUCCESS,
});

const logoutFailure = (error) => ({
  type: authType.LOGOUT_FAILURE,

  payload: { error },
});

export default {
  loadingStart,
  loadingEnd,

  getCurrentUserSuccess,
  getCurrentUserFailure,

  loginSuccess,
  loginFailure,

  registerSuccess,
  registerFailure,

  logoutSuccess,
  logoutFailure,
};
