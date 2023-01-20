import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";



export interface PortfolioProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
}