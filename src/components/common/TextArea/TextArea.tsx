import { FC, PropsWithChildren, useState, ChangeEvent } from 'react';
import { Note } from '../../../types/notes';
import css from '../../../styles/styles.module.css';

export interface TextAreaProps {
    content: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea: FC<TextAreaProps> = ({ content, onChange }) => {
    return (
        <textarea
            className={css['text-area']}
            value={content} 
            onChange={onChange}/>
    )
}