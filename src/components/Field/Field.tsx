import React from 'react';
import {FieldProps} from './types.ts';


const Field = React.forwardRef<HTMLInputElement, FieldProps>((
    {
        label,
        placeholder,
        type,
        register,
        errors,
        ...props
    },
    ref) => {
    return (
        <div className='grid gap-2'>
            <label className='text-gray-500 font-medium'>{label}</label>
            <input
                className='focus:outline-none bg-gray-100 h-12 text-lg rounded-xl pl-4'
                type={type}
                ref={ref}
                placeholder={placeholder}
                {...props}
                {...register}
            />
            <div className='h-3 mb-3'>
                {errors && <p className='pl-2 text-sm text-red-500'>{errors.message}</p>}
            </div>
        </div>
    );
});

export default Field;