import { useState } from "react";

import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);

  const [previousTerms, setPreviousTerms] = useState<string[]>([
    "dragon ball z",
  ]);

  const handleTermClicked = (term: string) => {
    console.log(term);
  };

  const handleSearch = async (query: string) => {
    query = query.trim().toLowerCase();

    if (query.length === 0) return;

    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms.slice(0, 6)]);

    setGifs(await getGifsByQuery(query));
  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="GifsApp"
        description="Descubre y comparte tus gifs favoritos"
      />

      {/* Search */}
      <SearchBar placeholder="Buscar gifs" onSearch={handleSearch} />

      {/* Busquedas Previas */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Gifs */}
      <GifList gifs={gifs} />
    </>
  );
};
