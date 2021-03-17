import styled from 'styled-components'

export const DetailWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: #f9f9f9;
  .box{
    width: 1000px;
    margin: 20px auto;
  }
`;
export const DetailLeft = styled.div`
  overflow: hidden;
  display: block;
  float: left;
  width: 650px;
  padding: 30px;
  background: #fff;
`;
export const DetailRight = styled.div`
  overflow: hidden;
  float: right;
`;
export const ArticleTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  word-break: break-word;
  color: #404040;
`;
export const ArticleContent = styled.article`
  font-weight: 400;
  line-height: 1.8;
  margin-top: 50px;
  margin-bottom: 20px;
  word-break: break-word;
  font-size: 16px;
  color: #404040;
`;
export const ArticleWriter = styled.div`
  width: 220px;
  height: 250px;
  background: #fff;
  padding: 20px;
  margin-bottom: 20px;
  .writerpic{
    width: 50px;
    height: 50px;
    float: left;
    border-radius: 50px;
  }
  .hr {
    width: 100%;
    height: 1px;
    margin: 16px 0;
    background-color: #eee;
  }
`;
export const ArticleRecommend = styled.div`
  width: 220px;
  height: 250px;
  background: #fff;
  padding: 20px;
  h1{
    font-size: 16px;
    padding-left: 6px;
    height: 18px;
    border-left: 4px solid #ec7259;
  }
`;
export const WriterName = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
  margin-right: 5px;
  font-size: 16px;
  color: #404040;
`;
export const WriterAssets = styled.div`
  margin-bottom: 10px;
  color: #969696;
  font-size: 12px;
  margin-right: 5px;
`;
export const ArticleItem = styled.div`
  width: 220px;
  height: 60px;
  margin-top: 10px;
`;
export const ArticleName = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #2d2d2d;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ArticleRead = styled.div`
  font-size: 12px;
  color: #969696;
`;