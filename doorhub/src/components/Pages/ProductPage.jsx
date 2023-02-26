import React from 'react'
import styled from 'styled-components'
import { Img } from '../../home/HomeAdd'
import { Div } from '../../home/HomeHead'
import { Box } from '../Footer'
import { Container } from '../Header'
import Page from '../Page/Page'

function ProductPage() {
  return (
    <Page>
        <Container>
            <ProductTop>
                <ProBox style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'start'
                }}>
                    <Div style={{
                        border: '1px solid #6e6d6d48',
                        borderRadius: 5,
                        padding: 20
                    }}>
                        <Img style={{
                            width: 400,
                            height: 400,

                        }} src="https://static.vecteezy.com/system/resources/thumbnails/009/582/946/small/pizza-fast-food-illustration-png.png" alt="" />
                    </Div>
                    <Div style={{
                        padding: '0 50px',
                        gap: 5,
                    }}>
                        <ProText>
                            <span>Name: </span>
                            <span>Pizza</span>
                        </ProText>
                        <ProText>
                            <span>Bill: </span>
                            <span>$7.88</span>
                        </ProText>
                    </Div>
                </ProBox>
            </ProductTop>
        </Container>
    </Page>
  )
}

export default ProductPage

const ProductTop = styled.div`
    padding: 110px 0 250px 0;
`

const ProText = styled.span`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
`

const ProBox = styled.div`
    
`