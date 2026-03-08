import React from 'react'

export const Header = () => {
    return (
      <div className="w-full h-[100vh] bg-cover bg-center bg-no-repeat m-0 relative" style={{ backgroundImage: "url('/header_bg.png')" }}>
        <img src="/header_menu.png" alt="header menu" className="hidden sm:block absolute bottom-0 left-1/2 z-0" style={{ width: '2000px', maxWidth: 'none', transform: 'translateX(-50%)' }} />
        <div className="min-h-[100vh] w-[800px] max-w-full mx-auto px-4 sm:px-8 md:px-20 lg:px-24 pt-32">
          <h1 className='font-bold text-center'>LES JACKY PARMENTIER</h1>
          <h2 className='font-semibold text-center'>FANFARE</h2>
          <div className='flex justify-center mt-4'>
            <img
              src='/logo.png'
              style={{
                width: '300px',
                height: 'auto',
                maxWidth: '100%',
              }}
              alt='logo jacky parmentier'
            />
          </div>
          <nav className="relative z-10 flex flex-col md:flex-row lg:flex-row justify-between items-center gap-y-4 p-4 px-8 mt-12 w-full">
            <a href="#home" className="font-semibold hover:text-secondary">Presentation</a>
            <a href="#services" className="font-semibold hover:text-secondary">Live/Photos</a>
            <a href="#about" className="font-semibold hover:text-secondary">Setlist</a>
            <a href="#contact" className="font-semibold hover:text-secondary">Contact</a>
          </nav>
        </div>
      </div>
    );
  }