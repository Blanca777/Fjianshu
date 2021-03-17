import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

const getDetailData = (data)=>{
  return {
    type: constants.DETAIL_DATA,
    writer: fromJS(data.writer),
    writerArticle: fromJS(data.writerArticle),
    recommendArticle: fromJS(data.recommendArticle),
    article: fromJS(data.article)
  }
}
export const getDetailDataAction = (id)=>{
  return (dispatch)=>{
    axios.get('/api/detailData.json?id='+id).then(res=>{
      dispatch(getDetailData(res.data))
      console.log(res.data)
    }).catch(err=>{
      console.log(err)
    })
  }
}