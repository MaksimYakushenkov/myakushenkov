import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

// extends для прокидывания атрибутов HTML-элемента
export interface ButtonProps extends 
Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'> {
    children: ReactNode;
    appearance: 'lime' | 'ghost';

    //Чтобы сделать параметр необязательным, нужно добавить "?"
    arrow?: boolean;
}