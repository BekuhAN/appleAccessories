import { BaseModel } from "./base-model";
import { infoItem } from './info-item';

export interface ProductItem extends BaseModel  {
    name: string;
    img: string;
    price: number,
    oldPrice: number,
    new: boolean,
    popular: boolean,
    category: number,
    info: Array<infoItem>
  }