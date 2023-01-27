import { Portfolio } from "../../interfaces/portfolio.interface";
import { StaticImageData } from "next/image";

export interface WorkProps extends Portfolio {
  src: StaticImageData;
}