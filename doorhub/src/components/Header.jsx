import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()
  const handleLogo = () => {
    navigate('/')
  }
  const handleContact = () => {
    navigate('/contact')
  }
  const handleAbout = () => {
    navigate('/about')
  }
  const handleFeatures = () => {
    navigate('/features')
  }
  const handleBlog = () => {
    navigate('/blog')
  }
  return (
    <div>
      <HeaderTop>
        <Container>
              <HeaderNav>
                <HeaderLogo>
                  <Span onClick={handleLogo}>Logo</Span>
                </HeaderLogo>
                <Ul>
                  <Li onClick={handleLogo}>Home</Li>
                  <Li onClick={handleAbout}>About Us</Li>
                  <Li onClick={handleFeatures}>Features</Li>
                  <Li onClick={handleContact}>Contact</Li>
                  <Li onClick={handleBlog}>Blog</Li>
                </Ul>
                <HeadBtn onClick={handleContact}>
                  <span>Contact Us</span>
                </HeadBtn>
              </HeaderNav>
        </Container>
      </HeaderTop>
    </div>
  )
}

export default Header

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 50px;
  margin: 0 auto;
`
const HeaderTop = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

export const HeaderLogo = styled.div`
  
`
const HeaderNav = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Span = styled.div`
  font-size: 30px;
  cursor: pointer;

`

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
`
export const Li = styled.li`
  list-style: none;
  text-decoration: none;
  cursor: pointer;
  color: grey;
  &:active {
    color: black;
  }
`
const HeadBtn = styled.button`
  cursor: pointer;
  padding: 15px 30px;
  border: 1px solid blue;
  font-size: 15px;
  border-radius: 150px;
  border: none;
  background-color: blue;
  color: aliceblue;
  &:hover{
    transition: all 0.5s ease;
    background-color: aliceblue;
    color: blue;
  }
`


