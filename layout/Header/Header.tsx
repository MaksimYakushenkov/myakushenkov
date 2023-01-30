import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';
import Link from 'next/link';
import DownloadIcon from '../../helpers/icons/download.svg';
import TgIcon from '../../helpers/icons/tg.svg';
import MailIcon from '../../helpers/icons/mail.svg';
import HomeIcon from '../../helpers/icons/home.svg';
import AboutIcon from '../../helpers/icons/about.svg';
import PortfolioIcon from '../../helpers/icons/portfolio.svg';
import CollabIcon from '../../helpers/icons/collab.svg';
import { ButtonLink, Htag, Ptag } from '../../components';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
    return(
        <header className={cn(styles.header, className)} {...props}>
          <div className={styles.nav}>
            <div className={styles.contacts}>
              <a href='https://t.me/yakushenkovm' target='_blank'><TgIcon className={styles.tg}/></a>
              <a href="mailto:maxim@yakushenkov.ru"><MailIcon className={styles.mail}/></a>
            </div>
            <div className={styles.menu}>
              <Link href="/" className={styles.link}>Домой</Link>
              <a href="#about" className={styles.link}>Обо мне</a>
              <a href="#works" className={styles.link}>Портфолио</a>
              <a href="#collab" className={styles.link}>Сотрудничество</a>
            </div>
            <ButtonLink appearance='ghost' arrow={false} className={styles.download} href='https://api.creativempire.ru/uploads/Yakushenkov_Maxim_web-developer_v3.pdf' target='_blank'><DownloadIcon />Скачать CV</ButtonLink>
          </div>
          <div className={styles.description}>
            <div className={styles.container}>
              <Htag tag='h1' className={styles.title}>Максим Якушенков</Htag>
              <Ptag color='light'>Привет! Меня зовут Максим. Я веб-разработчик. Добро пожаловать на мой личный сайт! :)</Ptag>
            </div>
            <picture className={styles.avatrPicture}>
              <img
              src='/images/maksim_yakushenkov_web_developer.webp'
              alt="Picture of the author"
              className={styles.avatar}
            />
            </picture>
          </div>
          <div className={styles.mobileMenu}>
              <Link href="/" className={styles.link}><HomeIcon />Домой</Link>
              <a href="#about" className={styles.link}><AboutIcon />Обо мне</a>
              <a href="#works" className={styles.link}><PortfolioIcon />Портфолио</a>
              <a href="#collab" className={styles.link}><CollabIcon />Сотрудничество</a>
          </div>
        </header>
    );
};