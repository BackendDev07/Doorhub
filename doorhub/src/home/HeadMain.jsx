import React from 'react'
import styled from 'styled-components'
import { Container } from '../components/Header'
import { H1 } from './HomeHead'

function HeadMain() {
  return (
    <div>
        <Container>
            <MainBox>
                <MainCenter>
                    <H1 style={{
                        marginBottom: 20,
                        marginTop: 50,
                        
                    }}>Articels and useful tips</H1>
                    <ProSpan>Lorem ipsum dolor sit amet  accusamus possimus placeat aspernatur veritatis, ea dolores veniam provident, qui necessitatibus aut eveniet ipsa, minus debitis fuga! Laborum?</ProSpan>
                </MainCenter>
            </MainBox>
        </Container>
    </div>
  )
}

export default HeadMain

const MainBox = styled.div`
    
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