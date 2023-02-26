import React from 'react'
import styled from 'styled-components'
import { Box } from '../components/Footer'
import { Container } from '../components/Header'
import { SlideBox, SlideBoxes, SlideName, SlideText } from './HomeSlider'
import AddIcon from '../components/assets/icons/AddIcon'
import { useNavigate } from 'react-router-dom'

function HomeAdd() {
    const navigate = useNavigate()
    const handlePro = () => {
        navigate('/product')
    }
    const products = [
        {
            id: 1,
            img: 'https://static.vecteezy.com/system/resources/thumbnails/009/582/946/small/pizza-fast-food-illustration-png.png',
            name: 'Steewed cabage with sauce',
            bill: '5.90',
            icon: '',
        },
        {
            id: 2,
            img: 'https://static.vecteezy.com/system/resources/thumbnails/009/582/946/small/pizza-fast-food-illustration-png.png',
            name: 'Pure soup with turkey pieces',
            bill: '7.55',
            icon: '',
        },
        {
            id: 3,
            img: 'https://static.vecteezy.com/system/resources/thumbnails/009/582/946/small/pizza-fast-food-illustration-png.png',
            name: 'Chicken with vegetables',
            bill: '3.39',
            icon: '',
        },
        {
            id: 4,
            img: 'https://static.vecteezy.com/system/resources/thumbnails/009/582/946/small/pizza-fast-food-illustration-png.png',
            name: 'Traditional Greek salad',
            bill: '4.99',
            icon: '',
        },
        {
            id: 5,
            img: 'https://static.vecteezy.com/system/resources/thumbnails/009/582/946/small/pizza-fast-food-illustration-png.png',
            name: 'Steewed cabage with sauce',
            bill: '5.90',
            icon: '',
        },
        {
            id: 6,
            img: 'https://static.vecteezy.com/system/resources/thumbnails/009/582/946/small/pizza-fast-food-illustration-png.png',
            name: 'Steewed cabage with sauce',
            bill: '5.90',
            icon: '',
        },
        
    ]
  return (
    <div>
        <AddTop>
            <Container>
                    <SlideBoxes>
                        <SlideBox>
                            <SlideName>Popular dishes with delivery</SlideName>
                        <SlideText style={{
                            width: 450,
                            display: 'block',
                            textAlign: 'center',
                            marginBottom: 50
                        }}>The most delisios and healthy dishes from our chefs. You can order this meal separately or as part of a meal plan </SlideText>
                    </SlideBox>
                    <AddBoxes>
                            {
                                products.map((item) => (
                                    <AddBox onClick={handlePro}  key={item.id}>
                                        <Img style={{
                                            padding: '50px 20px',
                                        }} src={`${item.img}`} />
                                        <h1 style={{
                                            fontSize: 15,
                                            fontWeight: 500,
                                            marginBottom: 10
                                        }}> {item.name} </h1>
                                        <Box style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between'
                                        }}>
                                            <h1 style={{
                                            fontSize: 20,
                                            fontWeight: 600
                                        }}> ${item.bill} </h1>
                                            <button>
                                                <AddIcon/>
                                            </button>
                                        </Box>
                                    </AddBox>
                                ))
                            }
                    </AddBoxes>
                </SlideBoxes>
            </Container>
        </AddTop>
    </div>
  )
}

export default HomeAdd

const AddTop = styled.div`
    
`

const AddBox = styled.div`
    display: block;
    text-align: center;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 30px;
    margin: 20px;
    cursor: pointer;
    button{
        background-color: #0000ff88;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        padding: 5px;
    }
    &:hover{
        transition: all 0.5s ease;
        background-color: #0000ff88;
        color: aliceblue;

        button{
            transition: all 0.5s ease-out;
            background-color: #fff;
        }
        svg,path{
            fill: #0000ff88;
            stroke: #0000ff88;
        }
    }

`
const AddBoxes = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export const Img = styled.img`
    
`