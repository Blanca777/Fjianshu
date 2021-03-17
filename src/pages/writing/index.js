import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Writing extends PureComponent {
  render() {
    const { loginStatus } = this.props
    if (loginStatus) {
      return (
        <div>writing</div>
      )
    }else{
      return <Redirect to='/login' />
    }

  }

}
const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'loginStatus'])
})
const mapDispatch = (dispatch) => ({

})
export default connect(mapState, mapDispatch)(Writing)
