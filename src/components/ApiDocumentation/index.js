import React, { useState } from "react"
import {
  SectionContainer,
  SectionHeader,
  StyledFrame,
  FrameWrapper,
  Div,
  TextWrapper,
  NameStringUserWrapper,
  NameStringUser,
  Span,
  TextWrapper2,
  TextWrapper3,
  StyledFrame1,
  Toast,
} from "./styles"
import styled from "styled-components"
import Copy from "../../images/Copy.png"

export const ApiDocumentation = () => {
  const [toastVisible, setToastVisible] = useState(false)
  const handleCopyClick = text => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // Show toast
        setToastVisible(true)

        // Hide toast after 3 seconds
        setTimeout(() => {
          setToastVisible(false)
        }, 3000)
      })
      .catch(err => {
        console.error("Failed to copy text: ", err)
      })
  }
  return (
    <div>
      <SectionContainer id="what_is_fithub" className="secTitle">
        <SectionHeader>
          <h2>Get Started with Fit Hub API</h2>
          <p>
            Fit Hub API is a gateway to seamlessly embed generative AI based
            hyper-customized wellness experience into your applications. This
            documentation will provide you with all the essential information
            you need to get started, from understanding the API endpoints, to
            making successful requests and handling responses.
          </p>
          <p>Below are the list of steps to get you onboarded quickly.</p>
          <h3>Step 1: Set up your API key</h3>
          <p>
            We'll provide you with a unique api key and api secret. You'll need
            these credentials to authenticate your app users and embed Fit Hub
            experience within your app.
          </p>
          <p>
            Note: Make sure to not share the credentials with anyone! The API
            key and secret should remain private.
          </p>
          <h3>Step 2: Authenticate User Credentials</h3>
          <p>
            Before accessing the Fit Hub app api, it is necessary for your app
            users to be authenticated. Send an authentication request to the
            following endpoint using the library of your choice or the terminal:
          </p>
          <StyledFrame>
            <div className="text-wrapper">
            https://api-maincorporate.aifithub.com/users/corporateApiAuthentication
            </div>
            <div
              className="icons-copy-wrapper"
              onClick={() =>
                handleCopyClick(
                  "https://api-maincorporate.aifithub.com/users/corporateApiAuthentication"
                )
              }
            >
              <img
                className="icons-copy"
                color="#7D8288"
                alt="Copy"
                src={Copy}
              />
            </div>
          </StyledFrame>

          {toastVisible && <Toast>Code Copied!</Toast>}
          <p>
            This is a POST API that accepts 4 arguments in its body (and 2
            optional fields):
          </p>
          <div className="frame">
            <FrameWrapper>
              <Div>
                <div
                  className="icons-copy-wrapper"
                  onClick={() =>
                    handleCopyClick(
                      `{ \n"name": string, // user name \n"email": string, // unique user email \n"api_key": string, // provided credential \n"api_secret": string, // provided credential \n"sub_organization_id": string, // (optional) corporate/organization id \nof the user \n"sub_organization_name": string, // (optional) corporate/organization \nname of the user \n}`
                    )
                  }
                >
                  <img
                    className="icons-copy"
                    color="#7D8288"
                    alt="Copy"
                    src={Copy}
                    height="24px"
                    width="24px"
                  />
                </div>
                {/* <Copy className="icons-copy" color="#979A9F" /> */}
                <TextWrapper>Copy</TextWrapper>
              </Div>
            </FrameWrapper>
            <NameStringUserWrapper>
              <NameStringUser>
                <Span>{"{"} </Span>
                <br></br>
                <div style={{ marginLeft: "30px" }}>
                  <TextWrapper2>"name"</TextWrapper2>
                  <Span>: string, </Span>
                  <TextWrapper3>// user name </TextWrapper3>
                  <br></br>
                  <Span> </Span>
                  <TextWrapper2>"email"</TextWrapper2>
                  <Span>: string, </Span>
                  <TextWrapper3>// unique user email </TextWrapper3>
                  <br></br>
                  <Span> </Span>
                  <TextWrapper2>"api_key"</TextWrapper2>
                  <Span>: string, </Span>
                  <TextWrapper3>// provided credential </TextWrapper3>
                  <br></br>
                  <Span> </Span>
                  <TextWrapper2>"api_secret"</TextWrapper2>
                  <Span>: string, </Span>
                  <TextWrapper3>// provided credential </TextWrapper3>
                  <br></br>
                  <Span> </Span>
                  <TextWrapper2>"sub_organization_id"</TextWrapper2>
                  <Span>: string, </Span>
                  <TextWrapper3>
                    // (optional) corporate/organization id
                  </TextWrapper3>
                  <TextWrapper3>of the user </TextWrapper3>
                  <br></br>
                  <Span> </Span>
                  <TextWrapper2>"sub_organization_name"</TextWrapper2>
                  <Span>: string, </Span>
                  <TextWrapper3>
                    // (optional) corporate/organization{" "}
                  </TextWrapper3>
                  <TextWrapper3>name of the user</TextWrapper3>
                  <br></br>
                </div>
                <Span> {"}"}</Span>
              </NameStringUser>
            </NameStringUserWrapper>
          </div>
          <p>Example usage for the above API:</p>
          <StyledFrame1>
            <p className="curl-h-content-type">
              curl -H &#39;Content-Type: application/json&#39; -X POST -d &#39;
              {"{"} &#34;name&#34;: &#34;&#34;,
              &#34;email&#34;: &#34;&#34;, &#34;api_key&#34;: &#34;&#34;,
              &#34;api_secret&#34;: &#34;&#34; {"}"}&#39;
              &#39;https://api-maincorporate.aifithub.com/users/corporateApiAuthentication&#39;
            </p>
            <div
              className="icons-copy-wrapper"
              onClick={() =>
                handleCopyClick(
                  `curl -H 'Content-Type: application/json' -X POST -d '{"data": { "name": "", "email": "", "api_key": "", "api_secret": "" }}' 'https://us-central1-chat-6f260.cloudfunctions.net/corporateApiAuthentication'`
                )
              }
            >
              <img
                className="icons-copy"
                color="#7D8288"
                alt="Copy"
                src={Copy}
              />
            </div>
          </StyledFrame1>
          <p>
            The returned object from the endpoint is a json blob with the
            following data structure:
          </p>
          <div className="frame">
            <FrameWrapper>
              <Div>
                <div
                  className="icons-copy-wrapper"
                  onClick={() =>
                    handleCopyClick(
                      `{ 
                        "token": string | null, 
                        "success": boolean, 
                        "status": number {
                            200: "successfully signed in user", 
                            400: "missing credentials in query", 
                            410: "invalid credentials in query", 
                            500: "internal server error", 
                            510: "error creating user account in fit hub" 
                        }, 
                        "error": string | null
                    }`
                    )
                  }
                >
                  <img
                    className="icons-copy"
                    color="#7D8288"
                    alt="Copy"
                    src={Copy}
                    height="24px"
                    width="24px"
                  />
                </div>
                {/* <Copy className="icons-copy" color="#979A9F" /> */}
                <TextWrapper>Copy</TextWrapper>
              </Div>
            </FrameWrapper>
            <NameStringUserWrapper>
              <NameStringUser>
                <p className="token-string-null">
                  <span className="text-wrapper">
                    {"{"} <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="span">&#34;token&#34;</span>
                  <span className="text-wrapper">
                    : string | null, <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="span">&#34;success&#34;</span>
                  <span className="text-wrapper">
                    : boolean, <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="span">&#34;status&#34;</span>
                  <span className="text-wrapper">
                    : number {"{"}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;200:{" "}
                  </span>
                  <span className="span">
                    &#34;successfully signed in user&#34;
                  </span>
                  <span className="text-wrapper">
                    , <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;400:{" "}
                  </span>
                  <span className="span">
                    &#34;missing credentials in query&#34;
                  </span>
                  <span className="text-wrapper">
                    , <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;410:{" "}
                  </span>
                  <span className="span">
                    &#34;invalid credentials in query&#34;
                  </span>
                  <span className="text-wrapper">
                    , <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;500:{" "}
                  </span>
                  <span className="span">&#34;internal server error&#34;</span>
                  <span className="text-wrapper">
                    , <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;510:{" "}
                  </span>
                  <span className="span">
                    &#34;error creating user account in fit hub&#34;
                  </span>
                  <span className="text-wrapper">
                    {" "}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;{"}"}, <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="span">&#34;error&#34;</span>
                  <span className="text-wrapper">
                    : string | null
                    <br />
                    {"}"}
                  </span>
                </p>
              </NameStringUser>
            </NameStringUserWrapper>
          </div>
          <p>
            Parse and retrieve the token from the response body. The received
            token is a Json Web Token (JWT) that'll be used to securely access
            all Fit Hub API endpoints. This token remains valid for 1 hour after
            which it needs to be generated again for each subsequent API access.
          </p>
          <p>
            We'll provide you with a unique api key and api secret. You'll need
            these credentials to authenticate your app users and embed Fit Hub
            experience within your app.
          </p>
          <p>
            Note: Make sure to not share the credentials with anyone! The API
            key and secret should remain private.
          </p>
          <h3>Step 3: Access the Fit Hub experience</h3>
          <p>
            After authenticating user credentials and receiving the token, Fit
            Hub app experience can be accessed from within your app using the
            endpoint:
          </p>
          <StyledFrame>
            <div className="text-wrapper">
              {
                "https://chat-6f260.web.app/corporation?token=<received token from authentication api>"
              }
            </div>

            <div
              className="icons-copy-wrapper"
              onClick={() =>
                handleCopyClick(
                  "https://chat-6f260.web.app/corporation?token=<received token from authentication api>"
                )
              }
            >
              <img
                className="icons-copy"
                color="#7D8288"
                alt="Copy"
                src={Copy}
              />
            </div>
          </StyledFrame>
          <p>
            You can integrate the endpoint as an iframe, webview or redirect
            your users to the web.
          </p>
          <p>
            Nugget: You can integrate the endpoint as an iframe, webview or
            redirect your users to the web.
          </p>
        </SectionHeader>
      </SectionContainer>
    </div>
  )
}
