import React, { Component } from 'react';
import Article from './components/Article'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import { connect } from 'react-redux'
import { actionCreator } from './store';
import { withRouter } from 'react-router-dom'

import { 
  DetailWrapper,
  DetailLeft,
  DetailRight
} from './style'
class Detail extends Component {
  render() {
    return (
      <DetailWrapper>
        <div className="box">
          <DetailLeft>
            <Article />
          </DetailLeft>
          <DetailRight>
            <Writer />
            <Recommend />
          </DetailRight>
        </div>
      </DetailWrapper>
    )
  }
  componentDidMount(){
    this.props.getDetailData(this.props.match.params.id)
  }
  
}
const mapDispatch = (dispatch)=>({
  getDetailData(id){
    dispatch(actionCreator.getDetailDataAction(id))
  }
})
export default connect(null,mapDispatch)(withRouter(Detail))