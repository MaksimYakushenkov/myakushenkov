import { HeaderProps } from './Header.props';
import Image from 'next/image';
import styles from './Header.module.css';
import LogoIcon from '../logo.svg';
import cn from 'classnames';
import { Button } from '../../components/Button/Button';
import Link from 'next/link';
import DownloadIcon from '../../helpers/icons/download.svg';
import Avatar from '../../helpers/icons/maksim_yakushenkov_web_developer.webp';
import { Htag, Ptag } from '../../components';

export const Header = ({className, ...props }: HeaderProps): JSX.Element => {
    return(
        <header className={cn(styles.header, className)} {...props}>
          <div className={styles.nav}>
            <LogoIcon className={styles.logo} />
            <div className={styles.menu}>
              <Link href="#" className={styles.link}>Домой</Link>
              <Link href="#" className={styles.link}>Обо мне</Link>
              <Link href="#" className={styles.link}>Портфолио</Link>
              <Link href="#" className={styles.link}>Контакты</Link>
            </div>
            <Button appearance='ghost' arrow={false} className={styles.download} ><DownloadIcon />Скачать CV</Button>
          </div>
          <div className={styles.description}>
            <Htag tag='h1' className={styles.title}>Максим Якушенков</Htag>
            <Ptag color='light'>Привет! Меня зовут Максим. Я веб-разработчик.<br/>Добро пожаловать на мой личный сайт! :)</Ptag>
            <Image src={Avatar} alt="Picture of the author" width={300} height={300} className={styles.avatar} />
          </div>
          
        </header>
    );
};