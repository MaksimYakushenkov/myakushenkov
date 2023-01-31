import { PointProps } from "./Point.props";
import styles from './Point.module.css';
import cn from 'classnames';


export const Point = ({ title, count, className }: PointProps): JSX.Element => {
  return (
    <div className={cn(styles.point, className)}>
      <p className={styles.count}>{count}</p>
      <p className={styles.title}>{title}</p>
    </div>
  );
};