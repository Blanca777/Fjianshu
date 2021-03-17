import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import { actionCreator } from '../store'
import { ArticleRecommend, ArticleItem, ArticleName, ArticleRead } from '../style'

class Recommend extends PureComponent {
  render() {
    const { recommendArticle } = this.props
    return (
      <ArticleRecommend>
        <h1>推荐阅读</h1>
        {
          recommendArticle.map((item)=>(
            <ArticleItem key={item.get('id')}>
              <ArticleName>{item.get('title')}</ArticleName>
              <ArticleRead>阅读：{item.get('read')}</ArticleRead>
            </ArticleItem>
          ))
        }
        
      </ArticleRecommend>
    )
  }

}
const mapState = (state) => ({
  recommendArticle: state.getIn(['detail','recommendArticle'])
})
const mapDispatch = (dispatch) => ({

})
export default connect(mapState, mapDispatch)(Recommend)