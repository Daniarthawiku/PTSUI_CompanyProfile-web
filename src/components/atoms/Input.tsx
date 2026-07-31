import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
}

export default function Input({ error, className = '', ...props }: InputProps) {
    return (
        <input
        className={`input input-bordered w-full rounded-none bg-neutral-base border-neutral-border 
            text-neutral-text focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${
            error ? 'input-error' : ''
        } ${className}`}
        {...props}/>
    );
}