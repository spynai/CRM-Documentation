import styled from "styled-components"
import * as palette from "../../styles/variables"

export const SectionContainer = styled.section`
  padding: 10px 60px 20px;
  background: ${palette.APP_BACKGROUND_COLOR};
  overflow: hidden;
  &.secTitle {
    padding-bottom: 0px;
  }
  @media only screen and (max-width: 768px) {
    padding: 5px 20px;
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
  max-width: 60vw;
  margin: 0 auto;
  h2 {
    margin-top: 58px;
    text-align: start;
    font-size: 32px;
    fontweight: FontWeith.w500;
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
      font-size: 20px !important;
      line-height: 24px !important;

      fontweight: FontWeith.w400;
    }
  }
  p {
    text-align: center;
    margin-top: 12px;
    color: ${palette.PRIMARY_COLOR};
    font-size: 1.35vw;
    fontweight: FontWeith.w400;
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
