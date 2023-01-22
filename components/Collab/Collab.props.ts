import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";



export interface CollabProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
}