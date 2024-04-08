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
    text-align: start;
    font-size: 32px;
    font-weight: FontWeith.w600;
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

  p {
    text-align: start;
    margin-top: 12px;
    color: ${palette.PRIMARY_COLOR};
    font-size: 1.35vw;
    font-weight: FontWeith.w400;
    line-height: 1.9vw;
  }

  @media (max-width: 768px) {
    max-width: 100%;

    h2 {
      text-align: center;
      font-size: 20px !important;
    }

    p {
      text-align: center;
      font-size: 15px !important;
      line-height: 24px !important;
      font-weight: FontWeith.w400;
    }
  }
`
