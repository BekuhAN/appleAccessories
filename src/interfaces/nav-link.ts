import { BaseModel } from "./base-model";

export interface NavLink extends BaseModel  {
    title: string;
    url: string;
  }