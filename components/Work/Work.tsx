import { WorkProps } from './Work.props';
import styles from './Work.module.css';
import cn from 'classnames';
import { Ptag } from '../Ptag/Ptag';
import Image from 'next/image';

export const Work = ({ title, src, link, className, ...props }: WorkProps): JSX.Element => {
    return(
      <a className={cn(styles.work, className)} target='_blank' href={link} key={title} {...props}>
        <Image
          src={src}
          alt={title}
          width={573}
          height={385}
          />
        <div className={styles.workDescription}>
          <Ptag className={styles.link}>{title}</Ptag>
        </div>
      </a>
    );
};