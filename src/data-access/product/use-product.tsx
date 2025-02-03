import { useEffect, useMemo, useState } from "react";
import { api } from "../api";
import { ProductItem } from "../../interfaces/product";

interface Params {
  new?: boolean;
  popular?: boolean;
  oldPrice_gt?: number;
  price_gte?: number;
  price_lte?: number;
  _limit?: number;
  categoryId?: number;
  _sort?: string;
}

export const useProduct = (params: Params) => {
  const [items, setItems] = useState<Array<ProductItem>>([]);
  const memoizedParams = useMemo(() => params, [JSON.stringify(params)]);
  useEffect(() => {
    const get = async () => {
      const items = await api<ProductItem>({
        path: "products",
        params: memoizedParams,
      });
      setItems(items);
    };
    get();
  }, [memoizedParams]);
  return items;
};
