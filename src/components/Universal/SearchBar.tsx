import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import { SyntheticEvent } from "react";

const SearchBar = ({ onChange }: { onChange: FunctionStringCallback }) => {
  // put logic here
  const handleFormSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      query: { value: string };
    };
    const query: string = target.query.value;
    onChange(query);
  };

  return (
    <form id="search" onSubmit={handleFormSubmit} className="w-full">
      <div className="flex w-full flex-row space-x-4 rounded-full bg-secondary px-4 py-2 drop-shadow">
        <MagnifyingGlassIcon className="text-black h-6 w-6" />
        <input
          type="text"
          id="query"
          name="search"
          className="w-full truncate bg-secondary"
          placeholder="Search for anything..."
        />
      </div>
    </form>
  );
};
export default SearchBar;
