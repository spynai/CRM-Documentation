import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const FooterSection = styled.div`
  background: ${palette.APP_BACKGROUND_COLOR};
  padding: 120px 20px;
  padding-top: 17%;
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 45px 20px;
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    padding: 30px;
  }
  @media (max-width: 768px) {
    padding: 30px 20px 120px;
  }
`;

export const IntouchFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IntouchMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 4.8vw 0 2.3vw;
  @media only screen and (max-width: 768px) {
    margin: 20px 0px;
    .media-link {
      margin: 0px 10px !important;
      img {
        width: 20px !important;
        height: 20px !important;
      }
    }
  }
  .media-link {
    margin: 0px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    img {
      height: 1.8vw;
      width: 1.8vw;
    }
    &:hover {
      opacity: 1;
    }
  }
`;

export const IntouchCopyrights = styled.div`
  font-size: 1.1vw;
  line-height: 2.1vw;
  letter-spacing: 0.06em;
  color: ${palette.PRIMARY_COLOR};
  opacity: 0.8;
  font-family: ${palette.CONTENT_FONT_FAMILY};
  z-index: 2;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

export const IntouchTerms = styled.div`
  margin-top: 10px;
  a {
    font-size: 1.1vw;
    line-height: 1.1vw;
    letter-spacing: 0.06em;
    color: ${palette.PRIMARY_COLOR};
    opacity: 0.8;
    font-family: ${palette.CONTENT_FONT_FAMILY};
    padding: 0px 12px;
    border-right: 1px solid ${palette.PRIMARY_COLOR};
    display: inline-block;
    z-index: 2;
    &:last-child {
      border: none;
    }
    &:first-child {
      padding-left: 0px;
    }
    &:hover, &:focus, &:active {
      background: linear-gradient(135deg, #00C7B7 44.18%, #088CE0 100%);
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
      background-clip: text !important;
      text-fill-color: transparent !important;
    }
    @media only screen and (max-width: 768px) {
      font-size: 14px;
      line-height: 24px;
    }
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;
