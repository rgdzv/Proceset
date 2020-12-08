import { ERROR, CLEAN_ERROR, SET_AUTHORIZED } from './../action-types/action-types'

export const getError = (errorMessage) => ({
  type: ERROR,
  errorMessage
})

export const cleanError = () => ({
  type: CLEAN_ERROR
})

export const setAuthorized = () => ({
  type: SET_AUTHORIZED
})