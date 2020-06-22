import Head from 'next/head'
import React from 'react'
import AppContextProvider, { AppContext } from '../Components/AppContextProvider'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Facts from '../Components/Facts'
import Skills from '../Components/Skills'
import Resume from '../Components/Resume'
import Portfolio from '../Components/Portfolio'
import Services from '../Components/Services'
import Testimonials from '../Components/Testimonials'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

function HTMLHead(){
  const { name, bio } = React.useContext(AppContext)

  return <Head>
    <meta charSet="utf-8" />
    <meta 
      name="viewport" 
      content="width=device-width, initial-scale=1.0" 
    />

    <title>{name}</title>
    <meta 
      name="descriptison" 
      content={`${name}. Personal Website. &#128522; ${bio}`} 
    />
    <meta 
      name="keywords" 
      content={`${name}. Personal Website. `} 
    />
    <meta name="theme-color" content="#ffc107" />
    <meta name="robots" content="noindex" />
    <meta name="geo.position" content="-6.2293867;106.6894293" />
    <meta name="geo.placename" content="Indonesia" />
    <meta name="geo.region" content="Pekalongan, Jawa Tengah" />

    {/* FavIcon */} 
    <link 
      rel="icon" 
      type="image/ico"
      href="/favicon/favicon.ico" 
    />
    <link  
      rel="apple-touch-icon"
      type="image/png"
      href="/favicon/apple-touch-icon.png"
    />

    {/* Google Fonts */} 
    <link 
      href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" 
      rel="stylesheet"
    />
    {/* Fonts Awesome */}
    <link 
      rel="stylesheet" 
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" 
    />
      
    {/* Template Main CSS File */} 
    <link href="/w3pro.css" rel="stylesheet" />
    <link href="/w3theme.css" rel="stylesheet" />
      
    </Head>
}

function Index(){
  return <>
    <HTMLHead />
    
    {/* <Header /> */}
    <Hero />
    
    <main id="main">
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
        
      {/* 
          <Facts />
          <Services />
          <Testimonials />

        
        <a href="#" className="back-to-top"><i className="bx bx-up-arrow-alt"></i></a>
        <div id="preloader"></div>
      */}

    </main>
    <Footer />

  </>
}

export default () =>  <AppContextProvider>
 <Index />
</AppContextProvider>