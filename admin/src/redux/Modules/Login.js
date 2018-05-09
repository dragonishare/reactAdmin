export const LOGIN_REQUESTED = 'Login/LOGIN_REQUESTED';
export const LOGIN = 'Login/LOGIN';
export const LOGOUT_REQUESTED = 'Login/LOGOUT_REQUESTED';
export const LOGOUT = 'Login/LOGOUT';

const initialState = {
  isLoggingIn: false,
  isLoggingOut: false
};

export const login = () => {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: LOGIN
      });
    }, 3000);
  };
};

export const logout = () => {
  return dispatch => {
    dispatch({
      type: LOGOUT_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: LOGOUT
      });
    }, 3000);
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUESTED:
      return {
        ...state,
        isLoggingIn: true
      };

    case LOGIN:
      return {
        ...state,
        isLoggingIn: !state.isLoggingIn
      };

    case LOGOUT_REQUESTED:
      return {
        ...state,
        isLoggingOut: true
      };

    case LOGOUT:
      return {
        ...state,
        isLoggingOut: !state.isLoggingOut
      };

    default:
      return state;
  }
};
