import styled from 'styled-components'

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;
export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;
export const HomeRight = styled.div`
  width: 280px;
  float: right;
  margin-top: 50px;
`;
export const BackTopWrapper = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  display: block;
  position: fixed;
  right: 150px;
  bottom: 50px;
  color: #333;
  border: 1px solid #dcdcdc;
  &:hover{
    background: #f7f7f7
  }
`
export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
`;
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
  }
`;
export const ListItem = styled.div`
  width: 625px;
  height: 140px;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 20px;
  img {
    width: 150px;
    height: 100px;
    border-radius: 5px;
    float: right;
  }
`

export const ItemTitle = styled.p`
  width: 450px;
  margin: 10px 0 14px;
  font-size: 18px;
  font-weight: 700;
  color: #333;
`
export const ItemDesc = styled.div`
  margin: 0 0 8px;
  width: 450px;
  font-size: 14px;
  line-height: 24px;
  color: #999;
`
export const LoadMore = styled.div`
  cursor: pointer;
  width: 100%;
  background: #a5a5a5;
  height: 40px;
  border-radius: 20px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 50px;
  font-size: 15px;
  color: #fff;
  &:hover {
    background: #999
  }
`
export const RecommendItem = styled.a`
  display: block;
  margin-bottom: 7px;
  img{
    width: 280px;
    height: 50px;
  }

`
export const WriterTitle = styled.div`
  width: 280px;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #969696;


`
export const WriterSwitch = styled.div`
  float: right;
  color: #787878;
  cursor: pointer;
  .writerSpin {
    font-size: 12px;
    float: left;
    margin-right: 5px;
    transition: all .2s linear;
    transform-origin: center center;
  }
`
export const WriterItem = styled.div`
  width: 280px;
  height: 50px;
  overflow: hidden;
  margin-bottom: 15px;
  img{

    float: left;
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
`
export const WriterName = styled.div`
  margin-top: 7px;
  margin-left: 10px;
  color: #333;
  font-size: 14px;
`
export const WriterDesc = styled.div`
  margin-top: 13px;
  margin-left: 10px;
  font-size: 12px;
  color: #969696;
`
export const WriterFocus = styled.div`
  float: right;
  margin-top: -35px;
  font-size: 13px;
  color: #42c02e;
`