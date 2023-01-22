import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import { Ptag } from '../../components';
import { format } from 'date-fns';
import Link from 'next/link';


export const Footer = ({className, ...props }: FooterProps): JSX.Element => {
    return(
        <footer className={cn(styles.footer, className)} {...props}>
          <Ptag className={styles.description}>Working in development and design has given me a stronger sense of the extraordinary in my digital work.</Ptag>
          <Ptag color='light' className={styles.copyright}>	
&#169; Maxim Yakushenkov {format(new Date(), 'yyyy')}. Все права защищены.</Ptag>
          <ul className={styles.links}>
            <li><Link href='#'>Societe</Link></li>
            <li><Link href='#'>Societe</Link></li>
            <li><Link href='#'>Societe</Link></li>
            <li><Link href='#'>Societe</Link></li>
          </ul>
        </footer>
    );
};