import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  function search() {
    console.log("Now searching for:", searchTerm);
  }
  return (
    <div
      className="w-32 md:w-72 h-10 border border-neutral-300 focus-within:border-neutral-400 dark:border-neutral-600 dark:focus-within:border-neutral-400
       rounded-full md:rounded-xl flex items-center justify-between "
    >
      <input
        type="text"
        name="search"
        id="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="outline-0 w-full h-full indent-2 placeholder-neutral-400 rounded-l-xl focus:border-neutral-400"
        placeholder="Search"
      />
      <div
        onClick={search}
        className="border-l border-l-neutral-300 dark:border-l-neutral-700 h-full place-items-center rounded-r-xl
         place-content-center px-2 hover:bg-neutral-200 dark:hover:bg-neutral-800"
      >
        <Search className="text-neutral-800 dark:text-neutral-200" />
      </div>
    </div>
  );
};

export default SearchBar;
