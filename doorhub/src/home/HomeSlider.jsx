import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import styled from 'styled-components'
import { Box } from '../components/Footer'
import { Container } from '../components/Header'
import LoadingPage from '../components/Pages/LoadingPage'
import { H1 } from './HomeHead'
import "swiper/css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
function HomeSlider() {
    const { isLoading } = useState(false)
    const categories = [
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
        {
            id: 9,
            img: 'https://static.vecteezy.com/system/resources/thumbnails/009/582/946/small/pizza-fast-food-illustration-png.png',
            name: 'LAVASH',
        },
        {
            id: 10,
            img: 'https://static.vecteezy.com/system/resources/thumbnails/009/582/946/small/pizza-fast-food-illustration-png.png',
            name: 'SHAVERMA',
        },
        {
            id: 11,
            img: 'https://static.vecteezy.com/system/resources/thumbnails/009/582/946/small/pizza-fast-food-illustration-png.png',
            name: 'XINKALLI',
        },
        {
            id: 12,
            img: 'https://static.vecteezy.com/system/resources/thumbnails/009/582/946/small/pizza-fast-food-illustration-png.png',
            name: 'SOUP',
        },
        {
            id: 13,
            img: 'https://static.vecteezy.com/system/resources/thumbnails/009/582/946/small/pizza-fast-food-illustration-png.png',
            name: 'CHIPS',
        },
        {
            id: 14,
            img: 'https://static.vecteezy.com/system/resources/thumbnails/009/582/946/small/pizza-fast-food-illustration-png.png',
            name: 'SOUSES',
        },
    ]
  return (
    <div>
        {
            isLoading ? <LoadingPage/> : 
            <SlideTop>
            <Container>
                <SlideBoxes>
                    <SlideBox>
                        <SlideName>More Than 20,000 Dishes To Order!</SlideName>
                        <SlideText>Welcome to The Boggest Network of Food Ordering & Delivery</SlideText>
                    </SlideBox>
                    <SlideDiv>
                        <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        navigation={true}
                        loop={true}
                        pagination={true}
                        breakpoints={{
                            640: {
                              slidesPerView: 2,
                            },
                            768: {
                              slidesPerView: 4,
                            },
                            1024: {
                              slidesPerView: 7,
                            },
                          }}
                          modules={[Pagination]}
                          className="mySwiper"
                        >
                        <Box style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                            // gap: 5,
                            marginBottom: 20
                        }}>
                            {
                                categories.map((item) => (
                                   <SwiperSlide style={{
                                    width: 200,
                                    padding: '10px 5px'
                                   }}>
                                     <SlideCards key={item.id} style={{
                                        width: 140,
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
                                            marginTop: 10,
                                            marginBottom: 10
                                        }}>{item.name}</h3>
                                    </SlideCards>
                                   </SwiperSlide>
                                ))
                            }
                        </Box>
                        </Swiper>
                    </SlideDiv>
                </SlideBoxes>
            </Container>
        </SlideTop>
        }
    </div>
  )
}

export default HomeSlider

const SlideTop = styled.div`
margin-bottom: 150px;
`
export const SlideBoxes = styled.div`
margin-bottom: 50px;
`
export const SlideName = styled.h1`
width: 600px;
display: block;
text-align: center;
font-size: 50px;
`
export const SlideText = styled.span`
color: grey;
font-size: 15px;
margin-bottom: 20px;
margin-top: 20px;
`
export const SlideBox = styled.div`
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
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 45px 10px;
    border-radius: 20px;
    font-weight: 600;
    cursor: pointer;
    padding-bottom: 20px;
    &:hover{
        transition: all 0.7s ease;
        background-color: #0000ffab;
        color: #fff;
    }
`