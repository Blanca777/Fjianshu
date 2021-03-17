import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../store'
import { BackTopWrapper } from '../style'

class Backtop extends PureComponent {
  render() {
    const { showBackTop, handleBackTop } = this.props;
    if (showBackTop) {
      return (
        <BackTopWrapper onClick={handleBackTop}><i className="iconfont">&#xe64f;</i></BackTopWrapper>
      )
    } else {
      return null
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.props.changeBackTopShow)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeBackTopShow)
  }
}
const mapState = (state) => ({
  showBackTop: state.getIn(['home', 'showBackTop'])
})
const mapDispatch = (dispatch) => ({
  handleBackTop() {
    window.scrollTo(0, 0)
  },
  changeBackTopShow(e) {
    if (document.documentElement.scrollTop > 400) {
      dispatch(actionCreator.getToggleBackTopAction(true))
    } else {
      dispatch(actionCreator.getToggleBackTopAction(false))
    }
  }
})
export default connect(mapState, mapDispatch)(Backtop)