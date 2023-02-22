import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

function Page(props) {
    const { children } = props
  return (
    <div>
        <Header/>
        <main>{children}</main>
        <Footer/>
    </div>
  )
}

export default Page