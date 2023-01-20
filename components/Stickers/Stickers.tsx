import { StickersProps } from "./Stickers.props";
import styles from './Stickers.module.css';
import cn from 'classnames';
import { stickers } from "../../helpers/helpers";
import { Sticker } from "../Sticker/Sticker";

export const Stickers = ({ className }: StickersProps): JSX.Element => {
  return (
    <div className={cn(styles.stickers, className)}>
      <Sticker stickers={stickers} className={styles.top} />
      <Sticker stickers={stickers} className={styles.bottom} />
    </div>
  );
};