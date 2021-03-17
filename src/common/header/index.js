import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreator } from './store'
import { Link } from 'react-router-dom'
import { actionCreator as loginActionCreator } from '../../pages/login/store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  NavSearch,
  Addition,
  Button
} from './style'
class Header extends Component {

  render() {
    const { focused, handleFocusAndBlur, list, loginStatus, Logout } = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          {
            loginStatus ? <NavItem onClick={Logout} className='right'>退出</NavItem> : <Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
          }

          <NavItem className='right'><i className="iconfont">&#xe646;</i></NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={400}
              classNames='slide'
            >
              <NavSearch className={focused ? 'focused' : ''} onFocus={() => handleFocusAndBlur(list)} onBlur={handleFocusAndBlur}></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont searchIcon' : 'iconfont searchIcon'}>&#xe662;</i>
            {this.getSearchInfo()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to='/writing'>
            <Button className='writting'><i className="iconfont">&#xe734;</i>写文章</Button>
          </Link>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
  getSearchInfo = () => {
    const { focused, list, mouseIn, page, totalPage, handleMouseInAndOut, handleSwitch } = this.props
    const newList = list.toJS()
    const pageList = []
    if (newList.length) {
      for (let i = (page - 1) * 7; i < page * 7 && i < newList.length; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseInAndOut} onMouseLeave={handleMouseInAndOut}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleSwitch(page, totalPage, this.spin)}><i ref={(spin) => { this.spin = spin }} className="iconfont spin">&#xe663;</i>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
}


const mapStateToProps = (state) => {
  return {
    // focused: state.get('header').get('focused')
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    loginStatus: state.getIn(['login', 'loginStatus']),
  }
}
const mapDispatchToProps = (dispatch) => ({
  handleFocusAndBlur(list) {
    (list.size === 0) && (dispatch(actionCreator.getSearchInfoListAction()))
    dispatch(actionCreator.getFocusAndBlurAction())
  },

  handleMouseInAndOut() {
    dispatch(actionCreator.getMouseInAndOutAction())
  },

  handleSwitch(page, totalPage, spin) {
    let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
    if (originAngle) {
      originAngle = parseInt(originAngle, 10)
    } else {
      originAngle = 0
    }
    spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
    if (page < totalPage) {
      dispatch(actionCreator.getChangePageAction(page + 1))
    } else {
      dispatch(actionCreator.getChangePageAction(1))
    }
  },

  Logout() {
    dispatch(loginActionCreator.getLogoutAction())
  }

})
export default connect(mapStateToProps, mapDispatchToProps)(Header)