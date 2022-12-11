import { STORE_API_URL } from '../Contants/Constant';

export const fetchProductData = async () => {
  return fetch(STORE_API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
