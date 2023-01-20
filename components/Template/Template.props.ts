import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";



export interface TemplateProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
}