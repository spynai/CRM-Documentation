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
    font-size: 40px;
    font-weight: FontWeith.w600; // Note: I changed 'fontweight' to 'font-weight'
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
  h3 {
    text-align: start;
    font-size: 32px;
    font-weight: FontWeith.w600; // Note: I changed 'fontweight' to 'font-weight'
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
    font-weight: FontWeith.w400; // Note: I changed 'fontweight' to 'font-weight'
    line-height: 1.9vw;
  }

  @media (max-width: 768px) {
    max-width: 100%;

    h2,
    h3 {
      // text-align: center;
      font-size: 20px !important;
    }

    p {
      // text-align: center;
      font-size: 15px !important;
      line-height: 24px !important;
      font-weight: FontWeith.w400;
    }
  }
`
export const StyledFrame = styled.div`
  align-items: center;
  background-color: #000000;
  border-radius: 8px;
  display: inline-flex;
  gap: 12px;
  padding: 8px 16px;
  position: relative;
  margin: 32px 0px;
  overflow-x: auto;

  @media (max-width: 768px) {
    display: flex;
    white-space: nowrap;
  }

  & .text-wrapper {
    color: #b6c1d5;
    font-family: "Roboto Mono-Regular", Helvetica;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 30px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .icons-copy-wrapper {
    align-items: center;
    background-color: var(--gray-01);
    border-radius: 4px;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 8px;
    padding: 4px;
    position: relative;
  }

  & .icons-copy {
    height: 24px !important;
    position: relative !important;
    width: 24px !important;
  }
`
export const FrameWrapper = styled.div`
  align-items: center;
  align-self: stretch;
  background-color: #2e353f;
  border-radius: 12px 12px 0px 0px;
  display: flex;
  gap: 8px;
  height: 48px;
  justify-content: flex-end;
  padding: 8px 24px;
  position: relative;
  width: 100%;
`

export const Div = styled.div`
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 4px;
  position: relative;
`

export const TextWrapper = styled.div`
  color: #b6c1d4;
  font-family: "IBM Plex Sans-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  height: 24px;
  letter-spacing: 0.4px;
  line-height: 32px;
  margin-top: -3px;
  margin-bottom: 1px;
  position: relative;
  white-space: nowrap;
  width: 47px;
`

export const NameStringUserWrapper = styled.div`
  align-items: flex-start;
  background-color: #000000;
  border-radius: 0px 0px 12px 12px;
  display: flex;
  flex: 0 0 auto;
  gap: 8px;
  padding: 12px 16px;
  position: relative;
`

export const NameStringUser = styled.p`
  color: transparent;
  font-family: "Roboto Mono-Regular", Helvetica;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 30px;
  margin-top: -1px;
  position: relative;
  width: 843px;
`

export const Span = styled.span`
  color: #b6c1d5;
`

export const TextWrapper2 = styled.span`
font
  color: #00c7b7;
    font-size: 18px;
`

export const TextWrapper3 = styled.span`
  color: #a56a18;
  font-size: 18px;
`
export const StyledFrame1 = styled.div`
  align-items: flex-start;
  background-color: #000000;
  border-radius: 8px;
  display: flex;
  gap: 12px;
  padding: 15px 16px;
  position: relative;
  width: 880px;
  overflow-x: auto;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    white-space: nowrap;
  }

  & .curl-h-content-type {
    color: #b6c1d5;
    font-family: "Roboto Mono-Regular", Helvetica;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 28px;
    margin-top: -1px;
    position: relative;
    width: 806px;
  }

  & .icons-copy-wrapper {
    align-items: center;
    background-color: var(--gray-01);
    border-radius: 4px;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 8px;
    margin-right: -2px;
    padding: 4px;
    position: relative;
  }

  & .icons-copy {
    height: 24px !important;
    position: relative !important;
    width: 24px !important;
  }
`
export const Toast = styled.div`
  position: fixed;
  top: 15%;
  left: 90%;
  transform: translate(-50%, 0);
  background-color: #000;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;

  @media (max-width: 768px) {
    top: 10%;
    left: 50%;
  }
`
