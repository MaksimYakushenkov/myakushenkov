import { ButtonProps } from "./Button.props";
import styles from './Button.module.css';
import ArrowIcon from './arrow.svg';
import { motion } from 'framer-motion';

//чтобы задать классы
import cn from 'classnames';

//чтобы задать дефолтное значение пропса, нужно прописать здесь props = value
export const Button = ({ appearance, arrow = false, children, className, ...props }: ButtonProps): JSX.Element => {
    return(
        <motion.button
        whileHover={{ scale: 1.05 }}
        className={cn(styles.button, className, {
            [styles.lime]: appearance == 'lime',
            [styles.ghost]: appearance == 'ghost'
        })}
        {...props}
        >
            {children}
            {arrow && <ArrowIcon className={styles.arrow} />}
            
        </motion.button>
    );
};