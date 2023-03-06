import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { Header } from './Header/Header';
import { Page } from './Page/Page';
import { Footer } from './Footer/Footer';
import { AppContextInterface, AppContextProvider } from '../context/app.context';
import { HandleUp } from '../components/HandleUp/HandleUp';
import { useScrollY } from '../hooks/hooks';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const yvalue = useScrollY();
    return(
        <>
          <div className={styles.wrapper} >
            <Header className={styles.header}/>
            <Page className={styles.body}>
              {children}
            </Page>
            <Footer className={styles.footer}/>
          </div>
          <HandleUp yvalue={yvalue} />
        </>
    );
};


export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {

    return function withLayoutComponent(props: T): JSX.Element {

        return (
          <AppContextProvider>
            <Layout>
                <Component {...props} />
            </Layout>
          </AppContextProvider>
        );
    };
};