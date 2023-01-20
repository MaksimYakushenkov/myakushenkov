import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";



export interface ServicesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
}