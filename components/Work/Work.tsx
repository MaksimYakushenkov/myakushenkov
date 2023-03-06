import { WorkProps } from './Work.props';
import styles from './Work.module.css';
import cn from 'classnames';
import { Ptag } from '../Ptag/Ptag';

export const Work = ({ title, src, link, className, ...props }: WorkProps): JSX.Element => {
    return(
      <a className={cn(styles.work, className)} target='_blank' href={link} key={title} {...props}>
        <img
          src={src}
          alt={title}
          />
        <div className={styles.workDescription}>
          <Ptag className={styles.link}>{title}</Ptag>
        </div>
      </a>
    );
};