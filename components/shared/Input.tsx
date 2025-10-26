import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
}

const Input: React.FC<InputProps> = ({ label, id, ...props }) => {
    return (
        <div>
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {label}
            </label>
            <input
                id={id}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-dark dark:focus:border-primary-dark"
                {...props}
            />
        </div>
    );
};

export default Input;
