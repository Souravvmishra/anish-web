import { AboutSection } from '@/components/main/about-anish'
import { BottomBar } from '@/components/main/bottom-bar'
import { LandingPage } from '@/components/main/landing'
import { Navbar } from '@/components/main/navbar'
import ProductsSection from '@/components/main/products-we-offer'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <div className='container px-4 mx-auto max-w-7xl'>
        <LandingPage />
        <AboutSection />
        <ProductsSection />
        <BottomBar />
      </div>
    </>
  )
}

export default page
