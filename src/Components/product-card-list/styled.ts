import styled from 'styled-components';

export const SkeletonWrapper = styled.div`
  padding: 0 32px;
`;

export const ProductCardGridContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 24px;
  justify-content: space-between;
`;

export const ProductCardWrapper = styled.div`
  border: 1px solid lightgrey;
  border-radius: 4px;
  padding: 16px;
  position: relative;
`;

export const ProductRating = styled.div`
  background: green;
  display: inline;
  padding: 2px 8px;
  border-radius: 8px;
  font-size: 12px;
  color: white;
  position: absolute;
  right: 5%;
  top: 3%;
  z-index: 1;
`;

export const ProductImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;
  transition: 0.2s ease-in-out;

  &:hover {
    scale: 1.02;
    transition: 0.1s ease-in-out;
  }
`;

export const ProductTitleAndPriceFlex = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
  justify-content: space-between;
`;

export const ProductTitle = styled.h2`
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const ProductPriceWrapper = styled.p`
  font-size: 14px;
  align-self: flex-start;
`;

export const ProductDesc = styled.p`
  color: gray;
  text-align: left;
  margin-bottom: 0;
  font-size: 13px;
`;
