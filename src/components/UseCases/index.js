import React from "react"
import styled from "styled-components"
import stats from "../../images/stats.svg.png"

import { SectionContainer, SectionHeader } from "./styles"
const StyledA = styled.div`
  background-color: #00000066;
  border-radius: 12px;
  height: 271px;
  position: relative;
  width: 280px;

  & .overlap-group {
    height: 132px;
    left: 27px;
    position: absolute;
    top: 108px;
    width: 219px;
  }

  & .text-wrapper {
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent;
    background: linear-gradient(
      180deg,
      rgb(168.3, 182.7, 211.49) 0%,
      rgb(181.08, 198.4, 226.36) 30.51%,
      rgb(211.21, 223.52, 239.11) 57.08%,
      rgb(228.92, 238.75, 249.74) 100%
    );
    background-clip: text;
    box-shadow: var(--elevation-dark-5);
    color: transparent;
    font-family: "IBM Plex Sans-Medium", Helvetica;
    font-size: 21px;
    font-weight: 600;
    height: 56px;
    left: 0;
    letter-spacing: 0;
    line-height: 56px;
    position: absolute;
    text-fill-color: transparent;
    text-shadow: 0px 4px 4px #0000004c;
    top: 0;
    white-space: nowrap;
  }

  & .div {
    color: #b6c1d4;
    font-family: "IBM Plex Sans-Regular", Helvetica;
    font-size: 16px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0.32px;
    line-height: 24px;
    position: absolute;
    top: 54px;
    width: 219px;
  }

  & .partners {
    height: 78px;
    left: 18px;
    position: absolute;
    top: 28px;
    width: 78px;
  }
`

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  & > :nth-child(4),
  & > :nth-child(5),
  & > :nth-child(6) {
    margin-bottom: 72px;
  }
`
export const UseCases = () => {
  return (
    <div>
      <SectionContainer id="what_is_fithub" className="secTitle">
        <SectionHeader>
          <h2>Use Cases</h2>
          <CardGrid>
            <StyledA>
              <div className="overlap-group">
                <div className="text-wrapper">Advantage Club (*)</div>
                <p className="div">
                  Lorem ipsum dolor sit amet consectetur. Ullamcorper
                  consectetur molestie
                </p>
              </div>
              <img className="partners" alt="book" src={stats} />
            </StyledA>

            <StyledA>
              <div className="overlap-group">
                <div className="text-wrapper">Get Metrics</div>
                <p className="div">
                  Lorem ipsum dolor sit amet consectetur lorem
                </p>
              </div>
              <img className="partners" alt="message" src={stats} />
            </StyledA>

            <StyledA>
              <div className="overlap-group">
                <div className="text-wrapper">Another Use Case</div>
                <p className="div">Description for this use case</p>
              </div>
              <img className="partners" alt="Creators Blue" src={stats} />
            </StyledA>

            <StyledA>
              <div className="overlap-group">
                <div className="text-wrapper">Yet Another Use Case</div>
                <p className="div">Description for this use case</p>
              </div>
              <img className="partners" alt="Creators" src={stats} />
            </StyledA>
            <StyledA>
              <div className="overlap-group">
                <div className="text-wrapper">Yet Another Use Case</div>
                <p className="div">Description for this use case</p>
              </div>
              <img className="partners" alt="Creators" src={stats} />
            </StyledA>
            <StyledA>
              <div className="overlap-group">
                <div className="text-wrapper">Yet Another Use Case</div>
                <p className="div">Description for this use case</p>
              </div>
              <img className="partners" alt="Creators" src={stats} />
            </StyledA>
          </CardGrid>
        </SectionHeader>
      </SectionContainer>
    </div>
  )
}
