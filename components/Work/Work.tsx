import { WorkProps } from './Work.props';
import styles from './Work.module.css';
import cn from 'classnames';
import Image from 'next/image';

export const Work = ({ title, src, link, className, ...props }: WorkProps): JSX.Element => {
    return(
      <div className={cn(styles.work, className)} key={title} {...props}>
        <picture>
          <img
          src={src}
          alt={title}
          />
        </picture>
        <div className={styles.workDescription}>
          <a href={link} className={styles.link}>{title}</a>
        </div>
      </div>
    );
};