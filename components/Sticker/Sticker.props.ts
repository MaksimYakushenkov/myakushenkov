import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface StickerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  stickers: string[];
  children?: ReactNode;
}