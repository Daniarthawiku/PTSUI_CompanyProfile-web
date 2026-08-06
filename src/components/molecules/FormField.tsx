import React from 'react';
import { FormFieldProps } from '../../types';

export default function FormField({ label, id, required, error, children }: FormFieldProps) {
    return (
        <div className="form-control w-full">
            <label htmlFor={id} className="label pb-1">
                <span className="label-text font-sans font-semibold text-neutral-text">
                    {label} {required && <span className="text-red-500 ml-1">*</span>}
                </span>
            </label>
            
            {children}
            {error && (
            <label className="label pt-1">
                    <span className="label-text-alt text-red-500 font-medium">{error}</span>
            </label>
        )}
        </div>
    );
}