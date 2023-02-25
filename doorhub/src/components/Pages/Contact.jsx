import { Input, Form, Button } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { Div, H1 } from '../../home/HomeHead'
import { Container } from '../Header'
import Page from '../Page/Page'

function Contact() {
  return (
    <Page>
      <ContactTop>
      <Container>
        <Div>
          <H1 style={{
            marginBottom: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 500
          }}>Registration</H1>
          <Div>
          <Form.Item
      label="Email"
      name="email"
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
    >
      <Input.Password  />
    </Form.Item>
          </Div>
          <ContactBtn style={{
            width :'20%',
          }}>
            <span>Submit</span>
          </ContactBtn>
        </Div>
      </Container>
      </ContactTop>
    </Page>
  )
}

export default Contact

const ContactBtn = styled.button`
cursor: pointer;
padding: 10px 0;
border: 1px solid blue;
border-radius: 6px;
`

const ContactTop = styled.div`
  
`