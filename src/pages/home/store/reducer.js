import { fromJS } from 'immutable';
import * as constants from './constants'

const defaultState = fromJS({
  topicList: [],
  listItem: [],
  recommendList: [],
  writerList: [],
  page: 1,
  totalPage: 1,
  showBackTop: false
});
const homeData = (state,action)=>{
  return state.merge({
    topicList: action.topicList,
    listItem: action.listItem,
    recommendList: action.recommendList,
    writerList: action.writerList,
    totalPage: action.totalPage
  })
}
const switchWriter=(state,action)=>{
  return state.set('page', action.page)
}
const loadMore=(state,action)=>{
  return state.set('listItem',state.get('listItem').concat(action.listItem))
}
const toggleBacktop=(state,action)=>{
  return state.set('showBackTop', action.show)
}
// eslint-disable-next-line
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.HOME_DATA:
      return homeData(state,action)
    case constants.SWITCH_WRITER:
      return switchWriter(state,action)
    case constants.LOAD_MORE:
      return loadMore(state,action)
    case constants.TOGGLE_BACKTOP:
      return toggleBacktop(state,action)
    default:
      return state
  }
}