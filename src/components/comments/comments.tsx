import { ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./comments.module.scss";
import clsx from "clsx";
import { Card, CardBody, User } from "@heroui/react";
import { useComments } from "../../data-access/comments/use-comments";

export default function Comments(): ReactElement {
  const comments = useComments();
  return (
    <section className={styles.comments}>
      <div className={clsx("container", styles.comments__inner)}>
        <h2 className={styles.comments__title}>Довольные клиенты</h2>
        <Swiper
          className={styles.comments__list}
          spaceBetween={50}
          slidesPerView={3}
        >
          {comments.length > 0 &&
            comments.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <Card
                    isPressable
                    classNames={{ body: styles.comments__item }}
                  >
                    <CardBody>
                      <div className={styles.comments__rating}>
                        <div className={styles.comments__rating__stars}>
                          {"☆".repeat(5)}
                        </div>
                        <div className={styles.comments__rating__stars}>
                          {item.rating > 0 && "★".repeat(item.rating)}
                        </div>
                      </div>
                      <div className={styles.comments__text}>{item.text}</div>
                      <User
                        avatarProps={{ src: `/img/${item.img}` }}
                        name={item.name}
                      />
                    </CardBody>
                  </Card>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
}
