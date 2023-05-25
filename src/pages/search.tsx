import { type NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "~/components/Layout";
const Search: NextPage = () => {
  return (
    <Layout>
      <div className="flex justify-between h-screen bg-secondary">
        <div className="pt-10 ml-10 mr-10 w-[1000px] h-full bg-background pr-[40px] pl-[40px]">
          <SearchBar/>   
          <ReturnSearchList/>
        </div>
        <FilterSection/>
      </div>  
    </Layout>
  );
};

// SearchBar Component
const SearchBar = () => {
  let search = "COMP"
  let numResult = 691
  return (
  <div>
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
  {/* Results thing beneath the search bar.. How to implement */}
  <div className="flex justify-between pt-5 pb-5 ">
  <p>Results for '{search}'</p>
  <p>{numResult} Results</p>
  </div>
  </div>
  )
}
// ResultsComponents
const ReturnSearchList = () => {
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
          <div key={index} className="flex w-[450px] h-[112px] bg-gray-200 p-4 mb-4 rounded-[10px] shadow-default border-white bg-white/40">
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

const FilterSection = () => {
return (
<div className="pl-10 pt-10 h-screen bg-background w-[355px]">
  <h3 className="text-sm">FILTER</h3>
  <div className="flex flex-col">
    <button className="mt-[10px] hover:border-accent-1 hover:text-accent-1 text-white font-bold py-2 px-4 h-[56px] w-[258px] rounded-[10px] flex items-center shadow-default border bg-white/40">
      <img src="https://img.uxwing.com/wp-content/themes/uxwing/download/editing-user-action/read-book-icon.png" alt="Course Icon" className="w-4 h-4 mr-2"/>
      <span>Courses</span>
    </button>
    <button className="mt-[10px] hover:border-accent-1 hover:text-accent-1 text-white font-bold py-2 px-4 h-[56px] w-[258px] rounded-[10px] flex items-center shadow-default border bg-white/40">
      <img src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" alt="User Icon" className="w-4 h-4 mr-2"/>
      <span>Users</span>
    </button>
  </div>
</div>
)

}

export default Search;
