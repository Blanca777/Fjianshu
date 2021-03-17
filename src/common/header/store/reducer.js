import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  list: [],
  mouseIn: false,
  page: 1,
  totalPage: 1
})
// eslint-disable-next-line
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.FOCUS_AND_BLUR:
      return state.set('focused', !state.get('focused'))
    case constants.CHANGE_SEARCH_INFO_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case constants.MOUSE_IN_AND_OUT:
      return state.set('mouseIn', !state.get('mouseIn'))
    case constants.CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state
  }
}