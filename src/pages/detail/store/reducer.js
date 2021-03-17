import * as constants from './constants'
import { fromJS } from 'immutable';
const defaultState = fromJS({
  writer:{},
  writerArticle: [],
  recommendArticle: [],
  article:{}
})
// eslint-disable-next-line
export default (state=defaultState,action)=>{
  switch (action.type) {
    case constants.DETAIL_DATA:
      return state.merge({
        writer: action.writer,
        writerArticle: action.writerArticle,
        recommendArticle: action.recommendArticle,
        article: action.article
      })
    
    default:
      return state
  }
}