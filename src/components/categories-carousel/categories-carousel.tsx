import { ReactElement, useEffect, useState } from "react";
import style from "./categories-carousel.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/scss';
import axios from "axios";
import { cat } from "../../interfaces/cat";
import { Link } from "react-router-dom";

export default function CategoriesCarousel(): ReactElement {
  const [categories, setCategories] = useState<Array<cat>>([]);
  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get<Array<cat>>(
        "http://localhost:3001/categories"
      );
      setCategories(res.data);
    };
    getCategories();
  }, []);
  return (
    <section className={style.categories_carousel}>
      <Swiper spaceBetween={50} slidesPerView={2.5}>
        {categories.length &&
          categories.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={style.categories_carousel__item}>
                <figure className={style.categories_carousel__item__img}>
                  <img src={`./img/${item.img}`} alt={item.name} />
                </figure>
                <div className={style.categories_carousel__item__content}>
                  <h3 className={style.categories_carousel__item__title}>
                    {item.name}
                  </h3>
                  <p className={style.categories_carousel__item__text}>
                    {item.description}
                  </p>
                  <Link
                    className={style.categories_carousel__item__link}
                    to="/catalog"
                  >
                    Подробнее
                    <span
                      className={style.categories_carousel__item__link__icon}
                    >
                      &#8658;
                    </span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}
