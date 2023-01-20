import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";



export interface AboutProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
}