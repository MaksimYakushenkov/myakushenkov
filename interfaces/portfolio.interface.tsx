import { DetailedHTMLProps, HTMLAttributes, ImgHTMLAttributes } from "react";

export interface ImageType extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
}

export interface Portfolio extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  link: string;
  src: ImageType;
}