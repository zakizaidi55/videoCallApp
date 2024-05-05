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
    <div className='bg-blue-400 flex flex-col gap-2'>
        <div>
            <label htmlFor='enterCode'>Enter your code</label>
            <input className='text-red-700'
                type='text'
                name='enterCode'
                id='enterCode'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                
            />
        </div>

        <button  className='font-bold rounded-lg' 
        onClick={submitHandler}> Enter</button>

    </div>
  )
}

export default HomePage