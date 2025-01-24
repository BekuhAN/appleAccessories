import React, { ReactElement } from "react";
import styles from "./banner.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";

export default function Banner(): ReactElement {
  return (
    <section className={styles.banner}>
      <div className={clsx("container", styles.banner__inner)}>
        <div className={styles.banner__content}>
          <h2 className={styles.banner__content__title}>
            Оставайтесь на связи, оставайтесь активными
          </h2>
          <p className={styles.banner__content__text}>
            Открой новые грани звука с нашими наушниками — идеальный баланс
            качества, удобства и стиля! Погрузись в мир музыки с нашими
            наушниками: кристально чистый звук, непревзойдённый комфорт и
            безупречный стиль!
          </p>
          <Link to="/catalog" className={styles.banner__content__btn}>
            Каталог
          </Link>
        </div>
      </div>
    </section>
  );
}
