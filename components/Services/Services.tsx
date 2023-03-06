import { ServicesProps } from "./Services.props";
import styles from './Services.module.css';
import cn from 'classnames';
import { Htag, Ptag } from '../index';
import CoubeIcon from '../../helpers/icons/coube.svg';
import { frontendStack, backendStack } from "../../helpers/helpers";

export const Services = ({ className }: ServicesProps): JSX.Element => {
  return (
    <div className={cn(styles.services, className)}>
        <Htag tag='h4' className={styles.colored}>Стек технологий</Htag>
        <Htag tag='h2' >Развиваюсь в full-stack направлении</Htag>
        <div className={styles.frontend}>
          <Htag tag='h3' className={styles.header}><span>01.</span>Frontend</Htag>
          <Ptag color='light' className={styles.description}>Уникальный, функциональный и красивый дизайн лежит в основе всего, что я создаю. Я одержим пользовательским опытом, поэтому разрабатываю не для себя, а, в первую очередь, для <strong>реальных</strong> людей с <strong>реальными</strong> «болями» ЦА.</Ptag>
          <table className={styles.list}>
            <thead>
            </thead>
            <tbody>
              <tr>
              {frontendStack.map(v => <td key={v}>{v}</td>)}
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.backend}>
          <Htag tag='h3' className={styles.headerBackend}><span>02.</span>Backend</Htag>
          <Ptag color='light' className={styles.descriptionBackend}>Пишу собственное REST API, разворачиваю сервер, настраиваю и запускаю полноценный проект с собственной панелью управления.</Ptag>
          <table className={styles.list}>
            <thead>
            </thead>
            <tbody>
              <tr>
              {backendStack.map(v => <td key={v}>{v}</td>)}
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