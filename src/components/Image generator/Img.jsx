import React, { useState, useRef } from 'react';

const Img = () => {
    const [imageBase64, setImageBase64] = useState('');
    const [loading, setLoading] = useState(false); // Added loading state
    const [errorMessage, setErrorMessage] = useState('');
    let inpRef = useRef(null);

    const Search = async () => {
        if (!inpRef.current.value) {
            setErrorMessage('Please enter a search term.');
            return;
        }

        setErrorMessage('');
        setLoading(true); // Set loading to true when starting the fetch

        try {
            const res = await fetch('https://imageai-generator.p.rapidapi.com/image', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': '84cecd8711msh5d21309e79fa61cp13743bjsn7131a9e8cc95',
                    'X-RapidAPI-Host': 'imageai-generator.p.rapidapi.com',
                    "user-agent": "chrome",
                },
                body: JSON.stringify({
                    "prompt": `A beautiful image of ${inpRef.current.value}`,
                    "n": 4,
                    "size": "512x512"
                }),
            });

            if (!res.ok) {
                throw new Error('Failed to fetch image.');
            }

            const data = await res.json();
            const base64String = data.body; 
            setImageBase64(data);
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('An error occurred. Please try again later.');
        } finally {
            setLoading(false); // Set loading to false after fetch is done
        }
    }

    return (
        <div>
            <div id="navbar">
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
            <section className="bg-gradient-to-b from-pink-200 via-pink-100 to-yellow-50 w-screen h-screen overflow-x-hidden">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative flex flex-col items-center justify-center">
                    <h1 className='font-bold text-5xl font-sans text-black mb-6'><span className='font-bold text-5xl text-pink-600'>Pixel</span>Craft</h1>
                    <h1 className="mb-4 text-2xl font-bold font-sans tracking-tight leading-none text-gray-700 md:text-3xl lg:text-4xl ">Crafting Creativity with Every Pixel</h1>
                    <p className="mb-8 text-lg font-normal text-black lg:text-xl sm:px-16 lg:px-48">Welcome to ImageForge, your creative hub for stunning visuals. Our React-based project empowers you to craft captivating images effortlessly. With a user-friendly interface and customizable options, designing eye-catching graphics is a breeze. Say goodbye to stock photos and hello to personalized imagery. Explore endless possibilities with ImageForge!</p>
                    <div className="w-[80vw] mx-auto flex flex-col items-center justify-center">   
                        <label htmlFor="default-email" className="mb-2 text-sm font-medium text-gray-800 sr-only">Enter Prompt : </label>
                        <div className="relative mb-8 flex flex-col items-center w-[25vw] justify-center">
                            <div className="absolute inset-y-0  rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <h6>&#10024;</h6>
                            </div>
                            <input type="text" ref={inpRef} id="default-text" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-double border-pink-700 rounded-full bg-white placeholder:text-gray-500 " placeholder="Imagine Wonders....." required />
                            <button onClick={Search} className="absolute end-2.5 bottom-2.5 bg-gradient-to-r from-pink-400 to to-yellow-500 hover:bg-blue-800 focus:ring-4 focus:outline-none  rounded-full text-black text-sm font-semibold px-4 py-2 ">Generate</button>
                        </div>
                        <div className='w-[60vw] h-[30vh] mb-3  flex flex-col items-center justify-around border-pink-700 rounded-lg py-2 px-3 '>
                            {loading ? 
                                    <div class="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...</div>
                                : (imageBase64 && <img width={215} height={215} src={`data:image/jpeg;base64,${imageBase64}`} alt="Generated Image" className='rounded-lg' />)}
                        </div>
                        <div>{errorMessage && <p className="text-red-600">{errorMessage}</p>}</div>
                    </div>
                </div>
            </section>
        </div>    
    );
};

export default Img;
