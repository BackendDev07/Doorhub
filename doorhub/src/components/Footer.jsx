import React from 'react'
import { Container, HeaderLogo, Span } from './Header'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import Facebook from '../components/assets/icons/Facebook'
import Twitter from '../components/assets/icons/Twitter'

function Footer() {
  const navigate = useNavigate()
  const handleLogo = () => {
    navigate('/')
  }
  return (
    <div>
      <FooterTop style={{
        borderTop: '1px solid #80808047'
      }}>
        <Container>
          <FootBoxes style={{
            borderBottom: '1px solid #80808047',
            marginBottom: 20,
            paddingBottom: 50,
            padding: '100px 0',
          }}>
              <FooterBox>
              <HeaderLogo>
                  <Span onClick={handleLogo}>Logo</Span>
                </HeaderLogo>
                <P>
                  <FooterText>
                      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, architecto expedita</span>
                  </FooterText>
                </P>
              </FooterBox>
              <Box>
              <FootBox>
              <H1>
                <FootName>Contact</FootName>
              </H1>
                <FootText>About Us</FootText>
                <FootText>Contact</FootText>
                <FootText>Features</FootText>
                <FootText>Blog</FootText>
              </FootBox>
              <FootBox>
              <H1>
                <FootName>
                Get to Know Us
                </FootName>
              </H1>
              <FootText></FootText>
                <FootText>Contact</FootText>
                <FootText>Features</FootText>
                <FootText>Blog</FootText>
              </FootBox>
              <FootBox>
              <H1>
                <FootName>
                Usefull Link
                </FootName>
              </H1>
              <FootText>About Us</FootText>
                <FootText>Contact</FootText>
                <FootText>Features</FootText>
                <FootText>Blog</FootText>
              </FootBox>
              <FootBox>
                <H1>
                  <FootName>
                  Quick Link
                  </FootName>
                </H1>
              <FootText>About Us</FootText>
                <FootText>Contact</FootText>
                <FootText>Features</FootText>
                <FootText>Blog</FootText>
              </FootBox>
              </Box>
          </FootBoxes>
          {/*  */}
          <FootBoxes style={{
            marginBottom: 50
          }}>
            <FootBox>
              <FootText>Copyrighter 2023 All rights reserved </FootText>
            </FootBox>
              <FootBoxes style={{
                gap: 10
              }}>
              <FootButton>
                <Link to='https://www.facebook.com'>
                <Facebook/>
                </Link>
              </FootButton>
              <FootButton>
                      <Link to='https://www.twitter.com'>
                      <Twitter/>
                      </Link>
              </FootButton>
              </FootBoxes>
          </FootBoxes>
        </Container>
      </FooterTop>
    </div>
  )
}

export default Footer


const FooterTop = styled.div`
  
`
const FooterBox = styled.div`
  display: block;
  text-align: start;
`
const FootBoxes = styled.div`
  display: flex;
  justify-content: space-between;
`
const FootBox = styled.div`
`

export const P = styled.p`
  
`

export const FootText = styled.p`
  width: 200px;
  font-size: 13px;
  color: grey;margin-bottom: 10px;
`
const FooterText = styled.p`
  width: 200px;
  margin-top: 20px;
  font-size: 13px;
  color: grey;
  line-height: 20px;
`
const H1 = styled.h1`
  
`
const FootName = styled.p`
  font-size: 15px;
  color: #0000007c;
  margin-bottom: 20px;
`

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const FootButton = styled.button`
  border: none;
  background-color: white;
  border: 2px solid blue;
    cursor: pointer;
  border-radius: 5px;
  padding: 7px;
  &:hover{
    transition: all 0.5s ease;
    background-color: blue;
    svg,path {
          stroke: #fff;
          fill: #fff;
        }
  }
`