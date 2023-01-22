import { CollabProps } from "./Collab.props";
import styles from './Collab.module.css';
import cn from 'classnames';
import { Htag } from "../Htag/Htag";
import { Divider } from "../Divider/Divider";
import { Button } from "../Button/Button";
import DownloadIcon from '../../helpers/icons/download.svg';

export const Collab = ({ className }: CollabProps): JSX.Element => {
  return (
    <div className={cn(styles.collab, className)}>
        <div className={styles.description}>
          <Htag tag='h4' className={styles.colored}>Сотрудничество</Htag>
          <Htag tag='h2' className={styles.header}>Давайте поговорим о сотрудничестве?</Htag>
        </div>
        <Divider />
        <div className={styles.buttonsContainer}>
          <Button appearance='lime' className={styles.cv}><DownloadIcon />Скачать CV</Button>
          <Button appearance='ghost' arrow={true} className={styles.hire}>Написать</Button>
        </div>
    </div>
  );
};