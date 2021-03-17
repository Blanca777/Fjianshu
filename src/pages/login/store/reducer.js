import * as constants from './constants'
import { fromJS } from 'immutable';
const defaultState = fromJS({
  loginStatus: false
})
// eslint-disable-next-line
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.LOGIN:
      if (action.data) {
        return state.set('loginStatus', true)
      } else {
        return state.set('loginStatus', false)
      }
    case constants.LOGOUT:
      return state.set('loginStatus', false)
    default:
      return state
  }
}