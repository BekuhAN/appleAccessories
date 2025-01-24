import { ReactElement } from "react";
import styles from "./footer.module.scss";
import { useNavigate } from "../../data-access/navigate/use-navigate";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareWhatsapp,
  faTelegram,
  faVk,
  faSquareOdnoklassniki,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer(): ReactElement {
  const navItems = useNavigate();
  return (
    <footer className={styles.footer}>
      <ul className={styles.footer__nav}>
        {navItems.length > 0 &&
          navItems.map((item) => (
            <li className={styles.footer__nav__item} key={item.id}>
              <Link className={styles.footer__nav__link} to={item.url}>
                {item.title}
              </Link>
            </li>
          ))}
      </ul>

      <div className={styles.footer__social}>
        <a
          href="https://www.whatsapp.com/"
          className={styles.footer__social__item}
        >
          <FontAwesomeIcon icon={faSquareWhatsapp} />
        </a>
        <a href="https://telegram.org/" className={styles.footer__social__item}>
          <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a href="https://vk.com/" className={styles.footer__social__item}>
          <FontAwesomeIcon icon={faVk} />
        </a>
        <a href="https://ok.ru/" className={styles.footer__social__item}>
          <FontAwesomeIcon icon={faSquareOdnoklassniki} />
        </a>
      </div>
      <div className={styles.footer__copy}>© Copyright 2024</div>
    </footer>
  );
}
