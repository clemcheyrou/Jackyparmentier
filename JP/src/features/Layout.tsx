import React from 'react'
import { Header } from './Header'
import { Image } from './Image'
import { SetList } from './SetList'
import { AboutUs } from './AboutUs'
import { Contact } from './Contact'

export const Layout = () => {
  return (
    <div className='md:mx-48 lg:mx-96 mx-4 mt-20'>
        <Header/>
        <Image/>
        <SetList/>
        <AboutUs/>
        <Contact/>
    </div>
  )
}
