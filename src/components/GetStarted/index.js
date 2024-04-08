import React from "react"
import styled from "styled-components"
import book from "../../images/book.svg.png"
// import message from "../../images/message.svg.png"
// import star from "../../images/star.svg.png"
import flower from "../../images/flower.svg.png"
import { Link } from "gatsby"

import {
  SectionContainer,
  SectionHeader,
  StyledFrame,
  CardGrid,
  StyledFrameGetMetrics,
} from "./styles"

export const GetStrated = () => {
  return (
    <div>
      <SectionContainer id="what_is_fithub" className="secTitle">
        <SectionHeader>
          <h2>Get Started</h2>
          <CardGrid>
            <Link to="/documentation">
              <StyledFrame>
                <img className="creators" alt="book" src={book} />
                <div className="div">
                  <p className="text-wrapper">Get Started With Fit Hub API</p>
                  <div className="div-ovr-card-desc">
                    <p className="p">
                      Integrate Fit Hub to your personalised use cases
                    </p>
                  </div>
                </div>
              </StyledFrame>
            </Link>
            <Link
              to="https://github.com/spynai/api_documentation/wiki/Metrics-API#user-metrics"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledFrameGetMetrics>
                <img className="creators" alt="Flower" src={flower} />
                <div className="div">
                  <p
                    className="text-wrapper-get-metrics"
                    style={{ marginLeft: "-75px" }}
                  >
                    User Metrics
                  </p>
                  <div className="div-ovr-card-desc">
                    <p className="p" style={{ marginLeft: "-65px" }}>
                      API for user-specific metrics.
                    </p>
                  </div>
                </div>
              </StyledFrameGetMetrics>
            </Link>
          </CardGrid>
        </SectionHeader>
      </SectionContainer>
    </div>
  )
}
