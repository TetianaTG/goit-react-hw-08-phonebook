import api from "../../services/api";
import authAction from "./authAction";

const loginOperation = (loginObject) => (dispatch) => {
  console.log(dispatch);
  dispatch(authAction.loadingStart());

  api
    .login(loginObject)
    .then(({ data }) => {
      console.log(data);
      api.token.set(data.token);
      dispatch(authAction.loginSuccess(data));
    })
    .catch((error) => dispatch(authAction.loginFailure(error)));
};

const registerOperation = (registerObject) => (dispatch) => {
  dispatch(authAction.loadingStart());
  console.log(registerObject);

  api
    .register(registerObject)
    .then(({ data }) => {
      api.token.set(data.token);
      dispatch(authAction.registerSuccess(data));
    })
    .catch((error) => dispatch(authAction.registerFailure(error)));
};

const logoutOperation = () => (dispatch) => {
  dispatch(authAction.loadingStart());

  api
    .logout()
    .then(() => {
      api.token.unset();
      dispatch(authAction.logoutSuccess());
    })
    .catch((error) => dispatch(authAction.logoutFailure(error)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    authRoot: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  api.token.set(persistedToken);

  dispatch(authAction.loadingStart());
  api
    .getCurrentUser()
    .then(({ data }) => {
      dispatch(authAction.getCurrentUserSuccess(data));
    })
    .catch((error) => dispatch(authAction.getCurrentUserFailure(error)));
};

export default {
  loginOperation,
  registerOperation,
  logoutOperation,
  getCurrentUser,
};
