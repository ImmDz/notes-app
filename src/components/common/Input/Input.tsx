import { FC, ChangeEvent } from 'react';

interface InputProps {
    className: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({ className, value, onChange }) => {
    return <input 
        type="text" 
        className={className} 
        placeholder="search" 
        value={value} 
        onChange={onChange}/>
}