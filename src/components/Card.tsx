import { FC, MouseEvent } from 'react';
import { Note } from '../types/notes';
import css from '../styles/styles.module.css';
import { DeleteButton } from './DeleteButton';

interface CardProps {
    card: Note;
    onClick: (e: MouseEvent<HTMLLIElement>) => void;
    deleteNote: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Card: FC<CardProps> = ({ card, onClick, deleteNote }) => {
 
    return (
        <li onClick={onClick} id={String(card.id)} className={css["card"]}>
            <h2>{card.title}</h2>
            <p>{card.content}</p>
            <p>{card.date}</p>
            <DeleteButton id={String(card.id)} deleteNote={ deleteNote }>Delete</DeleteButton>
        </li>
    )
}