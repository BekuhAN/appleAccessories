import { BaseModel } from "./base-model";
import { ProductItem } from "./product";

export interface Category extends BaseModel  {
    name: string;
    img: string;
    description: string;
    products?: Array<ProductItem> ;
  }