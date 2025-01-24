import { useEffect, useState } from "react";
import { api } from "../api";
import { ProductItem } from "../../interfaces/product";

interface Params {
  category?: string;
  new?: boolean;
  popular?: boolean;
  oldPrice_gt?: number;
  _limit?: number;
}

export const useProduct = (params: Params) => {
  const [items, setItems] = useState<Array<ProductItem>>([]);
  useEffect(() => {
    const get = async () => {
      const items = await api<ProductItem>({ path: "products", params });
      setItems(items);
    };
    get();
  }, []);
  return items;
};
