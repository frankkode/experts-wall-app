import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routes from '../../routes/Router'

const layout = () => {
  return (
    <>
    <Header/>
      <main>
        <Routes/>
      </main>
      <Footer/>
    </>
  )
}

export default layout