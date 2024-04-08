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
    // padding: 5px 20px;
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
  @media (max-width: 768px) {
    max-width: 100%;

    h2 {
      margin-top: 30px !important;
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
export const StyledFrame = styled.div`
  align-items: flex-center;
  background: linear-gradient(
    180deg,
    rgb(3.34, 175.84, 161.97) 42.94%,
    rgb(1.06, 114.48, 163.09) 100%
  );
  background-color: rgba(255, 255, 255, 1);
  border-radius: 9.38px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 228px;
  padding: 20px 16px;
  position: relative;
  width: 430px;

  & .creators {
    height: 80px;
    position: relative;
    width: 80px;
  }

  & .div {
    align-items: flex-center;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    position: relative;
    width: 100%;
  }

  & .text-wrapper-get-metrics {
    color: #ffffff;
    font-family: "IBM Plex Sans-SemiBold", Helvetica;
    font-size: 22px;
    font-weight: 600;
    height: 41px;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    margin-bottom: -10px;
    position: relative;
    width: 321px;
    margin-left: -35px;
    @media (max-width: 768px) {
      font-size: 18px !important;
      justify-content: center !important;
      align-items: center !important;
      margin: 0px !important;
      width: 100% !important;
    }
  }
  & .text-wrapper {
    color: #ffffff;
    font-family: "IBM Plex Sans-SemiBold", Helvetica;
    font-size: 22px;
    font-weight: 600;
    height: 41px;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    margin-bottom: -10px;
    position: relative;
    width: 321px;
    @media (max-width: 768px) {
      font-size: 18px !important;
      justify-content: center !important;
      align-items: center !important;
      margin: 0px !important;
      padding: 0px !important;
      width: 100% !important;
    }
  }

  & .div-ovr-card-desc {
    align-items: flex-center;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    margin-top: -4px;
    // padding: 0px 98.22px 0px 0px;
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  & .p {
    color: #ffffff;
    font-family: "IBM Plex Sans-Regular", Helvetica;
    font-size: 17px;
    font-weight: 400;
    letter-spacing: 0.34px;
    line-height: 32px;
    margin-right: -98.22px;
    margin-top: -1.14px;
    position: relative;
    width: 398px;
    margin-left: 6px;
    @media (max-width: 768px) {
      font-size: 14px !important;
      justify-content: center !important;
      align-items: center !important;
      margin: 0px !important;
      padding: 0px !important;
      width: 100% !important;
    }
  }
  @media (max-width: 768px) {
    width: 300px;
    margin: 0px !important;
    padding: 0px !important;
    justify-content: center !important;
    align-items: center !important;
  }
`
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  & > :nth-child(1),
  & > :nth-child(2) {
    margin-bottom: 72px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;

    & > :nth-child(1),
    & > :nth-child(2) {
      margin-bottom: 30px;
      justify-content: center !important;
      align-items: center !important;
    }
  }
`
export const StyledFrameGetMetrics = styled(StyledFrame)`
  background: linear-gradient(to right, #3bcdd3, #3e3ebf);
  margin-right: 15px;
`

// const StyledFrameBlue = styled(StyledFrame)`
//   background: linear-gradient(to right, #43cbff, #6f1ab2);
// `

// const StyledFrameCompany = styled(StyledFrame)`
//   background: linear-gradient(to right, #fb5cf2, #942083);
// `
