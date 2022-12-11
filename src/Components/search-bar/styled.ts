import styled from 'styled-components';
import { Input } from 'antd';

const { Search } = Input;

export const SearchBarWrapper = styled.div`
  margin: 16px 0;
  text-align: left;
`;

export const SearchInput = styled(Search)`
  padding: 8px 0;
  font-size: 16px;
  border-radius: none !important;

  .ant-input-lg {
    border-radius: 4px;
  }
`;
