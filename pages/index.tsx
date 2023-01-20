import { GetStaticProps } from 'next';
import { useState } from 'react';
import { Portfolio, Services } from '../components';
import { About } from '../components/About/About';
import { Stickers } from '../components/Stickers/Stickers';
import { withLayout } from '../layout/Layout';

function Home(windowSize): JSX.Element {

  return (
    <>
    <About />
    <Stickers />
    <Services />
    <Portfolio />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const windowSize = 0;
 
  return {
    props: {
      windowSize: windowSize,
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  windowSize: number;
}