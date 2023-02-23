import React from 'react'
import styled from 'styled-components'
import { Box } from '../components/Footer'
import { Container } from '../components/Header'
import { H1 } from './HomeHead'

function HomeSlider() {
    const products = [
        {
            id: 1,
            img: 'https://static.vecteezy.com/system/resources/thumbnails/009/582/946/small/pizza-fast-food-illustration-png.png',
            name: 'SUSHI',
        },
        {
            id: 2,
            img: 'https://static.vecteezy.com/system/resources/thumbnails/009/582/946/small/pizza-fast-food-illustration-png.png',
            name: 'PIZZA',
        },
        {
            id: 3,
            img: 'https://static.vecteezy.com/system/resources/thumbnails/009/582/946/small/pizza-fast-food-illustration-png.png',
            name: 'BURGERS',
        },
        {
            id: 4,
            img: 'https://static.vecteezy.com/system/resources/thumbnails/009/582/946/small/pizza-fast-food-illustration-png.png',
            name: 'DESSERTS',
        },
        {
            id: 5,
            img: 'https://static.vecteezy.com/system/resources/thumbnails/009/582/946/small/pizza-fast-food-illustration-png.png',
            name: 'SALAD',
        },
        {
            id: 6,
            img: 'https://static.vecteezy.com/system/resources/thumbnails/009/582/946/small/pizza-fast-food-illustration-png.png',
            name: 'PASTA',
        },
        {
            id: 7,
            img: 'https://static.vecteezy.com/system/resources/thumbnails/009/582/946/small/pizza-fast-food-illustration-png.png',
            name: 'XACHEPURI',
        },
        // {
        //     id: 9,
        //     img: 'https://static.vecteezy.com/system/resources/thumbnails/009/582/946/small/pizza-fast-food-illustration-png.png',
        //     name: 'LAVASH',
        // },
        // {
        //     id: 10,
        //     img: 'https://static.vecteezy.com/system/resources/thumbnails/009/582/946/small/pizza-fast-food-illustration-png.png',
        //     name: 'SHAVERMA',
        // },
        // {
        //     id: 11,
        //     img: 'https://static.vecteezy.com/system/resources/thumbnails/009/582/946/small/pizza-fast-food-illustration-png.png',
        //     name: 'XINKALLI',
        // },
        // {
        //     id: 12,
        //     img: 'https://static.vecteezy.com/system/resources/thumbnails/009/582/946/small/pizza-fast-food-illustration-png.png',
        //     name: 'SOUP',
        // },
        // {
        //     id: 13,
        //     img: 'https://static.vecteezy.com/system/resources/thumbnails/009/582/946/small/pizza-fast-food-illustration-png.png',
        //     name: 'CHIPS',
        // },
        // {
        //     id: 14,
        //     img: 'https://static.vecteezy.com/system/resources/thumbnails/009/582/946/small/pizza-fast-food-illustration-png.png',
        //     name: 'SOUSES',
        // },
    ]
  return (
    <div>
        <SlideTop>
            <Container>
                <SlideBoxes>
                    <SlideBox>
                        <SlideName>More Than 20,000 Dishes To Order!</SlideName>
                        <SlideText>Welcome to The Boggest Network of Food Ordering & Delivery</SlideText>
                    </SlideBox>
                    <SlideDiv>
                        <Box>
                            {
                                products.map((item) => (
                                    <SlideCards key={item.id} style={{
                                        width: 150,
                                    }}>
                                        <img src={`${item.img}`} style={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: 50,
                                            backgroundColor: 'aliceblue',
                                            padding: 8,

                                        }}/>
                                        <h3 style={{
                                            fontSize: 12,
                                            fontWeight: 500,
                                            marginTop: 10
                                        }}>{item.name}</h3>
                                    </SlideCards>
                                ))
                            }
                        </Box>
                    </SlideDiv>
                </SlideBoxes>
            </Container>
        </SlideTop>
    </div>
  )
}

export default HomeSlider

const SlideTop = styled.div``
const SlideBoxes = styled.div``
const SlideName = styled.h1`
width: 600px;
display: block;
text-align: center;
font-size: 50px;
`
const SlideText = styled.span`
color: grey;
font-size: 15px;
margin-bottom: 20px;
margin-top: 20px;
`
const SlideBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const SlideDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const SlideCards = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: 2px 4px 5px #0f0e0e98;
    padding: 20px 10px;
    border-radius: 20px;
    font-weight: 600;
    cursor: pointer;
    &:hover{
        transition: all 0.7s ease;
        background-color: #0000ffab;
        margin-bottom: 40px;
        color: #fff;
    }
`