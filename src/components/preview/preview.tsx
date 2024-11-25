import clsx from "clsx";
import React, { ReactElement } from "react";
import styles from "./preview.module.scss";
import { Link } from "react-router-dom";

export default function Preview(): ReactElement {
  return (
    <section className={styles.preview}>
      <div className={clsx("container", styles.preview__inner)}>
        <div className={styles.preview__content}>
          <h2 className={styles.preview__content__title}>Apple аксессуары</h2>
          <p className={styles.preview__content__text}>
            Премиальные аксессуары для устройств Apple, созданные для вашего
            удобства. Объединяем стиль, качество и современные технологии в
            каждой детали.{" "}
          </p>
          <Link to="/catalog" className={styles.preview__content__btn}>
            Подробнее
          </Link>
        </div>
      </div>
    </section>
  );
}
