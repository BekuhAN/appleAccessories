import { ReactElement, useEffect, useState } from "react";
import Product from "../product/product";
import { useProduct } from "../../data-access/product/use-product";
import { useSelector } from "react-redux";
import {
  getActiveCategory,
  getPriceRange,
} from "../../features/catalog/catalog";
import styles from "./catalog-list.module.scss";
import { Button, Select, SelectItem } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

export default function CatalogList(): ReactElement {
  const activeCategory = useSelector(getActiveCategory);
  const priceRange = useSelector(getPriceRange);
  const [sort, setSort] = useState("");
  const [limit, setLimit] = useState(9);
  const listCount = useProduct({
    categoryId: activeCategory > 0 ? activeCategory : undefined,
    price_lte: priceRange[1],
    price_gte: priceRange[0],
  }).length;
  const list = useProduct({
    categoryId: activeCategory > 0 ? activeCategory : undefined,
    _limit: limit,
    price_lte: priceRange[1],
    price_gte: priceRange[0],
    _sort: sort.length > 0 ? sort : undefined,
  });
  useEffect(() => {
    setLimit(9);
    setSort("");
  }, [activeCategory]);
  const filters = [
    { key: "price", label: "Цена по возрастанию" },
    { key: "-price", label: "Цена по убыварнию" },
    { key: "name", label: "Имя по возрастанию" },
    { key: "-name", label: "Имя по убыванию" },
  ];
  return (
    <div className={styles.catalog_list}>
      <div className={styles.catalog_list__filters}>
        <Select
          className="max-w-xs"
          label="Сортировка"
          placeholder="Выберите фильтр"
          startContent={<FontAwesomeIcon icon={faFilter} />}
          selectedKeys={[sort.length > 0 ? sort : "all"]}
        >
          {filters.map((filter) => (
            <SelectItem key={filter.key} onPress={() => setSort(filter.key)}>
              {filter.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className={styles.catalog_list__wrapper}>
        {list.length > 0 &&
          list.map((item) => <Product item={item} key={item.id} />)}
      </div>
      {list.length === 0 && (
        <div className={styles.catalog_list__empty}>Ничего не найдено</div>
      )}
      <div className={styles.catalog_list__button}>
        {limit <= listCount && (
          <Button variant="bordered" onPress={() => setLimit(limit + 9)}>
            Показать еще
          </Button>
        )}
      </div>
    </div>
  );
}
