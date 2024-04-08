import { createGlobalStyle } from 'styled-components';
// Abstracts
import * as palette from './variables';

export const GlobalStyle = createGlobalStyle`
  @-ms-viewport {
    width: device-width;
  }
  html {
    box-sizing: border-box;
    font-size: 13pt;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    overflow-y: auto;
    scroll-behavior: smooth;
    letter-spacing: 0.05em;
    scroll-padding-top: 72px;
  }

  body {
    -ms-overflow-style: scrollbar;
    line-height: 1;
    -webkit-text-size-adjust: none;
    -webkit-font-smoothing: antialiased;
    background-color: ${palette.APP_BACKGROUND_COLOR} !important;
    color:  ${palette.WHITE_COLOR};
    font-family: ${palette.CONTENT_FONT_FAMILY} !important;
  }

  body {
    overflow-x: hidden;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html, body, div, span, applet, object,
  iframe, h1, h2, h3, h4, h5, h6, p, blockquote,
  pre, a, abbr, acronym, address, big, cite,
  code, del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var, b,
  u, i, center, dl, dt, dd, ol, ul, li, fieldset,
  form, label, legend, table, caption, tbody,
  tfoot, thead, tr, th, td, article, aside,
  canvas, details, embed, figure, figcaption,
  footer, header, hgroup, menu, nav, output, ruby,
  section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after, q:before, q:after {
    content: none;
  }
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  input, select, textarea {
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
  }
  body, input, select, textarea, button {
    font-family: ${palette.FONT_FAMILY} !important;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.65;
  }
  section {
    position: relative;
  }
  a {
    -moz-transition: color 0.2s ease-in-out;
    -webkit-transition: color 0.2s ease-in-out;
    -ms-transition: color 0.2s ease-in-out;
    transition: color 0.2s ease-in-out;
    text-decoration: none;
  }
  strong {
    font-weight: 600;
  }

  h1,h2,h3,h4,h5,h6 {
    line-height: 1.25;
    margin-bottom: 0;
  }

  h1 {
    font-size: 36px;
  }

  h2 {
    font-weight: 600;
    font-size: 3.12vw;
    line-height: 3.6vw;
    color: ${palette.BLACK_COLOR};
    @media (max-width: 768px) {
      font-size: 32px;
      line-height: 40px;
    }
  }

  h3 {
    font-size: 2.6vw;
    line-height: 3vw;
    font-weight: 600;
    @media (max-width: 768px) {
      font-size: 26px;
      line-height: 32px;
    }
  }

  h4 {
    font-weight: 600;
    font-size: 1.8vw;
    line-height: 2.3vw;
    color: ${palette.BLACK_COLOR};
    @media (max-width: 768px) {
      font-size: 20px;
      line-height: 26px;
    }
  }

  h5 {
    font-weight: 600;
    font-size: 16px;
    line-height: 32px;
    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 18px;
    }
  }

  img {
    width: 100%;
  }

  p {
    font-family: ${palette.CONTENT_FONT_FAMILY};
    font-weight: normal;
    color: ${palette.PRIMARY_COLOR};
    font-size: 1.15vw;
    line-height: 1.8vw;
    @media (max-width: 600px) {
      font-size: 16px;
      line-height: 22px;
    }
  }
 
  #___gatsby {
    height: 100%;
    background: ${palette.APP_BACKGROUND_COLOR};
  }

  .ant-btn {
    border-radius: 8px;
    font-weight: 700;
    font-size: 1.15942vw;
    line-height: 1vw;
    color: ${palette.PRIMARY_COLOR};
    padding: 16px 32px;
    height: 3.5vw;
    border: 1px solid ${palette.PRIMARY_COLOR};
    box-shadow: none;
    background: ${palette.APP_BACKGROUND_COLOR} !important;
    font-family: ${palette.CONTENT_FONT_FAMILY} !important;
    &.active, &:hover, &:focus {
      color: ${palette.PRIMARY_COLOR} !important;
      border-color: ${palette.PRIMARY_COLOR} !important;
      background-color: ${palette.APP_BACKGROUND_COLOR} !important;
    }
    &:hover {
      background-color: ${palette.APP_BACKGROUND_COLOR} !important;
      border-color: ${palette.PRIMARY_COLOR} !important;
      color: ${palette.PRIMARY_COLOR} !important;
      box-shadow: none !important;
    }
    @media only screen and (max-width: 768px) {
      font-size: 14px !important;
      height: 40px !important;
    }
  }

  .ant-btn-primary {
    font-family: ${palette.CONTENT_FONT_FAMILY};
    font-weight: 600;
    font-size: 1.3vw;
    line-height: 1vw;
    padding: 16px 32px;
    height: 3.5vw;
    background: linear-gradient(135deg, #00C7B7 44.18%, #088CE0 100%) !important;
    border: none !important;
    color: ${palette.WHITE_COLOR} !important;
    &.active, &:hover, &:focus {
      color: ${palette.WHITE_COLOR} !important;
      border: none !important;
      background: linear-gradient(135deg, #00C7B7 44.18%, #088CE0 100%) !important;
    }
    @media only screen and (max-width: 768px) {
      font-size: 14px !important;
      height: 40px !important;
    }
  }

  .ant-input {
    font-family: ${palette.CONTENT_FONT_FAMILY} !important;
    color: ${palette.LITE_STEEL_BLUE};
    background: transparent !important;
  }

  .ant-input::placeholder {
    color: ${palette.LITE_STEEL_BLUE} !important;
    opacity: 0.6;
 }

 .ant-form-item-explain-error {
    font-family: ${palette.CONTENT_FONT_FAMILY} !important;
 }

  .drawerNavMenu {
    .ant-drawer-header {
      background: transparent !important;
      border: none !important;
      padding: 28px 30px !important;
    }
    .ant-drawer-content-wrapper {
      width: 100% !important;
    }
    .ant-drawer-content {
      backdrop-filter: blur(40px);
      background: linear-gradient(112.67deg ,rgba(0,0,0,0.4) 29.46%, rgba(0,0,0,0.2) 70.54%);
    }
    .ant-drawer-close {
      color: ${palette.WHITE_COLOR} !important;
      font-size: 24px;
      top: 30px;
      right: 10px;
      position: absolute;
      opacity: 0.7;
    }
    .ant-drawer-footer {
      border: none !important;
    }
  }
  .menuLogo {
    width: 160px;
    height: 24px;
    display: inline-block;
  }

  .contactSubmit {
    margin-bottom: 0;
    .ant-form-item-control-input-content {
      display: flex;
    }
    @media (max-width: 768px) {
      margin-bottom: 24px;
      .ant-btn {
        margin-left: 0px;
        font-size: 18px !important;
        height: 48px !important;
        width: 100%;
      }
    }
  }

  .getappModal {
    .ant-modal-content {
      background: ${palette.SECTION_BACKGROUND_COLOR};
      border-radius: 16px;
      border: 2px solid rgba(87, 110, 146, 0.7);
    }
    .ant-modal-close {
      color: #B4BECC !important;
    }
  }

  .deleteModal {
    .ant-modal-content {
      background: #25303E;
      border-radius: 14px;
      border: none;
    }
    .ant-modal-body {
      padding: 60px 24px 40px;
    }
    .ant-modal-close {
      color: #8FA3BC !important;
      .ant-modal-close-x {
        font-size: 20px;
      }
    }
    .modalTitle {
      color: ${palette.WHITE_COLOR};
      font-family: ${palette.CONTENT_FONT_FAMILY};
      font-size: 18px;
      font-weight: 600;
      line-height: 24px;
      text-align: center;
    }
    .modalDesc {
      color: #DFE3EA;
      font-family: ${palette.CONTENT_FONT_FAMILY};
      font-size: 13px;
      font-weight: 400;
      line-height: 20px;
      text-align: center;
      margin: 8px 0px 30px;
    }
    .infoContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 56px;
        height: 56px;
        margin-bottom:12px;
      }
    }
  }

  .filledBtn, .outlinedBtn {
    height: 40px;
    font-family: ${palette.CONTENT_FONT_FAMILY};
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    border-radius: 48px;
    padding: 8px 16px 8px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    margin: 16px auto;
  }
  .filledBtn {
    background: #3ADCCC !important;
    color: #003732 !important;
  }
  .outlinedBtn {
    background: transparent !important;
    color: ${palette.WHITE_COLOR} !important;
  }

  .gradientBtn {
    border: none;
    background: ${palette.WHITE_COLOR} !important;
    span {
      background: linear-gradient(138.99deg, #FF7C42 13.99%, #FA5094 86.01%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }

  .gradientBtn::before {
    content: '';
    display: block;
    position: absolute;
    border-radius: 8px;
    z-index: -1;
    background: linear-gradient(138.99deg, #FF7C42 13.99%, #FA5094 86.01%);
    opacity: 1;
  }

  .gradientBtn:hover::before {
    content: '';
    display: block;
    position: absolute;
    border-radius: 8px;
    z-index: -1;
    background: linear-gradient(138.99deg, #FF7C42 13.99%, #FA5094 86.01%);
    opacity: 1;
  }

  .messageCont {
    .ant-message-notice-content {
      padding: 0px;
      border-radius: 8px;
      width: 550px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      @media (max-width: 576px) {
        width: auto;
      }
    }
    .ant-message-success {
      background-color: #f6ffed;
    }
    .ant-message-error {
      background-color: #fff2f0;
    }
    .ant-message-custom-content {
      display: flex;
      align-items: center;
      padding: 20px;
      border-radius: 8px;
      span {
        &:last-child {
          text-align: left;
          margin-left: 8px;
          font-size: 16px;
          line-height: 28px;
          font-family: ${palette.CONTENT_FONT_FAMILY};
        }
      }
      .anticon {
        font-size: 24px;
      }
    }
  }

  .ant-modal-mask {
    background: rgba(0,0,0,0.7);
  }

  .fixedCircle {
    width: 10rem;
    height: 5rem;
    opacity: 50%;
    border-radius: 24.3513px;
    position: fixed;
    bottom: 0;
    filter: blur(65px);
    background: #00E8EC;
    top: 20%;
    left: 0;
    z-index: 1;
  }
  .fixedCircleBlue {
    width: 10rem;
    height: 7rem;
    opacity: 50%;
    border-radius: 24.3513px;
    position: fixed;
    bottom: 0px;
    filter: blur(90px);
    background: rgb(29, 0, 143);
    top: 28%;
    left: 14%;
    z-index: 1;
  }
  .fixedCircleBottom {
    width: 10rem;
    height: 5rem;
    opacity: 50%;
    border-radius: 24.3513px;
    position: fixed;
    filter: blur(90px);
    background: #00E8EC;
    bottom: 26%;
    right: 14%;
    z-index: 1;
  }
  .fixedCircleBlueBottom {
    width: 10rem;
    height: 7rem;
    opacity: 50%;
    border-radius: 24.3513px;
    position: fixed;
    bottom: 0px;
    filter: blur(90px);
    background: rgb(29, 0, 143);
    bottom: 18%;
    right: 0;
    z-index: 1;
  }

  h2, h3, p {
    z-index: 2;
    position: relative;
  }

  .ant-input, label {
    z-index: 3;
  }
`;
