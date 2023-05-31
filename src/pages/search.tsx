import { type NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "~/components/Layout";
const Search: NextPage = () => {
  return (
    <Layout>
      <div className="flex h-full bg-secondary">
        <div className="ml-10 h-full w-full bg-background px-10 pt-10 lg:mr-10 lg:w-4/5">
          <SearchBar />
          <ReturnSearchList />
        </div>
        <FilterSection />
      </div>
    </Layout>
  );
};

// SearchBar Component
const SearchBar = () => {
  let search = "COMP";
  let numResult = 691;
  return (
    <div>
      <form>
        <label
          htmlFor="default-search"
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
            type="search"
            id="default-search"
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
      {/* Results thing beneath the search bar.. How to implement */}
      <div className="flex flex-wrap justify-between pb-5 pt-5 ">
        <p>Results for &apos;{search}&apos;</p>
        <p>{numResult} Results</p>
      </div>
    </div>
  );
};
// ResultsComponents
const ReturnSearchList = () => {
  const datas = [
    {
      name: "COMP1511",
      description:
        "Very nice course notes dm me! Contact me @shinybuncis on insta!",
      icon: "https://www.unsw.edu.au/etc.clientlibs/unsw-common/clientlibs/unsw-assets/resources/social/UNSWlogo-opengraph-squaresafe.png",
    },
    {
      name: "COMP6969",
      description: "Rizzahysics with Hari B. Hehe",
      icon: "https://www.unsw.edu.au/etc.clientlibs/unsw-common/clientlibs/unsw-assets/resources/social/UNSWlogo-opengraph-squaresafe.png",
    },
    {
      name: "COMP6969",
      description: "Rizzahysics with Hari B. Hehe",
      icon: "https://www.unsw.edu.au/etc.clientlibs/unsw-common/clientlibs/unsw-assets/resources/social/UNSWlogo-opengraph-squaresafe.png",
    },
    {
      name: "COMP6969",
      description: "Rizzahysics with Hari B. Hehe",
      icon: "https://www.unsw.edu.au/etc.clientlibs/unsw-common/clientlibs/unsw-assets/resources/social/UNSWlogo-opengraph-squaresafe.png",
    },
    {
      name: "COMP6969",
      description: "Rizzahysics with Hari B. Hehe",
      icon: "https://www.unsw.edu.au/etc.clientlibs/unsw-common/clientlibs/unsw-assets/resources/social/UNSWlogo-opengraph-squaresafe.png",
    },
    // Add more objects to the data array as needed
  ];

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
      {datas.map((course, index) => (
        <div
          key={index}
          className="bg-gray-200 border-white bg-white/40 flex w-full gap-4 rounded-[10px] p-4 shadow-default"
        >
          <Image
            width={80}
            height={80}
            src={course.icon}
            alt="Course Icon"
            className="self-center rounded-lg object-cover"
          />
          <div>
            <h5 className="truncate">{course.name}</h5>
            <p className="line-clamp-2">{course.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const FilterSection = () => {
  return (
    <div className="hidden h-screen w-1/5 bg-background px-10 py-10 lg:block">
      <h3 className="text-sm">FILTER</h3>
      <div className="flex flex-col">
        <button className="text-white bg-white/40 mt-[10px] flex h-[56px] w-full flex-col rounded-[10px] border px-4 py-2 font-bold shadow-default hover:border-accent-1 hover:text-accent-1 xl:flex-row xl:items-center">
          <Image
            width={16}
            height={16}
            src="https://img.uxwing.com/wp-content/themes/uxwing/download/editing-user-action/read-book-icon.png"
            alt="Course Icon"
            className="mr-2"
          />
          <span>Courses</span>
        </button>
        <button className="text-white bg-white/40 mt-[10px] flex h-[56px] w-full flex-col rounded-[10px] border px-4 py-2 font-bold shadow-default hover:border-accent-1 hover:text-accent-1 xl:flex-row xl:items-center">
          <Image
            width={16}
            height={16}
            src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
            alt="User Icon"
            className="mr-2"
          />
          <span>Users</span>
        </button>
      </div>
    </div>
  );
};

export default Search;
