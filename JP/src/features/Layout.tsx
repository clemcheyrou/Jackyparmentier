import React from 'react'
import { Header } from './Header'
import { Image } from './Image'
import { SetList } from './SetList'
import { AboutUs } from './AboutUs'
import { Contact } from './Contact'

export const Layout = () => {
  return (
    <>
        <Header />
        <AboutUs/>
        <Image/>
        <SetList/>
        <Contact/>
      </>
  )
}
