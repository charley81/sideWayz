import React, { useState, useContext } from 'react'

const AppContext = React.createContext()
// you get back two components (1 for provider & 1 for consumer)
// in this case only using one for provider
// wrap the whole app in AppProvider
const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openSidebar,
        openModal,
        closeModal,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// custom hook here always start hook as use
// this is so you don't have to import useContext & AppContext each time you want to use... you only have to import this custom hook
export const useGlobalContext = () => useContext(AppContext)

// import AppProvider in index.js
// import AppContent in component used
export { AppContext, AppProvider }
