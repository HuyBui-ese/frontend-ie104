import React from 'react';
import { Carousel, Button } from 'antd';
import styles from './Banner.module.css';
import banner from '../../assets/img/banner.png';
const Banner = () => (
  <Carousel autoplay>
    <div className={styles.bannerContainer}>
      <img src={ banner } alt="Banner 1" />
      <Button className={styles.buttonBuyNow} type="primary">Mua Ngay</Button>
    </div>
    <div className={styles.bannerContainer}>
      <img src={ banner } alt="Banner 2" />
      <Button className={styles.buttonBuyNow} type="primary">Mua Ngay</Button>
    </div>
  </Carousel>
);

export default Banner;
