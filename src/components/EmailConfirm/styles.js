import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2vw 0vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .closebtn {
    border-color: #A9B7D4 !important;
    border-radius: 8px;
    color: ${palette.PRIMARY_COLOR} !important;
    font-size: 1.4vw !important;
    font-weight: 500;
    height: 4vw;
    width: 11vw;
    margin-top: 1.8vw;
    background: ${palette.SECTION_BACKGROUND_COLOR} !important;
  }
  @media only screen and (max-width: 768px) {
    .closebtn {
      height: 12vw !important;
      width: 30vw !important;
      font-size: 3.6vw !important;
      margin-top: 6vw;
    }
  }
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    margin: 0.6vw 0 1.8vw;
    text-align: center;
    font-size: 1.75vw;
    line-height: 2.3vw;
    background: linear-gradient(163.32deg, #A8B7D3 9.11%, #B5C6E2 34.93%, #D3E0EF 57.41%, #E5EFFA 93.73%);
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
    text-fill-color: transparent !important;
    font-weight: 800;
  }
  p {
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
    a {
      color: #00C7B7;
      text-decoration: underline;
    }
  }
  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 4.8vw;
      line-height: 6vw;
      margin: 2.6vw 0px 3.5vw;
    }
    p {
      font-size: 3.2vw;
      line-height: 4vw;
    }
  }
`;

export const LogoImage = styled.span`
  width: 8.8vw;
  height: 8.8vw;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 24vw;
    height: 24vw;
  }
`;
