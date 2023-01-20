import { ServicesProps } from "./Services.props";
import styles from './Services.module.css';
import cn from 'classnames';
import { Htag, Ptag } from '../index';
import CoubeIcon from '../../helpers/icons/coube.svg';

export const Services = ({ className }: ServicesProps): JSX.Element => {
  return (
    <div className={cn(styles.services, className)}>
        <Htag tag='h4' className={styles.colored}>Стек технологий</Htag>
        <Htag tag='h2' >Я могу добиться результатов, которые превзойдут ваши ожидания.</Htag>
        <div className={styles.frontend}>
          <Htag tag='h3' className={styles.header}><span>01.</span>Frontend</Htag>
          <Ptag color='light' className={styles.description}>Design that is unique, functional, and beautiful is at the heart of everything we create. We're obsessed with user experience, designing not for ourselves but for real people with real problems.</Ptag>
          <table className={styles.list}>
            <thead>
            </thead>
            <tbody>
              <tr>
              <td>Text</td>
              <td>Text</td>
              <td>Text</td>
              <td>Text</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.backend}>
          <Htag tag='h3' className={styles.headerBackend}><span>02.</span>Backend</Htag>
          <Ptag color='light' className={styles.descriptionBackend}>Create, learn, iterate, and iterate. We understand how to extract logic and order from chaos. It's how we develop products that go beyond the forefront and become the next.</Ptag>
          <table className={styles.list}>
            <thead>
            </thead>
            <tbody>
              <tr>
              <td>Text</td>
              <td>Text</td>
              <td>Text</td>
              <td>Text</td>
              </tr>
            </tbody>
          </table>
          <CoubeIcon className={styles.thirdCoube}/>
        </div>
        <CoubeIcon className={styles.bigCoube}/>
        <CoubeIcon className={styles.smallCoube}/>
    </div>
  );
};