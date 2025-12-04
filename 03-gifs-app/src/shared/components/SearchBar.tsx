import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
  placeholder?: string;
  onSearch: (query: string) => void;
}

export const SearchBar = ({ placeholder, onSearch }: Props) => {
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(query);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, onSearch]);

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder || "Buscar"}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};
