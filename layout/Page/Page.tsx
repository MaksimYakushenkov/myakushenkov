import { PageProps } from './Page.props';
import styles from './Page.module.css';
import cn from 'classnames';

export const Page = ({className, children, ...props }: PageProps): JSX.Element => {
    return(
        <main className={cn(styles.main, className)} {...props}>
          {children}
        </main>
    );
};