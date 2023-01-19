import { PtagProps } from "./Ptag.props";
import styles from './Ptag.module.css';
import cn from 'classnames';

export const Ptag = ({ color = 'white', className, children }: PtagProps): JSX.Element => {
    return(
      <p className={cn(styles.paragraph, {
        [styles.white]: color == 'white',
        [styles.light]: color == 'light'
      }, className)}>
        {children}
      </p>
    );
};