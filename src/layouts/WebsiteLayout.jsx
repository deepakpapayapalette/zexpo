import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet, useNavigation } from 'react-router-dom'
import Loader from './Loader'

const WebsiteLayout = () => {
  const loadingNavigation = useNavigation();
  if (loadingNavigation.state === 'loading') {
    return (<Loader />)
  }
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default WebsiteLayout
