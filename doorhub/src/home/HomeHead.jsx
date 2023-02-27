import React from 'react'
import styled from 'styled-components'
import { Container, Span } from '../components/Header'
import HeadImg from '../components/assets/images/order-img.jpg'
import { Box } from '../components/Footer'
import RightIcon from '../components/assets/icons/RightIcon'

function HomeHead() {
  return (
    <div>
        <Container>
            <HomeBoxes>
                <HomeBox>
                    <Div>
                        <H1 style={{
                            width: 450,
                            fontWeight: 600,
                            fontSize: 60
                        }}>We Provide Dlivery Within 30 Min</H1>
                        <HeadSpan>Imagine you don't need a diet because we prowide healthy and delicouse food for you</HeadSpan>
                        <HeadInput>
                            <Input placeholder='Enter Zip Coad'/>
                            <Box>
                                <HeadBtn>
                                    <span>Discover</span>
                                    <HeadSvg>
                                        <RightIcon/>
                                    </HeadSvg>
                                </HeadBtn>
                            </Box>
                        </HeadInput>
                    </Div>
                </HomeBox>
                <HomeBox>
                    <Img   src={HeadImg}/>
                </HomeBox>
            </HomeBoxes>
        </Container>
    </div>
  )
}

export default HomeHead


const HomeBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 1100px){
        flex-direction: column;
    }
`
const HomeBoxes = styled.div`
   padding:  50px 0;
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 150px;
   @media screen and (max-width: 1100px){
        flex-direction: column;
    }
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
`

export const H1 = styled.h1``
const Img = styled.img`
height: 550px;
width: 550px;
`
const HeadSpan = styled.span`
color: grey;
padding: 20px 0;
font-size: 18px;
`
const Input = styled.input`
border: none;
outline: none;
padding-left: 10px;
font-size: 17px;
`
const HeadInput = styled.div`
padding: 4px 4px 4px 17px;
border: 1px solid grey;
border-radius: 50px;
display: flex;
align-items: center;
justify-content: space-between;
`

const HeadSvg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    background-color: #fff;
    border-radius: 50px;
    margin-left: 15px;
    cursor: pointer;
`
const HeadBtn = styled.button`
padding: 4px 4px 4px 17px;
background-color: blue;
border: none;
display: flex;
align-items: center;
justify-content: space-between;
border-radius: 50px;
color: #fff;
font-size: 15px;
`