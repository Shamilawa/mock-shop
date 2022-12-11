import { Skeleton } from 'antd';

import { IProductCardProps } from './types';
import { IProducts } from '../post-list-page/types';
import {
  SkeletonWrapper,
  ProductCardWrapper,
  ProductRating,
  ProductCardGridContainer,
  ProductImage,
  ProductTitle,
  ProductPriceWrapper,
  ProductDesc,
  ProductTitleAndPriceFlex
} from './styled';
import { PRODUCT_CARD_DESCRIPTION_WIDTH } from '../../Contants/Constant';

const ProductCardList: React.FC<IProductCardProps> = ({
  products,
  searchTerm,
  loading
}) => {
  return (
    <>
      {loading ? (
        <SkeletonWrapper>
          <Skeleton active loading />
        </SkeletonWrapper>
      ) : (
        <ProductCardGridContainer>
          {products
            .filter((products: IProducts) => {
              if (searchTerm === '') {
                return products;
              } else if (
                products.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return products;
              }
            })
            .map((product: IProducts) => {
              return (
                <ProductCardWrapper>
                  <ProductRating>{product.rating.rate}</ProductRating>
                  <ProductImage src={product.image} alt={product.title} />
                  <ProductTitleAndPriceFlex>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPriceWrapper>${product.price}</ProductPriceWrapper>
                  </ProductTitleAndPriceFlex>
                  <ProductDesc>
                    {product.description.substr(
                      0,
                      PRODUCT_CARD_DESCRIPTION_WIDTH
                    )}
                  </ProductDesc>
                </ProductCardWrapper>
              );
            })}
        </ProductCardGridContainer>
      )}
    </>
  );
};

export default ProductCardList;
