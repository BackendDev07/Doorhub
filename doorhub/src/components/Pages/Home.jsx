import React from 'react'
import HomeAdd from '../../home/HomeAdd'
import HomeHead from '../../home/HomeHead'
import HomeSlider from '../../home/HomeSlider'
import Page from '../Page/Page'

function Home() {
  return (
    <Page> 
      <HomeHead/>
      <HomeSlider/>
      <HomeAdd/>
    </Page>
  )
}

export default Home