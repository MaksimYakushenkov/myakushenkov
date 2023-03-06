import styles from './HandleUp.module.css';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import TopIcon from './topArrow.svg';
import { HandleUpProps } from './HandleUp.props';

export const HandleUp = ({yvalue}: HandleUpProps): JSX.Element => {
  const controls = useAnimation();

  useEffect(() => {
    if(yvalue >= 140) {
      controls.start({
        opacity: 1
      });
    } else {
      controls.start({
        opacity: 0
      });
    }
  }, [controls,yvalue]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

    return(
        <motion.div
        className={styles.up}
        animate={controls}
        initial={{ opacity: 0 }}
        onClick={handleScrollToTop}
        >
          <TopIcon 
          />
        </motion.div>
    );
};