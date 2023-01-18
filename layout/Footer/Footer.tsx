import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import LogoIcon from '../logo.svg';
import cn from 'classnames';

export const Footer = ({className, ...props }: FooterProps): JSX.Element => {
    return(
        <footer className={cn(styles.footer, className)} {...props}>
         
        </footer>
    );
};