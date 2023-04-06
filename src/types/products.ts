import { User } from "./user";

export interface Product {
  id: number;
  product_name: string;
  description: string;
  stock: number;
  price: number;
  category: Category;
  category_id: number;
  likes: number | null;
  wish_count: number;
  review: Review[] | null;
  user: User | null;
  user_id: number;
}

export interface Category {
  id?: number;
  label?: string;
}

export interface Review {
  id?: number;
  user_id?: number;
  product_id?: number;
  description?: string;
}