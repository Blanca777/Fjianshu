import * as constants from './constants'
import axios from 'axios'

const login = (data)=>({
    type: constants.LOGIN,
    data
})
export const getLoginAction = (username,password)=>{
  return (dispatch)=>{
    axios.get('/api/login.json?username='+username+'&password'+password).then(res=>{
      dispatch(login(res.data))
    }).catch(err=>{
      console.log(err)
    })
  }
}
export const getLogoutAction = ()=>({
  type: constants.LOGOUT
})