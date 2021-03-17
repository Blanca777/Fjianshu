import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoginWrapper, LoginBox, Username, Password, LoginBtn } from './style'
import { actionCreator } from './store'


class Login extends PureComponent {
  render() {
    const { login, loginStatus } = this.props
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Username placeholder='手机号或邮箱' ref={(input) => { this.username = input }} />
            <Password placeholder='密码' type='password' ref={(input) => { this.password = input }} />
            <LoginBtn onClick={() => login(this.username, this.password)}>登录</LoginBtn>
          </LoginBox>
        </LoginWrapper>
      )
    }else{
      return <Redirect to='/' />
    }

  }

}
const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'loginStatus'])
})
const mapDispatch = (dispatch) => ({
  login(username, password) {
    dispatch(actionCreator.getLoginAction(username.value, password.value))
  }
})
export default connect(mapState, mapDispatch)(Login)
