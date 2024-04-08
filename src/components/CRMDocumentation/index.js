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

export const CRMApiDocumentation = () => {
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
          <h2>Get Started  with Fit Hub's  CRM</h2>
          <p>
          Fit Hub API is a gateway to seamlessly embed generative AI based hyper-customized wellness experience into your applications. This documentation will provide you with all the essential information you need to get started, from understanding the API endpoints, to making successful requests and handling responses. Below are the list of steps to get you onboarded quickly.
          </p>
          <p>Below are the list of steps to get you onboarded quickly.</p>
          <h3>Step 1: Set up your API key</h3>
          <p>
          We'll provide you with a unique api key and api secret. You'll need these credentials to authenticate your app users and embed Fit Hub experience within your app.
          </p>
          <p>
          Note: Make sure to not share the credentials with anyone! The API key and secret should remain private.
          </p>
          <h3>Step 2: Authenticate User Credentials</h3>
          <p>
          Before accessing the Fit Hub CRM API, it is necessary for your users to be authenticated. Send an authentication request to the following endpoint using the library of your choice or the terminal:
          </p>
          <StyledFrame>
            <div className="text-wrapper">
            https://us-central1-chat-6f260.cloudfunctions.net/generateToken
            </div>
            <div
              className="icons-copy-wrapper"
              onClick={() =>
                handleCopyClick(
                  "https://us-central1-chat-6f260.cloudfunctions.net/generateToken"
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
          This is a POST API that accepts 2 arguments in its body:
          </p>
          <div className="frame">
            <FrameWrapper>
              <Div>
                <div
                  className="icons-copy-wrapper"
                  onClick={() =>
                    handleCopyClick(
                      `{
                        \n"apiKey": string, // provided credential
                        \n"apiSecret": string, // provided credential
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
                <Span>{"{"} </Span>
                <br></br>
                <div style={{ marginLeft: "30px" }}>
                  <TextWrapper2>"apiKey"</TextWrapper2>
                  <Span>: string, </Span>
                  <TextWrapper3>// provided credential </TextWrapper3>
                  <br></br>
                  <Span> </Span>
                  <TextWrapper2>"apiSecret"</TextWrapper2>
                  <Span>: string, </Span>
                  <TextWrapper3>// provided credential </TextWrapper3>
                  <br></br>
                </div>
                <Span> {"}"}</Span>
              </NameStringUser>
            </NameStringUserWrapper>
          </div>
          <p>Example usage for the above API:</p>
          <StyledFrame1>
            <p className="curl-h-content-type">
              curl 
              -H &#39;Content-Type: application/json&#39; -X POST -d &#39;
              {"{"} &#34;api_key&#34;: &#34;&#34;,
              &#34;api_secret&#34;: &#34;&#34; {"}"}&#39;
              &#39;https://us-central1-chat-6f260.cloudfunctions.net/generateToken&#39;
            </p>
            <div
              className="icons-copy-wrapper"
              onClick={() =>
                handleCopyClick(
                  `curl --location 'https://us-central1-chat-6f260.cloudfunctions.net/generateToken' \
                  --header 'Content-Type: application/json' \
                  --data '{
                    "apiKey": "",
                    "apiSecret": ""
                  }'`
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
          The returned object from the endpoint is an authorization token that needs to be provided in all subsequent endpoint calls.
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
                      200: "successful authentication",
                      400: "missing credentials in query",
                      410: "invalid credentials in query",
                      500: "internal server error"
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
          Parse and retrieve the token from the response body. The received token is a Json Web Token (JWT) that'll be used to securely access all Fit Hub API endpoints. This token remains valid for 1 hour after which it needs to be generated again for each subsequent API access.
          </p>
          <p>
            Note: Make sure to not share the credentials with anyone! The API
            key and secret should remain private.
          </p>
          <h3>Step 3: Create a client</h3>
          <p>
          Before being able to run analysis on any client, it will be important to create a one time client record on Fit Hub's end for ease of access in subsequent API calls. Pass in the previously received token in the header. When onboarding a new client, send a request to the following endpoint:
          </p>
          <StyledFrame>
            <div className="text-wrapper">
              {
                "https://us-central1-chat-6f260.cloudfunctions.net/createClient"
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
          The API accepts the following request body:
          </p>
          <div className="frame">
            <FrameWrapper>
              <Div>
                <div
                  className="icons-copy-wrapper"
                  onClick={() =>
                    handleCopyClick(
                      `{
                        \n"clientId": string,
                        \n"trainerId": string
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
                <Span>{"{"} </Span>
                <br></br>
                <div style={{ marginLeft: "30px" }}>
                  <TextWrapper2>"clientId"</TextWrapper2>
                  <Span>: string, </Span>
                  <TextWrapper3>// unique identifier for client </TextWrapper3>
                  <br></br>
                  <Span> </Span>
                  <TextWrapper2>"trainerId"</TextWrapper2>
                  <Span>: string, </Span>
                  <TextWrapper3>// unique identifier for trainer </TextWrapper3>
                  <br></br>
                </div>
                <Span> {"}"}</Span>
              </NameStringUser>
            </NameStringUserWrapper>
          </div>
          <p>
          In addition to the request body, The API requires the following request header:
          </p>
          <div className="frame">
            <FrameWrapper>
              <Div>
                <div
                  className="icons-copy-wrapper"
                  onClick={() =>
                    handleCopyClick(
                      `{
                        \nx-forwarded-authorization: Bearer <AUTHORIZATION TOKEN>
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
                <Span>{"{"} </Span>
                <br></br>
                <div style={{ marginLeft: "30px" }}>
                  <TextWrapper2>"x-forwarded-authorization"</TextWrapper2>
                  <Span>: Bearer AUTHORIZATION_TOKEN, </Span>
                  <TextWrapper3>// auth token provided in generateToken </TextWrapper3>
                  <br></br>
                </div>
                <Span> {"}"}</Span>
              </NameStringUser>
            </NameStringUserWrapper>
          </div>
          <p>Note: Don't Forget the keyword "Bearer" before putting down the token in x-forwarded-authorization Header.</p>
          <p>Example usage for the above API:</p>
          
          <StyledFrame1>
            <p className="curl-h-content-type">
              curl 
              -H &#39;Content-Type: application/json&#39; -H &#39;x-forwarded-authorization: Bearer AUTH_TOKEN&#39; -X POST -d &#39;
              {"{"} &#34;clientId&#34;: &#34;&#34;,
              &#34;trainerId&#34;: &#34;&#34; {"}"}&#39;
              &#39;https://us-central1-chat-6f260.cloudfunctions.net/createClient&#39;
            </p>
            <div
              className="icons-copy-wrapper"
              onClick={() =>
                handleCopyClick(
                  `curl --location 'https://us-central1-chat-6f260.cloudfunctions.net/createClient' \
                  --header 'x-forwarded-authorization: Bearer AUTH_TOKEN' \
                  --header 'Content-Type: application/json' \
                  --data '{
                    "clientId": "",
                    "trainerId": ""
                  }'`
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
          <p>The returned object from the endpoint contains the record Id (permanent until the client is deleted from our records) for the created client if the API call was a success. Please save the recordId on your end as it can be used to validate records when necessary.</p>
          <div className="frame">
            <FrameWrapper>
              <Div>
                <div
                  className="icons-copy-wrapper"
                  onClick={() =>
                    handleCopyClick(
                      `{
                        \n"recordId": string | null,
                        \n"success": boolean,
                        \n"status": number {
                      \n200: "successful client creation",
                      \n400: "missing client credentials",
                      \n401: "token expired",
                      \n410: "invalid credentials in query",
                      \n500: "internal server error",
                      \n},
                        \n"error": string | null
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
                  <span className="span">&#34;recordId&#34;</span>
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
                    &#34;successfull client creation&#34;
                  </span>
                  <span className="text-wrapper">
                    , <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;400:{" "}
                  </span>
                  <span className="span">
                    &#34;missing client credentials&#34;
                  </span>
                  <span className="text-wrapper">
                    , <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;410:{" "}
                  </span>
                  <span className="span">
                    &#34;invalid client credentials&#34;
                  </span>
                  <span className="text-wrapper">
                    , <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;500:{" "}
                  </span>
                  <span className="span">&#34;internal server error&#34;</span>
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
            <br/>
            <h3>Step 4: Run Client Analysis</h3>
            <p>
            Finally run the client analysis to get necessary insights about the trainer-client interactions and feedback on how to improve your customer engagement.
            </p>
            <StyledFrame>
              <div className="text-wrapper">
                {
                  "https://us-central1-chat-6f260.cloudfunctions.net/createAnalysis"
                }
              </div>

              <div
                className="icons-copy-wrapper"
                onClick={() =>
                  handleCopyClick(
                    "https://us-central1-chat-6f260.cloudfunctions.net/createAnalysis"
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
            The API accepts the following request body:
            </p>
            <div className="frame">
            <FrameWrapper>
              <Div>
                <div
                  className="icons-copy-wrapper"
                  onClick={() =>
                    handleCopyClick(
                      `{
                        \n"data": {
                            \n"recordId?": string, // use either the recordId or {clientId, trainerId} pair to refer to the client record
                            \n"clientId?": string,
                            \n"trainerId?": string,
                            \n"chatData": { // messaging data between trainer - client to be analyzed
                                \n"messages": [
                                    \n{
                                        \n"role": "trainer" | "client" | "system" | "assistant",
                                        \n"body": string,
                                        \n"created_at": ISOString,
                                    \n},
                                \n],
                                \n"media_links": string[],
                            \n},
                            \n"dietPlan": { // assigned diet plan to the client
                            \n},
                            \n"workoutPlan": { // assigned workout plan to the client
                            \n},
                        \n}
                    \n}`
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
                  <TextWrapper2>"data":  </TextWrapper2>
                  <Span>{"{"} </Span> <br/>
                  <Span>"recordId?": string, </Span>
                  <TextWrapper3>// use either the recordId or {"{clientId, trainerId}"} pair to refer to the client record </TextWrapper3>
                  <Span>"clientId?": string, </Span><br/>
                  <Span>"trainerId?": string, </Span><br/>
                  <Span>"chatData?": {"{"} </Span> <TextWrapper3>// messaging data between trainer - client to be analyzed </TextWrapper3><br/>
                  <div style={{ marginLeft: "30px" }}>
                    <Span>"messages": {"["} </Span><br/>
                    <Span>{"{"} </Span><br/>
                    <div style={{ marginLeft: "30px" }}>
                      <Span>"role": "trainer" | "client" | "system" | "assistant",</Span><br/>
                      <Span>"body": string,</Span><br/>
                      <Span>"created_at": ISOString,</Span><br/>
                    </div>
                    <Span>{"},"} </Span><br/>
                    <Span>{"],"} </Span><br/>
                    <Span> "media_links": string[] </Span><br/>
                    <Span>{"},"} </Span>
                    </div>
                  <Span>"dietPlan": {"{}"}, </Span><TextWrapper3>// assigned diet plan to the client </TextWrapper3><br/>
                  <Span>"workoutPlan": {"{}"}, </Span><TextWrapper3>// assigned workout plan to the client </TextWrapper3><br/>
                </div>
                <Span> {"}"}</Span>
              </NameStringUser>
            </NameStringUserWrapper>
          </div>
          <p>The returned object from the endpoint contains the data analysis.</p>
          <div className="frame">
            <FrameWrapper>
              <Div>
                <div
                  className="icons-copy-wrapper"
                  onClick={() =>
                    handleCopyClick(
                      `{
                        \n"chatId": string,
                        \n"sentiment": {
                            \n"rating": "POSITIVE" | "NEGATIVE" | "NEUTRAL",
                            \n"explanation": string
                        \n},
                        \n"user_summary": {
                             \n"activity": string,
                             \n"nutrition": string
                         \n},
                        \n"trainer_feedback": {
                            \n"success": string,
                            \n"improvements": string
                        \n},
                        \n"success": boolean,
                        \n"status": number {
                      \n200: "successfully generated data analysis",
                      \n500: "internal server error",
                      \n510: "error generating data analysis"
                        \n},
                        \n"error": string | null
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
                  <span className="span">&#34;chatId&#34;</span>
                  <span className="text-wrapper">
                    : string, <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="span">&#34;sentiment&#34;</span>
                  <span className="text-wrapper">
                    : {"{"}
                      "rating": "POSITIVE" | "NEGATIVE" | "NEUTRAL",
                      "explanation": string,
                  {"}"}, <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="span">&#34;user_summary&#34;</span>
                  <span className="text-wrapper">
                    : {"{"}
                      "activity": string,
                      "nutrition": string,
                  {"}"}, <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="span">&#34;trainer_feedback&#34;</span>
                  <span className="text-wrapper">
                    : {"{"}
                      "success": string,
                      "improvements": string,
                  {"}"}, <br />
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
          <br/>
          <h3>Step 5: Submit Coach Feedback</h3>
          <p>
          Use the following endpoint to submit analysis feedback from the coach.
          </p>
          <StyledFrame>
            <div className="text-wrapper">
              {
                "https://us-central1-chat-6f260.cloudfunctions.net/submitCoachFeedback"
              }
            </div>

            <div
              className="icons-copy-wrapper"
              onClick={() =>
                handleCopyClick(
                  "https://us-central1-chat-6f260.cloudfunctions.net/submitCoachFeedback"
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
          <p>The API accepts the following request body:</p>
          <div className="frame">
            <FrameWrapper>
              <Div>
                <div
                  className="icons-copy-wrapper"
                  onClick={() =>
                    handleCopyClick(
                      `{
                        \n"rating": 0 | 1,
                        \n"feedback": string,
                        \n"chatId"?: string, // required
                        \n"analysisId"?: string, // required
                        \n"recordId?": string, // optional if clientId and trainerId are present
                        \n"clientId?": string, // optional if recordId is present
                        \n"trainerId?": string, // optional if recordId is present
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
                <Span>{"{"} </Span>
                <br></br>
                <div style={{ marginLeft: "30px" }}>
                  <TextWrapper2>"rating"</TextWrapper2>
                  <Span>: 0 | 1, </Span>
                  <br></br>
                  <Span> </Span>
                  <TextWrapper2>"feedback"</TextWrapper2>
                  <Span>: string, </Span><br/>
                  <TextWrapper2>"chatId?"</TextWrapper2>
                  <Span>: string, </Span>
                  <TextWrapper3>// required </TextWrapper3><br/>
                  <TextWrapper2>"analysisId?"</TextWrapper2>
                  <Span>: string, </Span>
                  <TextWrapper3>// required </TextWrapper3><br/>
                  <TextWrapper2>"recordId?"</TextWrapper2>
                  <Span>: string, </Span>
                  <TextWrapper3>// optional if clientId and trainerId are present </TextWrapper3><br/>
                  <TextWrapper2>"clientId?"</TextWrapper2>
                  <Span>: string, </Span>
                  <TextWrapper3>// optional if recordId is present </TextWrapper3><br/>
                  <TextWrapper2>"trainerId?"</TextWrapper2>
                  <Span>: string, </Span>
                  <TextWrapper3>// optional if recordId is present </TextWrapper3>
                  <br></br>
                </div>
                <Span> {"}"}</Span>
              </NameStringUser>
            </NameStringUserWrapper>
          </div>
          <p>Example usage for the above API:</p>
          <StyledFrame1>
            <p className="curl-h-content-type">
              curl 
              -H &#39;x-forwarded-authorization: Bearer AUTH_TOKEN&#39;
              -H &#39;Content-Type: application/json&#39; -X POST -d &#39;
              {"{"} &#34;chatId&#34;: &#34;&#34;,
              &#34;analysisId&#34;: &#34;&#34;, 
              &#34;clientId&#34;: &#34;&#34;, 
              &#34;trainerId&#34;: &#34;&#34;, 
              &#34;rating&#34;: &#34;&#34;, 
              &#34;feedback&#34;: &#34;&#34;
              {"}"}&#39;
              &#39;https://us-central1-chat-6f260.cloudfunctions.net/submitCoachFeedback&#39;
            </p>
            <div
              className="icons-copy-wrapper"
              onClick={() =>
                handleCopyClick(
                  `curl --location 'https://us-central1-chat-6f260.cloudfunctions.net/submitCoachFeedback' \
                  --header 'x-forwarded-authorization: Bearer AUTH_TOKEN' \
                  --header 'Content-Type: application/json' \
                  --data '{
                    "chatId": "",
                    "analysisId": "",
                    "clientId": "",
                    "trainerId": "",
                    "rating": 1,
                    "feedback": "This was really helpful. Thanks!",
                  }'`
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
          <p>The returned object from the endpoint:</p>
          <div className="frame">
            <FrameWrapper>
              <Div>
                <div
                  className="icons-copy-wrapper"
                  onClick={() =>
                    handleCopyClick(
                      `{
                        \n"success": boolean,
                        \n"error": string | null,
                        \n"message": string | null,
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
                  <div style={{ marginLeft: "30px" }}>
                    <span className="span">&#34;success&#34;</span>
                    <span className="text-wrapper">
                    : boolean, <br />
                    </span>
                    <span className="span">&#34;error&#34;</span>
                    <span className="text-wrapper">
                    : string | null
                    <br />
                    </span>
                    <span className="span">&#34;message&#34;</span>
                    <span className="text-wrapper">
                    : string | null
                    <br />
                    </span>
                    </div>
                    {"}"}
                </p>
              </NameStringUser>
            </NameStringUserWrapper>
          </div>
        </SectionHeader>
      </SectionContainer>
    </div>
  )
}
