import React, { PureComponent } from 'react';
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
import Backtop from './components/Backtop'
import { actionCreator } from './store'
import { connect } from 'react-redux'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'


class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' alt='jianshu' src="https://rescdn.qqmail.com/zh_CN/htmledition/images/webp/tg-mj1e9c5d.jpg" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        <Backtop />
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.getHomeData()
  }
}
const mapDispatch = (dispatch) => ({
  getHomeData() {
    dispatch(actionCreator.getHomeDataAction())
  }
})
export default connect(null, mapDispatch)(Home)
