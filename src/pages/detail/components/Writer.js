import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import { actionCreator } from '../store'
import { ArticleWriter, WriterName, WriterAssets, ArticleItem, ArticleName, ArticleRead } from '../style'

class Writer extends PureComponent {
  render() {
    const { writer, writerArticle } = this.props
    return (
      <ArticleWriter>
        <img className='writerpic' src="https://iconfont.alicdn.com/t/6a9b6e41-e633-499e-9849-7bc7f106458e.png" alt="" />
        <WriterName>{writer.get('name')}</WriterName>
        <WriterAssets>资产：{writer.get('assets')}</WriterAssets>
        <div className="hr"></div>
        {
          writerArticle.map((item)=>(
            <ArticleItem key={item.get('id')}>
              <ArticleName>{item.get('title')}</ArticleName>
              <ArticleRead>{item.get('read')}</ArticleRead>
            </ArticleItem>
          ))
        }
        
      </ArticleWriter>
    )
  }

}
const mapState = (state) => ({
  writer: state.getIn(['detail','writer']),
  writerArticle: state.getIn(['detail','writerArticle'])
})

export default connect(mapState, null)(Writer)