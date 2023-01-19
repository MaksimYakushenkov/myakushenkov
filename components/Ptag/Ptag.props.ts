import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    color?: 'white' | 'light'
    children: ReactNode;
}