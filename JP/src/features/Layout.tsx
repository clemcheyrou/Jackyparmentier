import React, { useRef } from 'react'
import { Header } from './Header'
import { Image } from './Image'
import { SetList } from './SetList'
import { AboutUs } from './AboutUs'
import { Contact } from './Contact'

export const Layout = () => {
  const presentationRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const setlistRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Header
        onPresentation={() => scrollTo(presentationRef)}
        onServices={() => scrollTo(servicesRef)}
        onSetlist={() => scrollTo(setlistRef)}
        onContact={() => scrollTo(contactRef)}
      />
      <div ref={presentationRef}><AboutUs /></div>
      <div ref={servicesRef}><Image /></div>
      <div ref={setlistRef}><SetList /></div>
      <div ref={contactRef}><Contact /></div>
    </>
  )
}
