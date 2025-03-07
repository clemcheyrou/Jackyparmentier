import React from 'react'

export const Header = () => {
    return (
      <div className='h-[100vh]'>
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
  
        <nav className="p-4 px-8 mt-12">
          <div className="flex flex-wrap justify-between items-center gap-y-4">
            <a href="#home" className="font-semibold hover:text-secondary w-full sm:w-auto text-center">Presentation</a>
            <a href="#services" className="font-semibold hover:text-secondary w-full sm:w-auto text-center">Live/Photos</a>
            <a href="#about" className="font-semibold hover:text-secondary w-full sm:w-auto text-center">Setlist</a>
            <a href="#contact" className="font-semibold hover:text-secondary w-full sm:w-auto text-center">Contact</a>
          </div>
        </nav>
      </div>
    );
  }
  