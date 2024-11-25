import React, { ReactElement, useEffect, useState } from "react";
import styles from "./header.module.scss";
import axios from "axios";
import { navLink } from "../../interfaces/nav-link";
import { Link } from "react-router-dom";
import clsx from "clsx";
import Logo from "../../assets/logo.webp";

export default function Header(): ReactElement {
  const [nav, setNav] = useState<Array<navLink>>([]);

  useEffect(() => {
    const getNav = async () => {
      const res = await axios.get<Array<navLink>>("http://localhost:3001/nav");
      setNav(res.data);
    };
    getNav();
  }, []);

  return (
    <header className={styles.header}>
      <div className={clsx("container", styles.header__inner)}>
        <ul className={styles.header__nav}>
          {nav.length &&
            nav.map((item) => (
              <li className={styles.header__nav__item}>
                <Link
                  className={styles.header__nav__link}
                  to={item.url}
                  key={item.id}
                >
                  {item.title}
                </Link>
              </li>
            ))}
        </ul>
        <Link to="/" className={styles.header__logo}>
          <img src={Logo} alt="Logo" />
        </Link>
        <div className={styles.header__controls}>
          <div className={styles.header__controls__item}>Wishlist</div>
          <div className={styles.header__controls__item}>Cart</div>
        </div>
      </div>
    </header>
  );
}
