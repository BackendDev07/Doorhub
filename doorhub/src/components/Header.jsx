import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate
  const handleClick = () => {
    navigate('/')
  }
  return (
    <div>
      <button onClick={handleClick}>Header</button>
    </div>
  )
}

export default Header