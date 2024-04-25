import React from 'react';
import { NavLink } from 'react-router-dom';

const Interface = () => {
  return (
    <div>
      <div>
              <nav class="bg-white border-gray-200 dark:bg-gray-900">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                  <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                      <img src="logo1.jpg" class="h-8" alt="Flowbite Logo" />
                      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SynthoVision</span>
                  </a>
                  <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                      <span class="sr-only">Open main menu</span>
                      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                      </svg>
                  </button>
                  <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                      <li>
                        <a href="http://localhost:3000/" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/img" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">ImageGenerator</a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/audio" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">AudioGenerator</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
      </div>

      <section className="bg-center flex flex-col items-center justify-center bg-gradient-to-b from-pink-200 via-pink-100 to-yellow-50 w-screen h-screen overflow-hidden">
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
