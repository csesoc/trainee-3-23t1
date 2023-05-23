import { type NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "~/components/Layout";
const Search: NextPage = () => {
  return (
    <Layout>
      <div className="flex h-screen">
        <div className="pt-10 ml-10 mr-10 w-[1000px] h-full fill-background">
          <SearchBar/>
          {/* Results info and results count info..
              How to make it display actual values? */}
          <div className="flex justify-between pt-5 pb-5">
            <p>Results for 'COMP'</p>
            <p>69 Results</p>
          </div>
            <CourseList/>
        </div>
        {/* Filter Section */}
        <div className="pl-10 pt-10">
          <h3 className="text-lg">Filter</h3>
          <div className="flex">
            <button className="flex items-center justify-center w-24 h-10 rounded-md bg-blue-500 hover:bg-red-500 text-white mr-2">
              &#128214; Courses
            </button>
            <button className="flex items-center justify-center w-24 h-10 rounded-md bg-blue-500 hover:bg-red-500 text-white">
              &#128100; Users
            </button>
          </div>
        </div>
      </div>
      
    </Layout>
  );
};
// SearchBar Component
const SearchBar = () => {
  return (
  <form>   
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div className="relative w-full bg-black">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for courses or users..." required/>
          <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
      </div>
  </form>
  )
}

const CourseList = () => {
  const data = [
    {
      name: "COMP1511",
      description: "Very nice course notes dm me! Contact me @shinybuncis on insta!",
      icon: "https://www.unsw.edu.au/etc.clientlibs/unsw-common/clientlibs/unsw-assets/resources/social/UNSWlogo-opengraph-squaresafe.png"
    },
    {
      name: "COMP6969",
      description: "Rizzahysics with Hari B. Hehe",
      icon: "https://www.unsw.edu.au/etc.clientlibs/unsw-common/clientlibs/unsw-assets/resources/social/UNSWlogo-opengraph-squaresafe.png"
    },
    {
      name: "COMP6969",
      description: "Rizzahysics with Hari B. Hehe",
      icon: "https://www.unsw.edu.au/etc.clientlibs/unsw-common/clientlibs/unsw-assets/resources/social/UNSWlogo-opengraph-squaresafe.png"
    },
    {
      name: "COMP6969",
      description: "Rizzahysics with Hari B. Hehe",
      icon: "https://www.unsw.edu.au/etc.clientlibs/unsw-common/clientlibs/unsw-assets/resources/social/UNSWlogo-opengraph-squaresafe.png"
    },
    {
      name: "COMP6969",
      description: "Rizzahysics with Hari B. Hehe",
      icon: "https://www.unsw.edu.au/etc.clientlibs/unsw-common/clientlibs/unsw-assets/resources/social/UNSWlogo-opengraph-squaresafe.png"
    },
    // Add more objects to the data array as needed
  ];

  return (
    <div className="flex flex-wrap justify-between">
      {data.map((course, index) => {
        return (
          <div key={index} className="flex w-[450px] h-[112px] bg-gray-200 p-4 mb-4 border border-blue-500 rounded-[10px]">
            <img src={course.icon} alt="Course Icon" className="w-[80px] h-[80px] rounded-[10px] self-center" />
            <div className="ml-[16px]">
              <h5>{course.name}</h5>
              <p className="text-[16px]">{course.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}  


export default Search;
