/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import { FaBars } from 'react-icons/fa'

const Home = () => {
  return (
    <div>
      <button className="toggle">
        <FaBars />
      </button>
      <button className="btn">show modal</button>
    </div>
  )
}

export default Home
