import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface WorkProps extends DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>,HTMLAnchorElement> {
  link: string;
  src: string;
  title: string;
}