import styled from "styled-components";
import * as palette from "../../styles/variables";

export const ContactSection = styled.div`
  padding: 100px 60px;
  background: ${palette.SECTION_BACKGROUND_COLOR};
  h2 {
    text-align: center;
    background: linear-gradient(163.32deg, #A8B7D3 9.11%, #B5C6E2 34.93%, #D3E0EF 57.41%, #E5EFFA 93.73%);
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
    text-fill-color: transparent !important;
  }
  @media (max-width: 768px) {
    padding: 50px 20px;
    p {
      text-align: center;
      margin-top: 12px;
      color: ${palette.PRIMARY_COLOR};
    }
  }
`;

export const ContactContainer = styled.div`
  max-width: calc(100% - 15.2%);
  margin: auto;
  display: flex;
  margin-top: 4.25179856115108vw;
  backdrop-filter: blur(200px);
  border-radius: 20px;
  box-shadow: 0px 36px 89px rgba(0, 0, 0, 0.04);
  z-index: 2;
  position: relative;
  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 10vw;
    flex-direction: column-reverse;
    background: transparent;
    box-shadow:: none !important;
    z-index: unset;
  }
`;

export const ContactImgBlock = styled.div`
  width: 35%;
  background: #1A2830;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  position: relative;
  padding: 4.24460431654676vw 2.94964028776978vw;
  .contact_line {
    width: 1px;
    background: ${palette.STEEL_LIGHT};
    height: 92%;
    position: absolute;
    top: 5%;
    right: 0;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 16px;
    border: none;
    background: transparent;
    .contact_line {
      display: none;
    }
  }
`;

export const ContactImgBlockTop = styled.div`
  h3 {
    color: ${palette.ACCENT01};
    margin-bottom: 10px;
    font-family: ${palette.CONTENT_FONT_FAMILY};
    font-weight: 600;
  }
  p {
    color: ${palette.PRIMARY_COLOR};
    opacity: 1;
    font-weight: 500;
    font-size: 1.25vw;
    line-height: 1.8vw;
    font-family: ${palette.CONTENT_FONT_FAMILY};
  }
  @media (max-width: 768px) {
    p {
      font-size: 4vw;
      line-height: revert;
    }
  }
`;

export const ContactImgBlockBottom = styled.div`
  margin-top: 3.59712230215827vw;
`;

export const ContactImgBlockBottomBlocks = styled.a`
  display: flex;
  margin-top: 3.16546762589928vw;
  &:last-child {
    margin-top: 0.5vw;
  }
  img {
    width: 1.45107913669065vw;
    height: 1.45107913669065vw;
  }
  @media (max-width: 768px) {
    img {
      width: 14px;
      height: 14px;
      margin-top: 0px;
    }
  }
`;

export const ContactImgBlockBottomBlocksB1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: ${palette.PRIMARY_COLOR};
    opacity: 1;
    display: flex;
    align-items: center;
    margin-left: 1.00719424460432vw;
    font-family: ${palette.CONTENT_FONT_FAMILY};
  }
  @media (max-width: 768px) {
    p {
      margin-left: 6px;
      line-height: 22px;
    }
  }
`;

export const ContactInfoBlock = styled.div`
  width: 65%;
  padding: 3.7410071942446vw 3.09352517985611vw;
  display: flex;
  flex-direction: column;
  background: ${palette.APP_BACKGROUND_COLOR};
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border: 1px solid #000000;
  backdrop-filter: blur(100px);
  overflow: hidden;
  border: none;
  .ant-btn {
    padding: 4px 4vw;
    margin-left: auto;
    height: 3.6vw;
    font-weight: 700;
    font-size: 1.3vw;
    border-radius: 6px;
    color: ${palette.APP_BACKGROUND_COLOR} !important;
    background: ${palette.ACCENT01} !important;
  }
  .ant-form-item-label {
    font-family: ${palette.CONTENT_FONT_FAMILY};
    label {
      color: ${palette.PRIMARY_COLOR};
      font-size: 1.2vw !important;
      line-height: 1.6vw;
      font-family: ${palette.CONTENT_FONT_FAMILY};
      font-weight: 500;
    }
  }
  .ant-input {
    font-size: 1.2vw !important;
    line-height: 1.58273381294964vw;
    outline: none;
    background: ${palette.SECTION_BACKGROUND_COLOR} !important;
    border-radius: 6px;
    border: none !important;
    height: 3.5vw !important;
    color: ${palette.LITE_STEEL_BLUE};
    font-weight: 500;
    font-family: ${palette.CONTENT_FONT_FAMILY};
    outline: none !important;
    &:active, &:focus, &:hover {
      border: none !important;
      background: ${palette.SECTION_BACKGROUND_COLOR} !important;
    }
  }
  #contact_message {
    height: 8vw !important;
    padding-top: 14px;
  }
  .circle {
    width: 10rem;
    height: 10rem;
    opacity: 0.3;
    border-radius: 24.3513px;
    position: absolute;
    bottom: 0;
    filter: blur(100px);
    background: linear-gradient(138.99deg, #ff7c42 13.99%, #fa5094 86.01%);
  }
  .circle_blue {
    background: ${palette.ACCENT_CYAN};
    left: 45%;
    top: 15%;
  }
  .circle_yellow {
    background: ${palette.PRIMARY_COLOR};
    left: 70%;
    top: 50%;
    opacity: 0.2;
    filter: blur(100px);
  }
  @media (max-width: 768px) {
    width: 100%;
    background: ${palette.SECTION_BACKGROUND_COLOR};
    padding: 0px !important;
    display: flex;
    flex-direction: column;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 20px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 20px;
    box-shadow: unset;
    margin: auto;
    padding: 0;
    backdrop-filter: unset;
    border: none;
    padding: 16px 16px 0px;
    .circle {
      display: none;
    }
    .ant-input {
      background: ${palette.APP_BACKGROUND_COLOR} !important;
      height: 54px !important;
      font-size: 16px !important;
      &:active, &:focus, &:hover {
        background: ${palette.APP_BACKGROUND_COLOR} !important;
      }
  }
  #contact_message {
    height: 25vw !important;
    padding-top: 16px;
  }
  }
  .ant-form-item-label label {
    font-size: 14px !important;
    line-height: 24px;
  }
`;
