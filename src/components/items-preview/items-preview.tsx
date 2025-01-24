import { ReactElement } from "react";
import { Tabs, Tab } from "@heroui/react";
import styles from "./items-preview.module.scss";
import { useProduct } from "../../data-access/product/use-product";
import Product from "../product/product";
import { Link } from "react-router-dom";

export default function ItemsPreview(): ReactElement {
  const itemsNew = useProduct({ new: true, _limit: 8 });
  const itemsPopular = useProduct({ popular: true, _limit: 8 });
  const itemsSale = useProduct({ oldPrice_gt: 0, _limit: 8 });

  return (
    <section className={styles.items_preview}>
      <div className="container">
        <div className={styles.items_preview__tabs}>
          <Tabs
            aria-label="Options"
            variant="underlined"
            size="lg"
            classNames={{
              base: "w-full justify-center items-center gap-500",
              tabList: styles.items_preview__tabs__list,
              tabContent: styles.items_preview__tabs__title,
              panel: "grid grid-cols-4 gap-4",
            }}
          >
            <Tab key="new" title="Новое">
              {itemsNew.length &&
                itemsNew.map((item) => <Product item={item}></Product>)}
            </Tab>
            <Tab key="popular" title="Популярное">
              {itemsPopular.length &&
                itemsPopular.map((item) => <Product item={item}></Product>)}
            </Tab>
            <Tab key="sale" title="Акция">
              {itemsSale.length &&
                itemsSale.map((item) => <Product item={item}></Product>)}
            </Tab>
          </Tabs>
          <Link to="/catalog" className={styles.items_preview__tabs__btn}>
            Показать все
          </Link>
        </div>
      </div>
    </section>
  );
}
