import { FC } from 'react';
import { Note } from '../types/notes';
import { Input } from './common';
import { TextArea } from './common';
import css from '../styles/styles.module.css';

interface EditiongAreaProps {
    activeNote: Note | null;
    onUpdateNote: (updatedNote: Note) => void;
}

export const Main: FC<EditiongAreaProps> = ({ activeNote, onUpdateNote }) => {
    const editHandler = (key: string, value: string) => {
        //@ts-ignore
        onUpdateNote({ ...activeNote, [key]: value, date: new Date().toLocaleDateString() })
    }

    return (
            <div className={css["main-content"]}>
                <Input className={css["content-title"]} value={activeNote?.title ?? 'No note selected'} onChange={(e) => editHandler('title', e.target.value)} />
                <TextArea onChange={(e) => editHandler('content', e.target.value)} content={activeNote?.content ?? ''} />
            </div>
    )
}