import { IProducts } from '../post-list-page/types';

export interface IProductCardProps {
  products: IProducts[];
  searchTerm: string;
  loading: boolean;
}
