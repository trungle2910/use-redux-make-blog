import * as types from "../constants/auth.constants";
const initialState = {
  user: {},
  isAuthenticated: null,
  loading: false,
  accessToken: localStorage.getItem("trungMapNe"),
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_REQUEST:
      return { ...state, loading: true };
    case types.LOGIN_SUCCESS:
      localStorage.setItem("trungMapNe", payload.accessToken);
      return {
        ...state,
        user: payload.user,
        accessToken: payload.accessToken,
        isAuthenticated: true,
        loading: false,
      };
    case types.LOGIN_FAILURE:
      return { ...state, isAuthenticated: false, loading: false };
    case types.REGISTER_REQUEST:
      return { ...state, loading: true };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        user: payload.user,
        loading: false,
      };
    case types.REGISTER_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default authReducer;
