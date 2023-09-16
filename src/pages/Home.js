import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer' // Make sure the filename matches
import Questions from './Questions'
import "bootstrap/dist/css/bootstrap.min.css"

function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div>
        <Navbar />
      </div>
      <div style={{ flex: '1' }}>
        {/* Body of the page */}
        <Questions />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
