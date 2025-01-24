import React, { ReactElement } from "react";
import styles from "./page-title.module.scss";
import { Parallax } from "react-parallax";
import bgImage from "../../assets/img/bg-title.webp";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";

interface Props {
  title: string;
  link: string;
}

export default function PageTitle({ title, link }: Props): ReactElement {
  return (
    <Parallax blur={{ min: -15, max: 15 }} bgImage={bgImage} strength={-200}>
      <section className={styles.page_title}>
        <h1 className={styles.page_title__title}>{title}</h1>
        <Breadcrumbs
          size="lg"
          classNames={{ base: styles.page_title__breadcrumb }}
        >
          <BreadcrumbItem
            classNames={{ item: styles.page_title__breadcrumb__item }}
            href="/"
          >
            Главная
          </BreadcrumbItem>
          <BreadcrumbItem
            classNames={{ item: styles.page_title__breadcrumb__item }}
            href={link}
          >
            {title}
          </BreadcrumbItem>
        </Breadcrumbs>
      </section>
    </Parallax>
  );
}
