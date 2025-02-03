import { FormEvent, ReactElement, useRef, useState } from "react";
import styles from "./contacts.module.scss";
import PageTitle from "../../components/page-title/page-title";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faLocationDot,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { Alert, Button, Form, Input, Textarea } from "@heroui/react";
import emailjs from "@emailjs/browser";

export default function Contacts(): ReactElement {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState({
    isError: false,
    text: "",
  });
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //hqvlamo357@ramvv.com
    setLoading(true);
    emailjs
      .sendForm("service_099qjgo", "template_3lh4a2u", formRef.current || "", {
        publicKey: "S1l_xUmzgej3DKyLo",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setLoading(false);
          setSuccess(true);
          e.currentTarget.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
          setError({ isError: true, text: error.text });
        }
      );
  };
  return (
    <main className={styles.contacts}>
      <PageTitle title="Контакты" link="/contacts" />
      <div className={clsx("container", styles.contacts__inner)}>
        <div className={styles.contacts__content}>
          <div className={styles.contacts__content__wrapper}>
            <h2 className={styles.contacts__content__title}>
              Связаться с нами
            </h2>
            <p className={styles.contacts__content__text}>
              Премиальные аксессуары для устройств, созданные для вашего
              удобства. Объединяем стиль, качество и современные технологии в
              каждой детали.
            </p>
            <ul className={styles.contacts__content__list}>
              <li className={styles.contacts__content__item}>
                <div className={styles.contacts__content__item__icon}>
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className={styles.contacts__content__item__text}>
                  <h4 className={styles.contacts__content__item__title}>
                    Адрес
                  </h4>
                  <p className={styles.contacts__content__item__description}>
                    Россия, Краснодар, Северная улица, 320
                  </p>
                </div>
                <div className={styles.contacts__content__item__icon}>
                  <FontAwesomeIcon icon={faMobileScreenButton} />
                </div>
                <div className={styles.contacts__content__item__text}>
                  <h4 className={styles.contacts__content__item__title}>
                    Телефон:
                  </h4>
                  <p className={styles.contacts__content__item__description}>
                    <a href="tel:+79999999999">+7 (999) 999-99-99</a>
                  </p>
                </div>
                <div className={styles.contacts__content__item__icon}>
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div className={styles.contacts__content__item__text}>
                  <h4 className={styles.contacts__content__item__title}>
                    Режим работы:
                  </h4>
                  <p className={styles.contacts__content__item__description}>
                    Пн-Пт: 9:00 - 18:00
                    <br />
                    Сб-Вс: 10:00 - 17:00
                  </p>
                </div>
                <div className={styles.contacts__content__item__icon}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className={styles.contacts__content__item__text}>
                  <h4 className={styles.contacts__content__item__title}>
                    Электронная почта:
                  </h4>
                  <p className={styles.contacts__content__item__description}>
                    <a href="mailto:4iX0w@example.com">4iX0w@example.com</a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.contacts__map}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A796749b952b64eb806058f1902e7d18d6406f417037ef360bb4650c48a02f923&amp;source=constructor"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>
        <div className={styles.contacts__form}>
          <h2 className={styles.contacts__form__title}>
            Отправьте нам сообщение
          </h2>

          <Form
            className="w-full flex gap-4 flex-row flex-wrap"
            validationBehavior="native"
            ref={formRef}
            onSubmit={sendEmail}
          >
            <Input
              classNames={{ base: "w-50 flex-1", inputWrapper: "h-50" }}
              isRequired
              errorMessage="Поле должно быть заполнено"
              label="Имя"
              labelPlacement="outside"
              name="contact_name"
              placeholder="Ваше имя"
              type="text"
              variant="bordered"
            />
            <Input
              classNames={{ base: "w-50 flex-1 ", inputWrapper: "h-50" }}
              isRequired
              errorMessage="Не верно введена электронная почта"
              label="Электронная почта"
              labelPlacement="outside"
              name="contact_email"
              placeholder="Ваша электронная почта"
              type="email"
              variant="bordered"
            />
            <Textarea
              className="w-full"
              label="Сообщение"
              labelPlacement="outside"
              placeholder="Ваше сообщение"
              variant="bordered"
              name="contact_text"
            />
            <Button isLoading={loading} type="submit" variant="ghost">
              Отправить
            </Button>
            {success && (
              <Alert color="success" title="Сообщение успешно отправилось!" />
            )}
            {error.isError && (
              <Alert
                color="danger"
                title={`Сообщение не отправилось... Ошибка { ${error.text} }`}
              />
            )}
          </Form>
        </div>
      </div>
    </main>
  );
}
