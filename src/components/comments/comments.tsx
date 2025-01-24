import { ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./comments.module.scss";
import clsx from "clsx";
import { Card, CardBody, User } from "@heroui/react";

export default function Comments(): ReactElement {
  return (
    <section className={styles.comments}>
      <div className={clsx("container", styles.comments__inner)}>
        <h2 className={styles.comments__title}>Довольные клиенты</h2>
        <Swiper
          className={styles.comments__list}
          spaceBetween={50}
          slidesPerView={3}
        >
          <SwiperSlide>
            <Card isPressable>
              <CardBody>
                <div className={styles.comments__rating}></div>
                <div className={styles.comments__text}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sunt, mollitia?
                </div>
                <div className={styles.comments__author}>
                  <User avatarProps={{}} name="name" />
                </div>
              </CardBody>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card isPressable>
              <CardBody>
                <div className={styles.comments__rating}></div>
                <div className={styles.comments__text}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sunt, mollitia?
                </div>
                <div className={styles.comments__author}>
                  <User avatarProps={{}} name="name" />
                </div>
              </CardBody>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card isPressable>
              <CardBody>
                <div className={styles.comments__rating}></div>
                <div className={styles.comments__text}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sunt, mollitia?
                </div>
                <div className={styles.comments__author}>
                  <User avatarProps={{}} name="name" />
                </div>
              </CardBody>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card isPressable>
              <CardBody>
                <div className={styles.comments__rating}></div>
                <div className={styles.comments__text}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sunt, mollitia?
                </div>
                <div className={styles.comments__author}>
                  <User avatarProps={{}} name="name" />
                </div>
              </CardBody>
            </Card>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
