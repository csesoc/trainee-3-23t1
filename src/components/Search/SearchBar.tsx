// SearchBar Component
const SearchBar = ({ onSubmit }: { onSubmit: FunctionStringCallback }) => {
  const handleFormSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      query: { value: string };
    };
    const query: string = target.query.value;
    onSubmit(query);
  };

  return (
    <div>
      <form id="search" onSubmit={handleFormSubmit}>
        <label
          htmlFor="query"
          className="sr-only mb-2 text-sm font-medium text-gray-900"
        >
          Search
        </label>
        <div className="flex items-center gap-2 rounded-lg border border-black/20 px-4 py-4">
          <div className="">
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="query"
            className="w-full outline-none"
            placeholder="Search for courses or users..."
          />
          <button type="submit" className="">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
