import React from 'react'
import Inputfield from '../components/Inputfield'
import Header from '../components/Header'
import Userquestions from '../components/Userquestions'
import Footer from '../components/footer'

const Profilepage = () => {
  return (
    <div>
        <div>
            <Header/>
        </div>
        <div>
            {/*Post request field*/}
            <Inputfield/>
        </div>
        <dir>
          <Userquestions/>
        </dir>
        <Footer/>
    </div>
  )
}

export default Profilepage
