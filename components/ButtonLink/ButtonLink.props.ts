import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

// extends для прокидывания атрибутов HTML-элемента
export interface ButtonLinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    className?: string | undefined;
    children: ReactNode;
    appearance: 'lime' | 'ghost';
    arrow?: boolean;
    href: string;
    target?: string | undefined;
}