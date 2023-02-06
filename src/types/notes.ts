import { MouseEvent } from 'react';

interface Keys {
    title?: string;
    content?: string;
}

type ObjKeys = Pick<Keys, "title" | "content">;

export interface Note extends ObjKeys {
    id: number;
    // title: string;
    // content: string;
    date: string;
}

export interface NotesAppState {
    notes: Note[];
    // onClick: (e: MouseEvent<HTMLLIElement>) => void;
}