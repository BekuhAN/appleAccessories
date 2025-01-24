import { ReactElement } from "react";
import styles from "./story.module.scss";
import clsx from "clsx";
import storyImageFirst from "../../assets/img/story-1.jpg";
import storyImageSecond from "../../assets/img/story-2.webp";

export default function Story(): ReactElement {
  return (
    <section className={styles.story}>
      <div className={clsx("container", styles.story__wrapper)}>
        <div className={styles.story__content}>
          <h2 className={styles.story__content__title}>Наша история</h2>
          <h3 className={styles.story__content__subtitle}>
            От идеи до каждого вашего устройства
          </h3>
          <p className={styles.story__content__text}>
            Наша история началась с простой идеи — сделать использование
            электроники удобнее. Мы объединили страсть к технологиям и внимание
            к деталям, чтобы создать аксессуары, которые делают жизнь проще. С
            самого начала мы ставили качество и надежность в основу каждого
            продукта. Сегодня мы гордимся тем, что помогаем тысячам людей
            получать максимум от своих устройств. И это только начало нашего
            пути.
          </p>
        </div>
        <div className={styles.story__img}>
          <img src={storyImageFirst} />
        </div>
        <div className={styles.story__img}>
          <img src={storyImageSecond} />
        </div>
        <div className={styles.story__content}>
          <h2 className={styles.story__content__title}>Кто мы?</h2>
          <h3 className={styles.story__content__subtitle}>
            Команда, предлагающая умные решения для вашего комфорта
          </h3>
          <p className={styles.story__content__text}>
            Мы — команда, которая увлечена технологиями и инновациями. Наша
            миссия — создавать аксессуары, которые делают использование
            электроники проще и удобнее. Мы ценим качество, стиль и
            функциональность, воплощая эти ценности в каждом продукте. Каждый
            день мы работаем над тем, чтобы ваши устройства приносили еще больше
            радости и пользы. Вместе с вами мы движемся к новым высотам!
          </p>
        </div>
      </div>
    </section>
  );
}
