import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'
const getHomeData = (data,totalPage)=>{
  return {
    type: constants.HOME_DATA,
    topicList : fromJS(data.topicList),
    listItem : fromJS(data.listItem),
    recommendList : fromJS(data.recommendList),
    writerList : fromJS(data.writerList),
    totalPage: fromJS(totalPage)
  }
}
const getLoadMore = (listItem)=>({
  type: constants.LOAD_MORE,
  listItem: fromJS(listItem)
})
export const getToggleBackTopAction = (show)=>({
  type: constants.TOGGLE_BACKTOP,
  show
})

export const getSwitchWriterAction = (page)=>({
  type: constants.SWITCH_WRITER,
  page
})


export const getLoadMoreAction = ()=>{
  return (dispatch)=>{
    axios.get('/api/loadMore.json').then(res=>{
      dispatch(getLoadMore(res.data.listItem))
    }).catch(err=>{
      console.log(err)
    })
  }
}
export const getHomeDataAction = ()=>{
  return (dispatch)=>{
    axios.get('/api/homeData.json').then(res=>{
      const totalPage = Math.ceil(res.data.writerList.length / 4)
      dispatch(getHomeData(res.data,totalPage))
    }).catch(err=>{
      console.log(err)
    })
  }
}