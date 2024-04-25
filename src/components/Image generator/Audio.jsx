import React, { useState, useEffect } from 'react';

const Audio = () => {
  const [text, setText] = useState('');
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [synth, setSynth] = useState(null);

  useEffect(() => {
    const synth = window.speechSynthesis;
    setSynth(synth);

    const updateVoices = () => {
      setVoices(synth.getVoices());
    };
    
    updateVoices();

    synth.addEventListener('voiceschanged', updateVoices);

    return () => {
      synth.removeEventListener('voiceschanged', updateVoices);
    };
  }, []);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleVoiceChange = (event) => {
    const selectedVoiceName = event.target.value;
    const voice = voices.find((v) => v.name === selectedVoiceName);
    setSelectedVoice(voice);
  };

  const handleConvertToSpeech = (event) => {
    event.preventDefault();
    if (text.trim() === '') return;

    const utterance = new SpeechSynthesisUtterance(text);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    if (!synth.speaking) {
      synth.speak(utterance);
    } else {
      synth.pause();
      setIsSpeaking(!isSpeaking);
    }
  };

  return (
    <div className="wrapper">
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
                <h1 className='font-bold text-5xl font-sans text-black mb-6'><span className='font-bold text-5xl text-pink-600'>Voice</span>Craft</h1>
                <h1 className="mb-4 text-2xl font-bold font-sans tracking-tight leading-none text-gray-700 md:text-3xl lg:text-4xl ">Transform Text into Melodic Sound</h1>
                <p className="mb-8 text-lg font-normal text-black lg:text-xl sm:px-16 lg:px-48">VoiceCraft: Where words transform into melodic symphonies. Experience the elegance of seamless text-to-audio conversion. Immerse yourself in the beauty of expressive voices, personalized settings, and effortless playback. Elevate your content with VoiceCraft today! 🎙️🌟</p>
                
                <form onSubmit={handleConvertToSpeech}>
                <div className='w-[80vw] mx-auto flex flex-col items-center justify-center'>
                <label for="message" class="mb-2 text-m font-medium text-gray-800">Text To Speech</label>
                <textarea id="message" value={text} onChange={handleInputChange} rows="4" className='block w-full p-4 ps-10 text-sm text-gray-900 border border-pink-700 rounded-lg bg-white placeholder:text-gray-500' placeholder="Write your thoughts here..."></textarea>
                </div>

                <div id='dropdown' className='p-6'>
                                      
                  <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" className=" w-1/2 py-0 bg-gradient-to-r from-pink-400 to to-yellow-500 hover:bg-blue-800 focus:ring-4 focus:outline-none  rounded-full text-black text-sm font-semibold" type="button"> 
                  <select id="voices" class="w-full p-2 appearance-none h-full text-md text-black bg-transparent rounded-lg border-none " onChange={handleVoiceChange}>
                      {voices.map((voice) => (
                          <option key={voice.name} value={voice.name} class="text-white  bg-black ">
                              {voice.name} ({voice.lang})
                          </option>
                      ))}
                  </select>
                  </button>
                </div>
                    <button className='bottom-2.5 bg-gradient-to-r from-pink-400 to to-yellow-500 hover:bg-blue-800 focus:ring-4 focus:outline-none  rounded-full text-black text-sm font-semibold px-4 py-2 ' type="submit" >{isSpeaking ? 'Pause Speech' : 'Convert To Speech'}</button>
                </form>
        </div>
      </section>
    </div>
  );
};

export default Audio;
