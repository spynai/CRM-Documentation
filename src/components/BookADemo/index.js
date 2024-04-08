import React, { useState } from "react"
import { Button, Form, Input, Modal } from "antd"
import {
  BookADemoSection,
  BookADemoContainer,
  BookADemoImgBlock,
  BookADemoImgBlockTop,
  BookADemoImgBlockBottom,
  BookADemoImgBlockBottomBlocks,
  BookADemoImgBlockBottomBlocksB1,
  BookADemoInfoBlock,
} from "./styles"
import useIsMobile from "../../utils/resize"
import EmailConfirm from "../EmailConfirm"
import { StaticImage } from "gatsby-plugin-image"

const BookADemo = () => {
  const screenSize = useIsMobile()

  const [form] = Form.useForm()

  const { TextArea } = Input

  const [disabled, setDisabled] = useState(false)

  const [openConfirmModal, setOpenConfirmModal] = useState(false)

  const onFinish = async values => {
    setOpenConfirmModal(true)
    setDisabled(false)
    form.resetFields()
    window?.dataLayer?.push({
      event: "bookademo_form_submit",
      email: values.email,
      data: {
        url: window.location.href,
        title: document.title,
      },
    })
    await fetch("https://api.aifithub.com/email/corporateDemo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        message: values.message ? values.message : "",
        domain: window.location.hostname,
      }),
    })
      .then(response => {})
      .catch(error => {
        setDisabled(false)
      })
  }

  const handleCancel = () => {
    setOpenConfirmModal(false)
  }

  return (
    <BookADemoSection id="bookADemoContainer">
      <h2>Book a Demo</h2>
      {screenSize && (
        <p>
          Use this form to send us a message and we will get back to you within
          24 hours
        </p>
      )}
      <BookADemoContainer>
        {!screenSize && (
          <BookADemoImgBlock>
            <BookADemoImgBlockTop>
              <h3>Reach Us</h3>
              <p>
                Use this form to send us a message and we will get back to you
                within 24 hours
              </p>
            </BookADemoImgBlockTop>
            <BookADemoImgBlockBottom>
              <BookADemoImgBlockBottomBlocks
                href={"mailto: support@aifithub.com"}
              >
                <BookADemoImgBlockBottomBlocksB1>
                  <StaticImage
                    src="../../images/email.webp"
                    alt="email"
                    placeholder="none"
                  />
                  {/* <img src={MailIcon} alt="img" /> */}
                </BookADemoImgBlockBottomBlocksB1>
                <BookADemoImgBlockBottomBlocksB1>
                  <p>support@aifithub.com</p>
                </BookADemoImgBlockBottomBlocksB1>
              </BookADemoImgBlockBottomBlocks>
            </BookADemoImgBlockBottom>
          </BookADemoImgBlock>
        )}
        <BookADemoInfoBlock>
          <Form
            name="demo"
            layout="vertical"
            onFinish={onFinish}
            requiredMark={false}
            className="demoForm"
            form={form}
            id="demo_form"
          >
            <Form.Item
              label="Your Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter your name!",
                },
              ]}
            >
              <Input placeholder="First name" autoComplete="off" />
            </Form.Item>
            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter your email!",
                },
              ]}
            >
              <Input placeholder="yourname@domain.com" autoComplete="off" />
            </Form.Item>
            <Form.Item label="Tell us something" name="message">
              <TextArea
                rows={4}
                placeholder="What do you want to talk about?"
                className="textarea"
              />
            </Form.Item>
            <Form.Item className="contactSubmit">
              <Button
                type="primary"
                htmlType="submit"
                disabled={disabled}
                id="demo_button"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </BookADemoInfoBlock>
      </BookADemoContainer>
      <Modal
        title=""
        visible={openConfirmModal}
        onCancel={handleCancel}
        footer=""
        className="getappModal"
        width={screenSize ? "90vw" : "50vw"}
        centered
        maskClosable={false}
      >
        <EmailConfirm
          title="Thank you for reaching out to us!"
          message={`One of our team members will get in touch with you in the\n next 24 hours to discuss further steps!`}
          from="BookADemo"
          handleCancel={handleCancel}
        />
      </Modal>
    </BookADemoSection>
  )
}
export default BookADemo
