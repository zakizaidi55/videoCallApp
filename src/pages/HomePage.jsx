import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

function HomePage() {
    const [value, setValue] = useState('');
    const navigate = useNavigate();


    const submitHandler = useCallback(() => {
        navigate(`/Room/${value}`);
    }, [navigate, value]);
    
  return (
    <div className='bg-blue-400 flex flex-col gap-2 h-screen w-full overflow-hidden justify-center items-center'>
        <div className='flex space-x-4'>
            <label htmlFor='enterCode' className='font-bold text-lg text-cyan-950'>Enter your code</label>
            <input className='text-red-700 rounded-lg '
                type='text'
                name='enterCode'
                id='enterCode'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                
            />
        </div>

        <button  className='font-bold border-l-gray-950' 
        onClick={submitHandler}> Enter</button>

    </div>
  )
}

export default HomePage