import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";



export interface PointProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  count: number;
  title: string;
  children?: ReactNode;
}