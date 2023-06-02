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
            className="text-gray-900 dark:text-white sr-only mb-2 text-sm font-medium"
          >
            Search
          </label>
          <div className="bg-black relative w-full">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                aria-hidden="true"
                className="text-gray-500 dark:text-gray-400 h-5 w-5"
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
              className="text-gray-900 border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-4 pl-10 text-sm"
              placeholder="Search for courses or users..."
              required
            />
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 absolute bottom-2.5 right-2.5 rounded-lg px-4 py-2 text-sm font-medium focus:outline-none focus:ring-4"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    );
  };

export default SearchBar;