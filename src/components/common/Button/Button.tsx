import { FC, PropsWithChildren, MouseEvent } from 'react';

interface ButtonProps {
    id?: string;
    className?: string;
    onClick: () => void;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({ onClick, children, id, className }) => {
    return <button onClick={onClick} className={className} id={id}>{children}</button>
}