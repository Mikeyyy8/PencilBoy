import { Filter } from "lucide-react"
import SearchBar from "./SearchBar"
import Categories from "./Categories"

const TopBar = () => {
  return (
    <div className="h-15 flex items-center px-5 lg:px-15 justify-between border-b-neutral-300 dark:border-b-neutral-600 border-b">
        <div>Categories</div>
        <SearchBar />
        <div className="flex gap-2 dark:text-neutral-50 text-neutral-900"><Filter />
          <span>Filter</span>
        </div>
    </div>
  )
}

// there should be a sortby button and a filter button, and somewhere you can choose categories

export default TopBar