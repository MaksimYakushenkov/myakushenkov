import { CoubeProps } from "./Coube.props";
import styles from './Coube.module.css';
import cn from 'classnames';
import CoubeIcon from '../../helpers/icons/coube.svg';

export const Coube = ({ className }: CoubeProps): JSX.Element => {
  return (
    <CoubeIcon className={cn(styles.coube, className)} />
  );
};