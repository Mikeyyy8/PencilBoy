import { useEffect, useState } from "react";
import { useProductStore } from "../../store/useProductStore.js";
//Icons
import { Search } from "lucide-react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { searchProducts } = useProductStore();

  useEffect(() => {
    if (!query) return;
    const timeout = setTimeout(() => {
      searchProducts(query); // call zustand action
    }, 500);
    return () => clearTimeout(timeout);
  }, [query, searchProducts]);

  return (
    <div
      className="w-32 md:w-72 h-10 border border-neutral-300 focus-within:border-neutral-400 dark:border-neutral-600 dark:focus-within:border-neutral-400
       rounded-full md:rounded-xl flex items-center justify-between "
    >
      <input
        type="text"
        name="search"
        id="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="outline-0 w-full h-full indent-2 placeholder-neutral-400 rounded-l-xl focus:border-neutral-400"
        placeholder="Search"
      />
      <div
        // onClick={search}
        className="border-l border-l-neutral-300 dark:border-l-neutral-700 h-full place-items-center rounded-r-xl
         place-content-center px-2 hover:bg-neutral-200 dark:hover:bg-neutral-800"
      >
        <Search className="text-neutral-800 dark:text-neutral-200" />
      </div>
    </div>
  );
};

export default SearchBar;
