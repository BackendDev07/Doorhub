import { Input } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../Header'
import Page from '../Page/Page'

function Contact() {
  return (
    <Page>
      <ContactTop>
        <Container>
          <ContactBox>
            <ContactH1>Registration</ContactH1>
          <Input style={{
              width: '40%'
            }}/>
            <Input.Password style={{
              width: '40%'
            }}/>
            <SubmitBtn type='primary' htmlType='submit'>
              <span>Submit</span>
            </SubmitBtn>
          </ContactBox>
        </Container>
      </ContactTop>
    </Page>
  )
}

export default Contact

const ContactTop = styled.div`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: center;
`
const ContactBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 180px;
flex-direction: column;
gap: 20px;
`
const SubmitBtn = styled.div`
padding: 10px;
border-radius: 10px;
border: 1px solid blue;
cursor: pointer;
width: 20%;
display: flex;
align-items: center;
justify-content: center;
&:hover{
  transition: all 0.5s ease;
  background-color: blue;
  color: aliceblue;
}
`

const ContactH1 = styled.h1`
  font-size: 40px;
  font-weight: 500;
`