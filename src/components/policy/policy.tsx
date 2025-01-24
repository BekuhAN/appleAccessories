import { ReactElement } from "react";
import styles from "./policy.module.scss";
import { Parallax } from "react-parallax";
import bgImage from "../../assets/img/bg-policy.webp";
import clsx from "clsx";
import policyOne from "../../assets/img/policy-1.png";
import policyTwo from "../../assets/img/policy-2.png";
import policyThree from "../../assets/img/policy-3.png";
import policyFour from "../../assets/img/policy-4.png";

export default function Policy(): ReactElement {
  return (
    <section className={styles.policy}>
      <Parallax blur={{ min: -15, max: 15 }} bgImage={bgImage} strength={-200}>
        <div className={clsx("container", styles.policy__inner)}>
          <div className={styles.policy__list}>
            <div className={styles.policy__item}>
              <div className={styles.policy__item__icon}>
                <img src={policyOne} alt="policy-1" />
              </div>
              <h4 className={styles.policy__item__title}>
                Бесплатная доставка
              </h4>
              <p className={styles.policy__item__text}>С 2 000 рублей</p>
            </div>
            <div className={styles.policy__item}>
              <div className={styles.policy__item__icon}>
                <img src={policyTwo} alt="policy-2" />
              </div>
              <h4 className={styles.policy__item__title}>
                Гарантийные платежи
              </h4>
              <p className={styles.policy__item__text}>
                Рассрочка до 12 месяцев
              </p>
            </div>
            <div className={styles.policy__item}>
              <div className={styles.policy__item__icon}>
                <img src={policyThree} alt="policy-3" />
              </div>
              <h4 className={styles.policy__item__title}>
                Возврат в течение 14 дней
              </h4>
              <p className={styles.policy__item__text}>
                Покупайте с уверенностью
              </p>
            </div>
            <div className={styles.policy__item}>
              <div className={styles.policy__item__icon}>
                <img src={policyFour} alt="policy-4" />
              </div>
              <h4 className={styles.policy__item__title}>Поддержка 24/7</h4>
              <p className={styles.policy__item__text}>Доставка на дом</p>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
}
