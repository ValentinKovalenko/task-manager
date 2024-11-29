import React, {useState} from 'react';
import {useDebounce} from "../../hooks/useDebounce.tsx";

const DebouncedInput = () => {
    const [text, setText] = useState('');
    const debouncedText = useDebounce(text, 500);

    console.log(debouncedText)

    return (
        <div className='w-full'>
            <input
                className='h-10 w-1/3 bg-gray-100 rounded-xl pl-4 focus:outline-none'
                type='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Search'
            />
        </div>
    );
};

export default DebouncedInput;