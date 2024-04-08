import styled from "styled-components";
import * as palette from "../../styles/variables";

export const FooterWrapper = styled.div`
  background: linear-gradient(180deg, transparent 0%, #000000 45.83%, #000000 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 108px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0px 48px;
  z-index: 20;
  @media (max-width: 768px) {
    padding: 0px 20px;
  }
`;

export const WaitListForm = styled.div`
  .ant-input {
    border: none !important;
    box-shadow: none !important;
    font-size: 1.2vw;
  }
  .formWrapper {
    display: inline-flex;
    align-items: center;
    width: 100%;
    border-radius: 12px;
    padding: 6px;
    border: 1.5px solid #008080;
    background: #182D42;
  }
  .emailInput {
    margin: 0;
    flex: 2;
  }
  .buttonInput {
    margin: 0;
    .ant-btn {
      height: 3vw !important;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px !important;
      position: relative;
      overflow: hidden;
      z-index: 1;
      border-radius: 6px;
      color: ${palette.WHITE_COLOR} !important;
    }
    img {
      width: 30px;
      height: 30px;
    }
  }
  @media (max-width: 768px) {
    width: 100% !important;
    .ant-input {
      font-size: 18px !important;
    }
  }
`;
