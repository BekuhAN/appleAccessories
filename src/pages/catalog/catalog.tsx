import { ReactElement } from "react";
import styles from "./catalog.module.scss";
import PageTitle from "../../components/page-title/page-title";

export default function Catalog(): ReactElement {
  return (
    <main className={styles.catalog}>
      <PageTitle title="Каталог" link="/catalog" />
      <div className={"container"}></div>
    </main>
  );
}
