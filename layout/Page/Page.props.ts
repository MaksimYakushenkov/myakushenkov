import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export interface PageProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { 
  children: ReactNode;
}