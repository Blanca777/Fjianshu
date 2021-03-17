import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../store'
import { Link } from 'react-router-dom'

import {
  ListItem,
  ItemTitle,
  ItemDesc,
  LoadMore
} from '../style'
class List extends PureComponent {
  render() {
    const { listItem, handleLoadMore } = this.props;
    return (
      <div>
        {
          listItem.map((item) => (
            <Link style={{ textDecoration:'none'}} key={item.get('id')} to={'/detail/'+item.get('id')}>
              <ListItem >
                <img src={item.get('imgUrl')} alt="" />
                <ItemTitle>{item.get('title')}</ItemTitle>
                <ItemDesc>{item.get('desc')}</ItemDesc>
              </ListItem>
            </Link>
            
          ))
        }
        <LoadMore onClick={handleLoadMore}>加载更多</LoadMore>
      </div>
    )
  }
}
const mapState = (state) => ({
  listItem: state.getIn(['home', 'listItem'])
})
const mapDispatch = (dispatch) => ({
  handleLoadMore(){
    dispatch(actionCreator.getLoadMoreAction())
  }
})
export default connect(mapState, mapDispatch)(List)