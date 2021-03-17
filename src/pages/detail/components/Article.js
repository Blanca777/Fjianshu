import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
// import { actionCreator } from '../store'
import { ArticleTitle, ArticleContent } from '../style'

class Article extends PureComponent {
  render() {
    const { article } = this.props
    return (
      <Fragment>
        <ArticleTitle>{article.get('title')}</ArticleTitle>
        <ArticleContent>{article.get('content')}</ArticleContent>
      </Fragment>
    )
  }
  
}
const mapState = (state) => ({
  article: state.getIn(['detail','article'])
  
})

export default connect(mapState, null)(Article)