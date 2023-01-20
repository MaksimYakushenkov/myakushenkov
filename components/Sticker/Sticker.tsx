import { StickerProps } from "./Sticker.props";
import styles from './Sticker.module.css';
import cn from 'classnames';

export const Sticker = ({ stickers, className }: StickerProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sticker)}>
      {stickers && stickers.map((sticker, index) => <span key={index}>{sticker}</span>)}
    </div>
  );
};