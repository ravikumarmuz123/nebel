import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { AuthProvider } from '../context/AuthContext'

const RootLayout = () => {
  return (
    <AuthProvider>
      <Header />
      <main id="main-content"><Outlet /></main>
      <Footer />
    </AuthProvider>
    
  )
}

export default RootLayout