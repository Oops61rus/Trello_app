import { IUserLogin, IUserLoginAction } from 'interfaces';
import { CHECK_USER, AUTH_USER_SUCCESS } from 'core/store/auth/actions';

const initialState: IUserLogin = {
  email: '',
  name: '',
  id: '',
  isAuthenticated: false,
};

export const authReducer = (state = initialState, action: IUserLoginAction) => {
  const { type, payload } = action;
  switch (type) {
    case CHECK_USER:
      return {
        ...state,
        email: payload.email,
      };
    case AUTH_USER_SUCCESS:
      return {
        ...state,
        email: payload.email,
        name: payload.name,
        id: payload.id,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};
