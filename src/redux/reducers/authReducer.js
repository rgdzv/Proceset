import { SET_AUTHORIZED } from './../action-types/action-types'

const initialState = {
  authorized: localStorage.getItem('token') ? true : false
};

export const authReducer = (state = initialState, { type }) => {
  switch (type) {
    case SET_AUTHORIZED:
      return {
        ...state,
        authorized: !state.authorized
      };
    default:
      return state
  }
}
