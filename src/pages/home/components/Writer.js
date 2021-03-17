import React, { PureComponent } from 'react';
import { WriterTitle, WriterSwitch, WriterItem, WriterName, WriterDesc, WriterFocus } from '../style'
import { connect } from 'react-redux'
import { actionCreator } from '../store'

class Writer extends PureComponent {
  render() {
    const { page, totalPage, handleSwitch } = this.props
    return (
      <div>
        <WriterTitle>
          推荐作者
          <WriterSwitch onClick={() => handleSwitch(page, totalPage, this.writerSpin)}><i ref={(writerSpin) => { this.writerSpin = writerSpin }} className="iconfont writerSpin">&#xe663;</i>换一批</WriterSwitch>
        </WriterTitle>
        {
          this.getWriterList()
          // writerList.map((item) => (
          //   <WriterItem key={item.get('id')}>
          //     <img src={item.get('imgUrl')} alt="" />
          //     <WriterName>{item.get('name')}</WriterName>
          //     <WriterDesc>写了{item.get('wordNum')}字 · {item.get('FocusNum')}喜欢</WriterDesc>
          //     <WriterFocus>+关注</WriterFocus>
          //   </WriterItem>
          // ))
        }

      </div>
    )
  }
  getWriterList() {

    const { page, writerList } = this.props;
    const newList = writerList.toJS()
    const wList = []
    if (newList.length) {
      for (let i = (page - 1) * 4; i < page * 4 && i < newList.length; i++) {
        wList.push(
          <WriterItem key={newList[i]['id']}>
            <img src={newList[i]['imgUrl']} alt="" />
            <WriterName>{newList[i]['name']}</WriterName>
            <WriterDesc>写了{newList[i]['wordNum']}字 · {newList[i]['FocusNum']}喜欢</WriterDesc>
            <WriterFocus>+关注</WriterFocus>
          </WriterItem>
        )
      }
    }
    return wList
  }
}
const mapState = (state) => ({
  writerList: state.getIn(['home', 'writerList']),
  page: state.getIn(['home', 'page']),
  totalPage: state.getIn(['home', 'totalPage']),
})
const mapDispatch = (dispatch) => ({
  handleSwitch(page, totalPage, writerSpin) {
    let originAngle = writerSpin.style.transform.replace(/[^0-9]/ig, '')
    if (originAngle) {
      originAngle = parseInt(originAngle, 10)
    } else {
      originAngle = 0
    }
    writerSpin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
    if (page < totalPage) {
      dispatch(actionCreator.getSwitchWriterAction(page + 1))
    } else {
      dispatch(actionCreator.getSwitchWriterAction(1))
    }

  }
})
export default connect(mapState, mapDispatch)(Writer)