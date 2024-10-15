import { Ipost } from './interfaces';

export interface Root {
  posts: Ipost[];
  total: number;
  skip: number;
  limit: number;
}
