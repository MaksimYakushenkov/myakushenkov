import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Portfolio } from "../../interfaces/portfolio.interface";

export interface WorkProps extends DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>,HTMLAnchorElement> {
  link: string;
  src: string;
}