import { api } from "~/utils/api";
import LoadingSpinner from "../LoadingSpinner";

// ResultsComponents
const SearchResultsUser = ({ query }: { query: string }) => {
  const { data: users } = api.user.search.useQuery({ query: query });

  if (!users) return <LoadingSpinner />;

  return (
    <>
      {/* Results thing beneath the search bar.. How to implement */}
      <div className="flex justify-between pb-5 pt-5 ">
        <p>Results for &apos;{query}&apos;</p>
        <p>{users.users.length} Results</p>
      </div>
      <div className="flex flex-wrap justify-between">
        {users.users.map((user, index) => {
          return (
            <div
              key={index}
              className="mb-4 flex h-[112px] w-[450px] rounded-[10px] border-white bg-gray-200 bg-white/40 p-4 shadow-default"
            >
              <img
                src={
                  "https://www.unsw.edu.au/etc.clientlibs/unsw-common/clientlibs/unsw-assets/resources/social/UNSWlogo-opengraph-squaresafe.png"
                }
                alt="user Icon"
                className="h-[80px] w-[80px] self-center rounded-[10px] object-cover"
              />
              <div className="ml-[16px]">
                <h5>{user.name}</h5>
                <p className="text-[16px]">{user.handleStr}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchResultsUser;
