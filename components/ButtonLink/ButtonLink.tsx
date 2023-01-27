import { ButtonLinkProps } from "./ButtonLink.props";
import styles from './ButtonLink.module.css';
import ArrowIcon from './arrow.svg';
import { motion } from 'framer-motion';

//чтобы задать классы
import cn from 'classnames';

//чтобы задать дефолтное значение пропса, нужно прописать здесь props = value
export const ButtonLink = ({ appearance, arrow = false, href, target = undefined, children, className, ...props }: ButtonLinkProps): JSX.Element => {
    return(
      <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.99 }}
      className={styles.wrapper}
      >
        <a
        className={cn(styles.button, className, {
            [styles.lime]: appearance == 'lime',
            [styles.ghost]: appearance == 'ghost'
        })}
        {...props}
        href={href}
        target={target}
        >
          
            {children}
            {arrow && <ArrowIcon className={styles.arrow} />}
        </a>
      </motion.div>
    );
};