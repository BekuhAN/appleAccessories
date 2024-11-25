import React, { ReactElement } from "react";
import styles from "./promo.module.scss";
import PromoVideo from "../../assets/promo.mp4";

export default function Promo(): ReactElement {
  return (
    <section className={styles.promo}>
      <div className="container">
        <div className={styles.promo__inner}>
          <div className={styles.promo__content}>
            <h2 className={styles.promo__content__title}>
              Apple Watch series 10
            </h2>
            <p className={styles.promo__content__text}>
              Apple Watch 10 — новый взгляд на технологии и стиль. Мощные
              функции, безупречный дизайн и инновации, которые делают каждый
              момент вашей жизни еще лучше
            </p>
          </div>
          <video
            src={PromoVideo}
            autoPlay
            muted
            loop
            className={styles.promo__video}
          ></video>
        </div>
      </div>
    </section>
  );
}
