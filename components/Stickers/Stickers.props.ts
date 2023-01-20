import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";



export interface StickersProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
}