import { FC, MouseEvent, PropsWithChildren } from 'react';
import { Button } from '../common';

interface AddButton {
    addNote: () => void;
    className?: string;
}

export const AddButton: FC<PropsWithChildren<AddButton>> = ({ addNote, children, className }) => {
    return <Button className={className} onClick={addNote}>{children}</Button>
}