import React from 'react'
import esteban from '../assets/icons/Esteban_Santiago.svg'

const Header = () => {
  return (
    <header id="header" className="w-screen h-12 bg-gray">
        <section className="w-screen h-full flex items-center justify-center">
            <div className="w-40 h-8/9 mt-1">
                <img className="w-full h-full" src={esteban} alt="Esteban Santiago"/>
            </div>
        </section>
    </header>
  )
}

export {Header}