import { api } from "~/utils/api";
import LoadingSpinner from "../LoadingSpinner";


// ResultsComponents
const SearchResultsCourse = ({query}:{query:string}) => {

const { data: courses }  =  api.course.search.useQuery({query: query})

if (!courses) return <LoadingSpinner />

return (
    <div className="flex flex-wrap justify-between">
    {courses.courses.map((course, index) => {
        return (
        <div key={index} className="flex w-[450px] h-[112px] bg-gray-200 p-4 mb-4 rounded-[10px] shadow-default border-white bg-white/40">
            <img src={"https://www.unsw.edu.au/etc.clientlibs/unsw-common/clientlibs/unsw-assets/resources/social/UNSWlogo-opengraph-squaresafe.png"} alt="Course Icon" className="w-[80px] h-[80px] rounded-[10px] self-center object-cover" />
            <div className="ml-[16px]">
            <h5>{course.code}</h5>
            <p className="text-[16px]">{course.name}</p>
            </div>
        </div>
        );
    })}
    </div>
);
} 

export default SearchResultsCourse;