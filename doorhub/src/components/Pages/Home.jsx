import React from 'react'
import HomeHead from '../../home/HomeHead'
import HomeSlider from '../../home/HomeSlider'
import Page from '../Page/Page'

function Home() {
  return (
    <Page> 
      <HomeHead/>
      <HomeSlider/>
    </Page>
  )
}

export default Home