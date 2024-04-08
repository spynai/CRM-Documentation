import React, { useState } from "react";
import MailIcon from "../../images/email.webp";
import { Button, Form, Input, Modal } from "antd";
import { ContactSection, ContactContainer, ContactImgBlock, ContactImgBlockTop, ContactImgBlockBottom, ContactImgBlockBottomBlocks, ContactImgBlockBottomBlocksB1, ContactInfoBlock } from "./styles";
import useIsMobile from "../../utils/resize";
import EmailConfirm from "../EmailConfirm"
import { StaticImage } from "gatsby-plugin-image";

const Contact = () => {

  const screenSize = useIsMobile();

  const [form] = Form.useForm();

  const { TextArea } = Input;

  const [disabled, setDisabled] = useState(false);

  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  const onFinish = async values => {
    setOpenConfirmModal(true)
    setDisabled(false);
    form.resetFields();
    window?.dataLayer?.push({
      event: 'contact_form_submit',
      email: values.email,
      data: {
        url: window.location.href,
        title: document.title,
      },
    });
    await fetch('https://api-main.aifithub.com/email/contact', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        message: values.message ? values.message : '',
        domain: window.location.hostname
      }),
    }).then((response) => {
    }).catch((error) => {
      setDisabled(false);
    });

    // const sendEmailFn = httpsCallable (getFunctions(), "sendContactEmail")
    // setOpenConfirmModal(true)
    // setDisabled(false);
    // form.resetFields();
    // sendEmailFn(sendData).then((result) => {})
    // .catch((error) => {
    //   setDisabled(false);
    // })
  }

  const handleCancel = () => {
    setOpenConfirmModal(false)
  }

  return (
    <ContactSection id="contactContainer">
      <h2>
        Contact Us
      </h2>
      {
        screenSize &&
        <p>
          Use this form to send us a message and we will get back to you within 24 hours
        </p>
      }
      <ContactContainer>
        {
          !screenSize &&
          <ContactImgBlock>
            <ContactImgBlockTop>
              <h3>Reach Us</h3>
              <p>Use this form to send us a message and we will get back to you within 24 hours</p>
            </ContactImgBlockTop>
            <ContactImgBlockBottom>
              <ContactImgBlockBottomBlocks href={'mailto: support@aifithub.com'}>
                <ContactImgBlockBottomBlocksB1>
                  <StaticImage src="../../images/email.webp" alt="email" placeholder="none" />
                  {/* <img src={MailIcon} alt="img" /> */}
                </ContactImgBlockBottomBlocksB1>
                <ContactImgBlockBottomBlocksB1>
                  <p>support@aifithub.com</p>
                </ContactImgBlockBottomBlocksB1>
              </ContactImgBlockBottomBlocks>
            </ContactImgBlockBottom>
            {/* <div className="contact_line"></div> */}
          </ContactImgBlock>
        }
        <ContactInfoBlock>
          {/* <div className="circle" />
          <div className="circle circle_blue" />
          <div className="circle circle_yellow" /> */}
          <Form
            name="contact"
            layout="vertical"
            onFinish={onFinish}
            requiredMark={false}
            className="contactForm"
            form={form}
            id="contact_form"
          >
            <Form.Item
              label="Your Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please enter your name!',
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
                  type: 'email',
                  message: 'Please enter your email!',
                },
              ]}
            >
              <Input placeholder="yourname@domain.com" autoComplete="off" />
            </Form.Item>
            <Form.Item label="Tell us something" name="message">
              <TextArea rows={4} placeholder="What do you want to talk about?" className="textarea" />
            </Form.Item>
            <Form.Item className="contactSubmit">
              <Button type="primary" htmlType="submit" disabled={disabled} id="contact_button">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </ContactInfoBlock>
      </ContactContainer>
      <Modal title="" visible={openConfirmModal} onCancel={handleCancel} footer="" className="getappModal" width={screenSize ? '90vw' : '50vw'} centered maskClosable={false}>
        <EmailConfirm title="Thank you for reaching out Fitness Buff!" message="We promise to get back shortly." from="contact" handleCancel={handleCancel} />
      </Modal>
    </ContactSection>
  );
};
export default Contact;