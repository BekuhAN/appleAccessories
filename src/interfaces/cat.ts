import { BaseModel } from "./base-model";

export interface cat extends BaseModel  {
    name: string;
    img: string;
    description: string;
  }