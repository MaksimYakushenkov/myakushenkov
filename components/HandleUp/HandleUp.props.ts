import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface HandleUpProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  yvalue: number;
}