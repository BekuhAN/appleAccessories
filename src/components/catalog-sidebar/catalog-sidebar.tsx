import { ReactElement, useCallback } from "react";
import { useDispatch } from "react-redux";
import styles from "./catalog-sidebar.module.scss";
import {
  setActiveCategory,
  setPriceRange,
} from "../../features/catalog/catalog";
import { useCategories } from "../../data-access/categories/use-categories";
import { Slider } from "@heroui/react";
import { I18nProvider } from "@react-aria/i18n";
import { useProduct } from "../../data-access/product/use-product";
import _ from "lodash";

export default function CatalogSidebar(): ReactElement {
  const categoriesList = useCategories();
  const dispatch = useDispatch();
  const productSort = useProduct({ _sort: "-price" });

  const debouncedOnChange = useCallback(
    _.debounce((value) => {
      dispatch(setPriceRange(value));
    }, 500),
    []
  );

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__title}>
        <span>Категории</span>
      </div>
      <ul className={styles.sidebar__list}>
        <li
          className={styles.sidebar__list__item}
          onClick={() => {
            dispatch(setActiveCategory(0));
          }}
        >
          Все
        </li>
        {categoriesList.length > 0 &&
          categoriesList.map((item) => (
            <li
              key={item.id}
              className={styles.sidebar__list__item}
              onClick={() => {
                dispatch(setActiveCategory(item.id));
              }}
            >
              {item.name}
            </li>
          ))}
      </ul>

      <div className={styles.sidebar__title}>
        <span>Цена</span>
      </div>
      <div className={styles.sidebar__price}>
        {productSort.length > 0 && (
          <I18nProvider locale="ru">
            <Slider
              defaultValue={[0, productSort[0].price]}
              formatOptions={{ style: "currency", currency: "RUB" }}
              color="foreground"
              label="Цена:"
              maxValue={productSort[0].price}
              minValue={0}
              step={10}
              onChange={(value) => {
                debouncedOnChange(Array.isArray(value) ? value : [value]);
              }}
            />
          </I18nProvider>
        )}
      </div>
    </aside>
  );
}
