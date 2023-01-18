import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import LogoIcon from '../logo.svg';
import cn from 'classnames';
import { Button } from '../../components/Button/Button';
import Link from 'next/link';

export const Header = ({className, ...props }: HeaderProps): JSX.Element => {
    return(
        <header className={cn(styles.header, className)} {...props}>
          <LogoIcon className={styles.logo} />
          <div className={styles.menu}>
            <Link href="#" className={styles.link}>Домой</Link>
            <Link href="#" className={styles.link}>Обо мне</Link>
            <Link href="#" className={styles.link}>Портфолио</Link>
            <Link href="#" className={styles.link}>Контакты</Link>
          </div>
          <Button appearance='ghost' arrow={true} className={styles.download} >hello</Button>
        </header>
    );
};