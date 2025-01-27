import { BaseModel } from "./base-model";

export interface Comments extends BaseModel  {
    name: string;
    img: string;
    text: string;
    rating: number;
  }