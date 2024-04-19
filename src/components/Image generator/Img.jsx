import React, { useState, useRef } from 'react';

const Img = () => {
    const [imageBase64, setImageBase64] = useState(''); // State to store base64 string
    const [errorMessage, setErrorMessage] = useState('');

    let inpRef = useRef(null);

    const Search = async () => {
        if (!inpRef.current.value) {
            setErrorMessage('Please enter a search term.');
            return;
        }

        setErrorMessage('');

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
            console.log(data);
            setImageBase64(data);
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('An error occurred. Please try again later.');
        }
    }

    return (
            <section className="bg-gradient-to-b from-pink-200 via-pink-100 to-yellow-50 w-screen h-screen overflow-x-hidden">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative flex flex-col items-center justify-center">
                <h1 className='font-bold text-5xl font-sans text-black mb-6'><span className='font-bold text-5xl text-pink-600'>Pixel</span>Craft</h1>
                <h1 className="mb-4 text-2xl font-bold font-sans tracking-tight leading-none text-gray-700 md:text-3xl lg:text-4xl ">Crafting Creativity with Every Pixel</h1>
                <p className="mb-8 text-lg font-normal text-black lg:text-xl sm:px-16 lg:px-48">Welcome to ImageForge, your one-stop destination for unleashing your creative vision through stunning visuals. Our React-based image generation project empowers you to effortlessly create captivating images for your landing pages, social media, presentations, and more. With a user-friendly interface and a plethora of customization options, ImageForge simplifies the process of designing eye-catching graphics. Whether you're a seasoned designer or just starting your creative journey, our platform provides the tools you need to bring your ideas to life. Say goodbye to generic stock photos and hello to personalized, professional imagery with ImageForge. Explore the endless possibilities and let your imagination run wild with ImageForge today!</p>
                <div className="w-[80vw] mx-auto flex flex-col items-center justify-center">   
                    <label htmlFor="default-email" className="mb-2 text-sm font-medium text-gray-800 sr-only">Enter Prompt : </label>
                    <div className="relative mb-8 flex flex-col items-center w-[25vw] justify-center">
                        <div className="absolute inset-y-0  rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <h6>&#10024;</h6>
                        </div>
                        <input type="text" ref={inpRef} id="default-text" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-double border-pink-700 rounded-full bg-white placeholder:text-gray-500 " placeholder="Imagine Wonders....." required />
                        <button onClick={Search} className="absolute end-2.5 bottom-2.5 bg-gradient-to-r from-pink-400 to to-yellow-500 hover:bg-blue-800 focus:ring-4 focus:outline-none  rounded-full text-black text-sm font-semibold px-4 py-2 ">Generate</button>
                    </div>
                    <div className='w-[60vw] h-[30vh] mb-3 border flex flex-col items-center justify-around border-pink-700 rounded-lg py-2 px-3 '>
                    {imageBase64 && <img width={215} height={215} src={`data:image/jpeg;base64,${imageBase64}`} alt="Generated Image" className='rounded-lg' />}
                    </div>
                    <div>{errorMessage && <p className="text-red-600">{errorMessage}</p>}</div>
                </div>
            </div>
        </section>
    );
};

export default Img;
