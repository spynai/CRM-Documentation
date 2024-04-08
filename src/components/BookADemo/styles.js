import styled from "styled-components"
import * as palette from "../../styles/variables"

export const BookADemoSection = styled.div`
  padding: 100px 60px;
  background: ${palette.SECTION_BACKGROUND_COLOR};
  h2 {
    text-align: center;
    background: linear-gradient(
      163.32deg,
      #a8b7d3 9.11%,
      #b5c6e2 34.93%,
      #d3e0ef 57.41%,
      #e5effa 93.73%
    );
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
    text-fill-color: transparent !important;
  }
  @media (max-width: 768px) {
    padding: 50px 20px;
    h2 {
      font-size: 20px !important;
    }
    p {
      font-size: 15px !important;
      text-align: center;
      margin-top: 12px;
      color: ${palette.PRIMARY_COLOR};
    }
  }
`

export const BookADemoContainer = styled.div`
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
`

export const BookADemoImgBlock = styled.div`
  width: 35%;
  background: #1a2830;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  position: relative;
  padding: 4.24460431654676vw 2.94964028776978vw;
  .bookademo_line {
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
    .bookademo_line {
      display: none;
    }
  }
`

export const BookADemoImgBlockTop = styled.div`
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
`

export const BookADemoImgBlockBottom = styled.div`
  margin-top: 3.59712230215827vw;
`

export const BookADemoImgBlockBottomBlocks = styled.a`
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
`

export const BookADemoImgBlockBottomBlocksB1 = styled.div`
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
`

export const BookADemoInfoBlock = styled.div`
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
    &:active,
    &:focus,
    &:hover {
      border: none !important;
      background: ${palette.SECTION_BACKGROUND_COLOR} !important;
    }
  }
  #demo_message {
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
      &:active,
      &:focus,
      &:hover {
        background: ${palette.APP_BACKGROUND_COLOR} !important;
      }
    }
    #demo_message {
      height: 25vw !important;
      padding-top: 16px;
    }
  }
  .ant-form-item-label label {
    font-size: 14px !important;
    line-height: 24px;
  }
`
export const SectionContainer = styled.section`
  padding: 100px 60px;
  background: ${palette.APP_BACKGROUND_COLOR};
  overflow: hidden;
  &.secTitle {
    padding-bottom: 0px;
  }
  @media only screen and (max-width: 768px) {
    padding: 50px 20px;
    &.secTitle {
      padding-bottom: 0px;
    }
  }
  .workRow {
    max-width: 1300px;
    margin: 0px auto;
  }
  .circle {
    width: 13rem;
    height: 13rem;
    opacity: 50%;
    border-radius: 24.3513px;
    position: absolute;
    bottom: 7%;
    filter: blur(100px);
    background: #00e8ec;
    right: -10%;
    z-index: 1;
  }
  .circleLight {
    width: 10rem;
    height: 10rem;
    opacity: 50%;
    border-radius: 24.3513px;
    position: absolute;
    bottom: 0;
    filter: blur(100px);
    background: #00e8ec;
    top: 15%;
    left: 8%;
    z-index: 1;
  }
  .circleBlue {
    width: 10rem;
    height: 10rem;
    opacity: 50%;
    border-radius: 24.3513px;
    position: absolute;
    bottom: 0px;
    filter: blur(90px);
    background: rgb(29, 0, 143);
    top: 40%;
    left: 23%;
  }
`

export const SectionHeader = styled.div`
  max-width: 50vw;
  margin: 0 auto;
  h2 {
    text-align: center;
    background: linear-gradient(
      163.32deg,
      #a8b7d3 9.11%,
      #b5c6e2 34.93%,
      #d3e0ef 57.41%,
      #e5effa 93.73%
    );
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
    text-fill-color: transparent !important;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    p {
      font-size: 18px !important;
      line-height: 24px !important;
    }
  }
  p {
    text-align: center;
    margin-top: 12px;
    color: ${palette.PRIMARY_COLOR};
    font-size: 1.35vw;
    line-height: 1.9vw;
  }
`

export const ImageSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    max-width: 500px;
    display: inline-block;
    z-index: 2;
  }
  @media (max-width: 768px) {
    margin-bottom: 24px;
    span {
      max-width: 200px;
    }
  }
`

export const ContentSection = styled.div`
  max-width: 550px;
  margin: 0 auto;
  .description {
    margin: 14px 0px;
    display: inline-block;
    font-size: 1.35vw;
    line-height: 1.9vw;
  }
  h3 {
    background: linear-gradient(
      163.32deg,
      #a8b7d3 9.11%,
      #b5c6e2 34.93%,
      #d3e0ef 57.41%,
      #e5effa 93.73%
    );
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
    text-fill-color: transparent !important;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    h3 {
      margin-bottom: 0px;
      text-align: center;
    }
    .description {
      text-align: center;
      font-size: 18px;
      line-height: 24px;
    }
  }
`
