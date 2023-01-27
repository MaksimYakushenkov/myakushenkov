import { CarouselProps } from "./Carousel.props";
import styles from './Carousel.module.css';
import cn from 'classnames';

export const Carousel = ({ className, children }: CarouselProps): JSX.Element => {
  let isDown = false;
  let startX;
  let scrollLeft;

  const mouseDown = (e) => {
    e.currentTarget.classList.add(styles.active);
    isDown = true;
    startX = e.pageX - e.currentTarget.offsetLeft;
    scrollLeft = e.currentTarget.scrollLeft;
  };

  const mouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const SCROLL_SPEED = 1;
    const walk = (x - startX) * SCROLL_SPEED;
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  const mouseUp = (e) => {
    isDown = false;
    e.currentTarget.classList.remove(styles.active);
  };

  const mouseLeave = (e) => {
    isDown = false;
    e.currentTarget.classList.remove(styles.active);
  };

  return (
    <div className={cn(styles.carousel, className)}
    onMouseDown={(e) => mouseDown(e)}
    onMouseMove={(e) => mouseMove(e)}
    onMouseUp={(e) => mouseUp(e)}
    onMouseLeave={(e) => mouseLeave(e)}
    >
    {children}
    </div>
  );
};