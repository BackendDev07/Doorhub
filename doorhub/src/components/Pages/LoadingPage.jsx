import { Spin } from 'antd'
import React from 'react'

function LoadingPage() {
  return (
    <div style={{
        height: '100vh',
        width: '100%'
    }}>
        <Spin size='large'/>
    </div>
  )
}

export default LoadingPage