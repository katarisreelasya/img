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
                    "n": 1,
                    "size": "512x512"
                }),
            });

            if (!res.ok) {
                throw new Error('Failed to fetch image.');
            }

            const data = await res.json();
            const base64String = data.body; // Assuming the base64 string is in the 'body' field of the response
            console.log(data);
            setImageBase64(data);
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('An error occurred. Please try again later.');
        }
    }

    return (
        <div className='flex flex-col items-center mx-auto mt-80 mb-20'>
            <div className='text-5xl font-medium pb-30'>
                AI image <span className='text-red-600'>generator</span>
                <div className="flex flex-col">
                    <div className="img">
                        {imageBase64 && <img src={`data:image/jpeg;base64,${imageBase64}`} alt="Generated Image" className='' />}
                    </div>
                    <div className="inp">
                        <input type="text" placeholder='type to search..' ref={inpRef} className="w-full h-10 px-4 py-2 m-20 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600" />
                        <button className="btn" onClick={Search}>Generate</button>
                    </div>
                </div>
            </div>
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        </div>
    );
};

export default Img;
