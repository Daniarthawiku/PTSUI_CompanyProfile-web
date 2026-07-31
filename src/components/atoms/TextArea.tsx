import React, { TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export default function Textarea({ error, className = '', ...props }: TextAreaProps) {
    return (
    <textarea
    className={`textarea textarea-bordered w-full rounded-none bg-neutral-base border-neutral-border text-neutral-text 
        focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary min-h-[150px] resize-y ${
        error ? 'textarea-error' : ''
    } ${className}`}
    {...props}/>
    );
}