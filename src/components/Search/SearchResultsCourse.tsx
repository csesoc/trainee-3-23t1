import { api } from "~/utils/api";
import LoadingSpinner from "../LoadingSpinner";

// ResultsComponents
const SearchResultsCourse = ({ query }: { query: string }) => {
  const { data: courses } = api.course.search.useQuery({ query: query });

  if (!courses) return <LoadingSpinner />;

  return (
    <div className="flex flex-wrap justify-between">
      {courses.courses.map((course, index) => {
        return (
          <div
            key={index}
            className="mb-4 flex h-[112px] w-[450px] rounded-[10px] border-white bg-gray-200 bg-white/40 p-4 shadow-default"
          >
            <img
              src={
                "https://www.unsw.edu.au/etc.clientlibs/unsw-common/clientlibs/unsw-assets/resources/social/UNSWlogo-opengraph-squaresafe.png"
              }
              alt="Course Icon"
              className="h-[80px] w-[80px] self-center rounded-[10px] object-cover"
            />
            <div className="ml-[16px]">
              <h5>{course.code}</h5>
              <p className="text-[16px]">{course.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResultsCourse;
