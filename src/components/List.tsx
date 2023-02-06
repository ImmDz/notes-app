import { FC, MouseEvent, ChangeEvent } from 'react';
import { Note } from '../types/notes';
import { Card } from './Card';
import css from '../styles/styles.module.css';
import { Input } from './common';
import { AddButton } from './AddButton';

interface ListProps {
    notes: Note[];
    onClick: (e: MouseEvent<HTMLLIElement>) => void;
    deleteNote: (e: MouseEvent<HTMLButtonElement>) => void;
    addNote: () => void;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const List: FC<ListProps> = ({ notes, onClick, deleteNote, addNote, value, onChange }) => {
    return (
        <div className={css["sidebar"]}>
            <AddButton addNote={addNote} className={css['button-add']}>Add</AddButton>
            <Input value={value} className={css["input-search"]} onChange={onChange} />
            <ul className={css["note-list"]}>
                {notes.map((note) => <Card deleteNote={deleteNote} onClick={onClick} key={note.id} card={note} />)}
            </ul>
        </div>
    )
}