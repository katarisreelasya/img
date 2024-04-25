import React from 'react';
import { NavLink } from 'react-router-dom';

const Interface = () => {
  return (
    <div>
      <section className="bg-center flex flex-col items-center justify-center bg-gradient-to-b from-pink-200 via-pink-100 to-yellow-50 w-screen h-screen overflow-x-hidden">
        <div className="px-4 flex flex-col items-center justify-center mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-800 md:text-5xl lg:text-6xl">
            <span className='text-pink-700'>Syntho</span>Vision
          </h1>
          <p className="mb-8 text-lg font-semibold text-pink-800 lg:text-xl sm:px-16 lg:px-48">Envision. Create. Listen.</p>
          <p className="mb-36 sm:mb-8 lg:mb-8 md:mb-8 text-lg font-semibold text-gray-900 lg:text-xl sm:px-16 lg:px-48">
            SynthoVision pioneers the fusion of AI-driven image generation and text-to-audio conversion. Empowering creativity with seamless digital synthesis, it transforms ideas into immersive visual and auditory experiences. Explore boundless creativity and storytelling potential with SynthoVision.
          </p>
          <div className="flex items-center flex-col justify-center sm:flex-row space-y-4 sm:justify-between sm:space-y-0 w-[60vw] h-[30vh]">
            <div className="w-full max-w-sm backdrop-blur-md border border-pink-700 rounded-lg shadow-pink-200 shadow-lg">
              <div className="px-5 pb-5">
                <h1 className='font-bold text-2xl font-sans text-black mb-2 mt-6'><span className='font-bold text-2xl text-pink-600'>Image</span>Forge</h1>
                <h1 className="mb-4 text-md font-bold font-sans tracking-tight leading-none text-gray-800  ">Crafting Creativity with Every Pixel</h1>
                <div className="flex items-center mt-4 justify-center">
                  <NavLink to="/img" className="text-white bg-pink-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center">Get Started</NavLink>
                </div>
              </div>
            </div>

            <div className="w-full max-w-sm backdrop-blur-md border border-pink-700 rounded-lg shadow-pink-200 shadow-lg">
              <div className="px-5 pb-5">
                <h1 className='font-bold text-2xl font-sans text-black mb-2 mt-6'><span className='font-bold text-2xl text-pink-600'>Voice</span>Craft</h1>
                <h1 className="mb-4 text-md font-bold font-sans tracking-tight leading-none text-gray-800  ">Transform Text into Melodic Sound</h1>
                <div className="flex items-center mt-4 justify-center">
                  <NavLink to="/audio" className="text-white bg-pink-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center">Get Started</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Interface;
