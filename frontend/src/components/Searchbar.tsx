import searchIcon from "../assets/icons/search.svg";

interface searchBarProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

const Searchbar = ({ searchTerm, setSearchTerm }: searchBarProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-container">
      <label htmlFor="search-field" className="visually-hidden">
        Search
      </label>
      <img src={searchIcon} alt="Search icon" />
      <input
        placeholder="Find your coffee..."
        name="search-field"
        id="search-field"
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Searchbar;
