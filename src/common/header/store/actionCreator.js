import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

const changeSearchInfoList = (data)=>({
  type: constants.CHANGE_SEARCH_INFO_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 7)
})

export const getFocusAndBlurAction = ()=>({
  type: constants.FOCUS_AND_BLUR
})
export const getMouseInAndOutAction = ()=>({
  type: constants.MOUSE_IN_AND_OUT
})
export const getChangePageAction = (page)=>({
  type: constants.CHANGE_PAGE,
  page
})
export const getSearchInfoListAction = ()=>{
  return (dispatch)=>{
    axios.get('/api/searchInfoList.json').then((res)=>{
      dispatch(changeSearchInfoList(res.data.data))
    }).catch(()=>{
      console.log('获取SearchInfoList失败')
    })
  }
}