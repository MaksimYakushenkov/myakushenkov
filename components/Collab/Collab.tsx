import { CollabProps } from "./Collab.props";
import styles from './Collab.module.css';
import cn from 'classnames';
import { Htag } from "../Htag/Htag";
import { Divider } from "../Divider/Divider";
import { Button } from "../Button/Button";
import DownloadIcon from '../../helpers/icons/download.svg';
import { Coube } from "../Coube/Coube";

export const Collab = ({ className }: CollabProps): JSX.Element => {
  return (
    <div className={cn(styles.collab, className)} id='contacts'>
        <div className={styles.description}>
          <Htag tag='h4' className={styles.colored}>Сотрудничество</Htag>
          <Htag tag='h2' className={styles.header}>Давайте поговорим о сотрудничестве?</Htag>
        </div>
        <Divider className={styles.hr} />
        <div className={styles.buttonsContainer}>
          <Button appearance='lime' className={styles.cv}><a href='https://api.creativempire.ru/uploads/Yakushenkov_Maxim_web-developer_v3.pdf' target='_blank'><DownloadIcon />Скачать CV</a></Button>
          <Button appearance='ghost' arrow={true} className={styles.hire}>Написать</Button>
        </div>
        <Coube className={styles.bigCoube}/>
        <Coube className={styles.smallCoube}/>
    </div>
  );
};