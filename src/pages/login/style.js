import styled from 'styled-components'

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #f1f1f1;
  overflow: hidden;
`;
export const LoginBox = styled.div`
  
  width: 400px;
  height: 300px;
  margin: 100px auto;
  background: #fff;
  border-radius: 10px;
  display: block;
`;
export const Username = styled.input`
  width: 200px;
  height: 40px;
  padding: 0 20px;
  margin-top: 30px;
  margin-left: 80px;
  font-size: 16px;
`;
export const Password = styled.input`
  width: 200px;
  height: 40px;
  padding: 0 20px;
  margin-top: 10px;
  margin-left: 80px;
  font-size: 16px;
`;
export const LoginBtn = styled.button`
  margin: 20px auto;
  width: 240px;
  padding: 9px 18px;
  margin-top: 70px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  color: #fff;
  background: #3194d0;
  cursor: pointer;
  outline: none;
  display: block;
`;