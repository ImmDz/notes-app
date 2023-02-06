import { FC, MouseEvent, PropsWithChildren } from 'react';
import { Button } from '../common/Button';

interface DeleteButton {
    deleteNote: (e: MouseEvent<HTMLButtonElement>) => void;
    id: string;
}

export const DeleteButton: FC<PropsWithChildren<DeleteButton>> = ({ deleteNote, children, id }) => {
    //@ts-ignore
    return <Button id={id} onClick={deleteNote}>{children}</Button>
}