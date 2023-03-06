import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import { Ptag } from '../../components';
import { format } from 'date-fns';
import Link from 'next/link';
import { socailLinks } from '../../helpers/helpers';


export const Footer = ({className, ...props }: FooterProps): JSX.Element => {
    return(
        <footer className={cn(styles.footer, className)} {...props}>
          <Ptag className={styles.description}>Веб-разработка помогает мне ментально развиваться и насыщает жизненной энергией.</Ptag>
          <Ptag color='light' className={styles.copyright}>	
&#169; Maxim Yakushenkov {format(new Date(), 'yyyy')}. Все права защищены.</Ptag>
          <ul className={styles.links}>
            {socailLinks.map(link => <li key={link.href}><a href={link.href} target='_blank'>{link.title}</a></li>)}
          </ul>
        </footer>
    );
};