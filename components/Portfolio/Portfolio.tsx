import { PortfolioProps } from "./Portfolio.props";
import styles from './Portfolio.module.css';
import cn from 'classnames';
import { ButtonLink, Htag } from "../index";
import { Ptag } from "../Ptag/Ptag";
import { Sticker } from "../Sticker/Sticker";
import { portfolios, stickers } from "../../helpers/helpers";
import { Carousel } from "../Carousel/Carousel";
import { Work } from "../Work/Work";

/* --IMPORT SLIDER WITH STYLES */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInnerWidth } from "../../hooks/hooks";
import { createRef, useRef } from "react";

export const Portfolio = ({ className }: PortfolioProps): JSX.Element => {

  const innerWidth = useInnerWidth();

  /* --IMPORT SLIDER WITH STYLES!!!-- */
  const settings = innerWidth > 768 ? { 
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
  } : 
  { 
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  
  return (
    <div className={cn(styles.portfolio, className)} id='works'>
      <div className={styles.header}>
        <div>
          <Htag tag='h4' className={styles.colored}>Портфолио</Htag>
          <Htag tag='h2'>Лучшие работы <br/>2020 - 2023</Htag>
        </div>
        <div className={styles.description}>
          <Ptag>Ознакомьтесь с полным списком моих работ здесь:</Ptag>
          <ButtonLink appearance='ghost' arrow={true} className={styles.button} href='https://github.com/MaksimYakushenkov' target='_blank'>Посмотреть все</ButtonLink>
        </div>
      </div>
      <Slider {...settings} className={styles.slider}>
          {
            portfolios.map((portfolio) => 
            <div key={portfolio.link}>
              <Work key={portfolio.link} title={portfolio.title} link={portfolio.link} src={portfolio.image} />
            </div>
            )
          }
        </Slider>
      <div className={styles.stickers}>
        <Sticker stickers={stickers} className={styles.sticker} />
      </div>
    </div>
  );
};