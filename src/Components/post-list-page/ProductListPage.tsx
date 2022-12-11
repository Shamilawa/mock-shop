import { useEffect, useState } from 'react';

import { STORE_API_URL } from '../../Contants/Constant';
import { IProducts } from './types';
import ProductCardList from '../product-card-list/ProductCardList';
import { ProductListPageTitle } from './styled';
import { PageWrapper } from '../../styled';
import SearchBar from '../search-bar/SearchBar';
import { fetchProductData } from '../../api/ProductApi';

const ProductListPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<IProducts[]>([]);
  const [searchTerm, setSearhTerm] = useState<string>('');

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetchProductData();
      setLoading(false);
      const productsData = await response.json();
      setProducts(productsData);
    };

    getProducts();
  }, []);

  return (
    <PageWrapper>
      <ProductListPageTitle>All the Products</ProductListPageTitle>
      <SearchBar setSearhTerm={setSearhTerm} />
      <ProductCardList
        products={products}
        searchTerm={searchTerm}
        loading={loading}
      />
      ;
    </PageWrapper>
  );
};

export default ProductListPage;
