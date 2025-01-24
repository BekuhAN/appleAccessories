import React, { ReactElement } from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";
import Logo from "../../assets/logo.png";
import { useNavigate } from "../../data-access/navigate/use-navigate";
import Cart from "../cart/cart";
import Wishlist from "../wishlist/wishlist";

export default function Header(): ReactElement {
  const navItems = useNavigate();

  return (
    <header className={styles.header}>
      <div className={clsx("container", styles.header__inner)}>
        <ul className={styles.header__nav}>
          {navItems.length &&
            navItems.map((item) => (
              <li className={styles.header__nav__item} key={item.id}>
                <Link className={styles.header__nav__link} to={item.url}>
                  {item.title}
                </Link>
              </li>
            ))}
        </ul>
        <Link to="/" className={styles.header__logo}>
          <img src={Logo} alt="Logo" />
        </Link>
        <div className={styles.header__controls}>
          <div className={styles.header__controls__item}>
            <Wishlist />
          </div>
          <div className={styles.header__controls__item}>
            <Cart />
          </div>
        </div>
      </div>
    </header>
  );
}
