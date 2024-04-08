import React, { useState } from "react"
import WaitlistIcon from "../../images/sparkle.webp"
import Instagram from "../../images/instagram.webp"
import Facebook from "../../images/facebook.webp"
import Twitter from "../../images/twitter.webp"
import { IntouchTerms, MediaLinks, MediaWrapper } from "../Banner/styles"
import { FooterWrapper, WaitListForm } from "./styles"
import { Button, Form, Input, Modal } from "antd"
import useIsMobile from "../../utils/resize"
import EmailConfirm from "../EmailConfirm"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export const StickyFooter = () => {

  const screenSize = useIsMobile();

  const [form] = Form.useForm();

  const [openModal, setOpenModal] = useState(false);

  const [disabled, setDisabled] = useState(false)

  const onFinish = async (values) => {
    setDisabled(true);
    setOpenModal(true);
    setDisabled(false);
    form.resetFields();
    window?.dataLayer?.push({
      event: 'waitlist_form_submit',
      email: values.email,
      data: {
        url: window.location.href,
        title: document.title,
      },
    });
    await fetch('https://api-main.aifithub.com/email/communitylist', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: values.email,
        domain: window.location.hostname
      }),
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
      setDisabled(false);
    });
    // const sendEmailFn = httpsCallable (getFunctions(), "sendWaitlistEmail")
    // setOpenModal(true)
    // setDisabled(false);
    // form.resetFields();
    // sendEmailFn(sendData).then((result) => {
    // })
    // .catch((error) => {
    //   setDisabled(false);
    // })
  };

  const handleCancel = () => {
    setOpenModal(false)
  }

  return (
    <FooterWrapper>
      <WaitListForm style={{ width: "38%" }}>
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          className="formWrapper"
          form={form}
          id="waitlist_form"
        >
          <Form.Item
            label=""
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "",
              },
            ]}
            className="emailInput"
          >
            <Input placeholder="Your email address" />
          </Form.Item>
          <Form.Item className="buttonInput">
            <Button type="primary" htmlType="submit"
              icon={
                <StaticImage src="../../images/sparkle.webp" alt="waitlist" placeholder="none" />
                // <img src={WaitlistIcon} alt="waitlist" />
              }
              disabled={disabled}
              id="waitlist_button"
            >
              Get Exclusive Updates
            </Button>
          </Form.Item>
        </Form>
      </WaitListForm>
      {
        !screenSize &&
        <MediaWrapper style={{ position: "relative", right: "0px" }}>
          <MediaLinks>
            <a href="https://www.instagram.com/ai.fithub/?igshid=MmIzYWVlNDQ5Yg%3D%3D" target="_blank" without="true" rel="noopener noreferrer">
              <StaticImage src="../../images/instagram.webp" alt="Instagram" placeholder="none" />
              {/* <img src={Instagram} alt="Instagram" /> */}
            </a>
            <a href="https://www.facebook.com/profile.php?id=100093714846212&mibextid=LQQJ4d" target="_blank" without="true" rel="noopener noreferrer">
              <StaticImage src="../../images/facebook.webp" alt="Facebook" placeholder="none" />
              {/* <img src={Facebook} alt="Facebook" /> */}
            </a>
            <a href="https://twitter.com/aifithub?s=21" target="_blank" without="true" rel="noopener noreferrer">
              <StaticImage src="../../images/twitter.webp" alt="Twitter" placeholder="none" />
              {/* <img src={Twitter} alt="Twitter" /> */}
            </a>
            <a href="https://www.linkedin.com/company/aifithub/" target="_blank" without="true" rel="noopener noreferrer">
              <StaticImage src="../../images/linkedin.webp" alt="Linkedin" placeholder="none" />
            </a>
            {/* <a href="https://www.youtube.com/@spyncontent6734" target="_blank" without="true" rel="noopener noreferrer">
              <img src={Youtube} alt="Youtube" />
            </a>
            <a href="https://www.linkedin.com/company/spyn-corp/" target="_blank" without="true" rel="noopener noreferrer">
              <img src={Linkedin} alt="Linkedin" />
            </a> */}
          </MediaLinks>
          <IntouchTerms>
            <Link to="/privacy-policy">
              Privacy Policy
            </Link>
            <Link to="/tos">
              Terms of Service
            </Link>
          </IntouchTerms>
        </MediaWrapper>
      }
      <Modal title="" visible={openModal} onCancel={handleCancel} footer="" className="getappModal" width={screenSize ? '90vw' : '50vw'} centered maskClosable={false}>
        <EmailConfirm title="Welcome to the Fit Hub Family!" message="" from="exclusiveUpdate" handleCancel={handleCancel} />
      </Modal>
    </FooterWrapper>
  )
}
