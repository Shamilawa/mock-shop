import { SearchBarWrapper, SearchInput } from './styled';

interface ISearchBarProps {
  setSearhTerm: Function;
}

const SearchBar: React.FC<ISearchBarProps> = ({ setSearhTerm }) => {
  return (
    <SearchBarWrapper>
      <SearchInput
        placeholder="Input search text"
        size="large"
        onChange={(e) => setSearhTerm(e.target.value)}
      />
    </SearchBarWrapper>
  );
};

export default SearchBar;
