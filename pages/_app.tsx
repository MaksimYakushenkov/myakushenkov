import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import ym from 'react-yandex-metrika';
import { YMInitializer } from 'react-yandex-metrika';

Router.events.on('routeChangeComplete', (url: string) => {
  if(typeof window !=='undefined') {
    ym('hit', url);
  }
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function App({ Component, pageProps, router }: AppProps): JSX.Element {

  return <>
  <Head>
    <title>Максим Якушенков | Full Stack Web-Developer</title>
    <meta name='description' content='Меня зовут Максим, я веб-разработчик с опытом работы 3+ лет. Нахожусь в поисках работы на позицию full stack web-developer / middle web-developer. Уверен, что смогу усилить вашу компанию, ведь мне нравится работать над интересными и значимыми проектами, которыми я могу гордиться, и я всегда стремлюсь создавать чистые, адаптивные интерфейсы, которые плавно анимируются.' />
    <meta name='keywords' content='веб-разработчик, web-developer, resume, cv, web, react, next, резюме, поиск работы' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <link rel='preconnect' href='https://mc.yandex.ru'/>
    <link rel='icon' href='/favicon.ico' />
    <meta property='og:url' content='https://myakushenkov.ru/' />
    <meta property='og:locale' content='ru_RU' />
    <meta property='og:image' content='https://myakushenkov.ru/OG_IMAGE.webp' />
  </Head>
  <YMInitializer
    accounts={[]} //id счетиков
    options={{ webvisor: false, defer: true }} // вкл/выкл вебвизор (нагрузка на сервер), defer - откладывем загрузку метрики
    version='2' // версия счетчика
  />
  <Component {...pageProps} />
  </>;
}
