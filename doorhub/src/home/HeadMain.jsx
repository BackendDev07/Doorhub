import React from 'react'
import styled from 'styled-components'
import { Container, Span } from '../components/Header'
import { Img } from './HomeAdd'
import { H1 } from './HomeHead'
import ImgOne from '../components/assets/images/ponchik.jpg'
import ImgTwo from '../components/assets/images/burger.jpg'
import ImgThree from '../components/assets/images/lemons.jpg'
import { Button } from 'antd'

function HeadMain() {
  return (
    <div>
        <Container>
                <MainCenter>
                    <H1 style={{
                        marginBottom: 20,
                        marginTop: 50,
                        
                    }}>Articels and useful tips</H1>
                    <ProSpan>Lorem ipsum dolor sit amet  accusamus possimus placeat aspernatur veritatis, ea dolores veniam provident, qui necessitatibus aut eveniet ipsa, minus debitis fuga! Laborum?</ProSpan>
                </MainCenter>
            <MainBoxes>
                <MainBox>
                    <Img style={{
                        backgroundSize :'cover',
                        width: 350,
                        height: 230,
                        marginBottom: 50,
                        borderRadius: 20,
                    }} src={ImgOne}/>
                <H1 style={{
                    marginBottom: 10,
                    fontSize: 23
                }}>Lorem officia ullam quos necessitatibus.</H1>
                <Span style={{
                    color: 'grey',
                    fontSize: 15,
                    lineHeight: 1.5,
                    marginBottom: 20,
                }}> Lorem ipsum Debitis nam  saepe nisi officia optio illo, maxime error similique necessitatibus nostrum praesentium itaque ipsam dolores esse quas. </Span>
                </MainBox>
                <MainBox>
                <Img style={{
                        width: 350,
                        marginBottom: 50,
                        borderRadius: 20,
                        backgroundSize :'cover',
                        height: 230
                    }} src={ImgTwo}/>
                <H1 style={{
                    marginBottom: 10,
                    fontSize: 23
                }}>Lorem officia ullam quos necessitatibus.</H1>
                <Span style={{
                    marginBottom: 20,
                    color: 'grey',
                    fontSize: 15,
                    lineHeight: 1.5
                }}> Lorem ipsum Debitis nam  saepe nisi officia optio illo, maxime error similique necessitatibus nostrum praesentium itaque ipsam dolores esse quas. </Span>
                </MainBox>
                <MainBox>
                <Img style={{
                        width: 350,
                        height: 230,
                        borderRadius: 23,
                        backgroundSize :'cover',
                        marginBottom: 50,
                    }} src={ImgThree}/>
                <H1 style={{
                    fontSize: 23,
                    marginBottom: 10,
                }}>Lorem officia ullam quos necessitatibus.</H1>
                <Span style={{
                    color: 'grey',
                    marginBottom: 20,
                    fontSize: 15,
                    lineHeight: 1.5
                }}> Lorem ipsum Debitis nam  saepe nisi officia optio illo, maxime error similique necessitatibus nostrum praesentium itaque ipsam dolores esse quas. </Span>
                </MainBox>
            </MainBoxes>
        </Container>
    </div>
  )
}

export default HeadMain

const MainBoxes = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const MainCenter = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`
const ProSpan = styled.span`
    color: grey;
    width: 850px;
    display: block;
    text-align: center;
    margin-bottom: 70px;
`

const MainBox = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
`