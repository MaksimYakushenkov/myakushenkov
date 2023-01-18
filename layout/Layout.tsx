import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import React, { FunctionComponent } from 'react';
import { Header } from './Header/Header';
import { Page } from './Page/Page';
import { Footer } from './Footer/Footer';

const Layout = ({ children }: LayoutProps): JSX.Element => {
    
    return(
        <div className={styles.wrapper} >
          <Header className={styles.header}/>
          <Page className={styles.body}>
            {children}
          </Page>
          <Footer className={styles.footer}/>
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};