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
