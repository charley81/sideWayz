import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context'

const Home = () => {
  // destructure from value object in context
  const { openSidebar, openModal } = useGlobalContext()

  return (
    <div>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </div>
  )
}

export default Home
