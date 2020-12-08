import { ERROR, CLEAN_ERROR} from './../action-types/action-types'

const initialState = {
  error: ''
};

export const errorReducer = (state = initialState, { type, errorMessage }) => {
  switch (type) {
    case ERROR:
      return {
        ...state,
        error: errorMessage
      };
    case CLEAN_ERROR:
      return {
        ...state,
        error: ''
      };
    default:
      return state
  }
}
