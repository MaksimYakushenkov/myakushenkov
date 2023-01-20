import { TemplateProps } from "./Template.props";
import styles from './Template.module.css';
import cn from 'classnames';

export const Template = ({ className }: TemplateProps): JSX.Element => {
  return (
    <div className={cn(styles.template, className)}>

    </div>
  );
};