import React from "react"
import LogoImg from "../../images/waitlistIcon.webp"
import { ModalContainer, ContentSection, LogoImage } from "./styles"
import { Button } from "antd"
import { StaticImage } from "gatsby-plugin-image"

const EmailConfirm = ({ title, message, from, handleCancel }) => {
  return (
    <ModalContainer>
      <div style={{ padding: "0 2vw" }}>
        <ContentSection>
          <LogoImage>
            <StaticImage
              src="../../images/waitlistIcon.webp"
              alt="logo"
              placeholder="none"
            />
            {/* <img src={LogoImg} alt="logo" /> */}
          </LogoImage>
          <h2>{title}</h2>
          {from === "exclusiveUpdate" ? (
            <p>
              Stay tuned for exclusive and special offers coming your way! Let's
              achieve greatness together and Evolve our Lives! Feel free to
              contact us anytime at{" "}
              <a href={"mailto: support@aifithub.com"}>support@fithub.com</a>.
              <br></br>
              Thank you for choosing Fit Hub!
            </p>
          ) : (
            <p style={{ whiteSpace: "pre-line" }}>{message}</p>
          )}
        </ContentSection>
      </div>
      <div style={{ padding: "0px 2vw" }}>
        <Button onClick={handleCancel} className="closebtn">
          Close
        </Button>
      </div>
    </ModalContainer>
  )
}

export default EmailConfirm
