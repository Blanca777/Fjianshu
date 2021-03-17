import React, { PureComponent } from 'react';
import { RecommendItem } from '../style'
import { connect } from 'react-redux';

class Recommend extends PureComponent {
  render() {
    const { recommendList } = this.props
    return (
      <div>
        {
          recommendList.map((item) => (
            <RecommendItem key={item.get('id')} href={item.get('href')}>
              <img src={item.get('imgUrl')} alt={item.get('title')} />
            </RecommendItem>
          ))
        }

      </div>
    )
  }
}
const mapState = (state) => ({
  recommendList: state.getIn(['home', 'recommendList'])
})
export default connect(mapState, null)(Recommend)