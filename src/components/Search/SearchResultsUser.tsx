import { api } from "~/utils/api";
import LoadingSpinner from "../LoadingSpinner";


// ResultsComponents
const SearchResultsUser = ({query}:{query:string}) => {

const { data: users }  =  api.user.search.useQuery({query: query})

if (!users) return <LoadingSpinner />

return (
    <div className="flex flex-wrap justify-between">
    {users.users.map((user, index) => {
        return (
        <div key={index} className="flex w-[450px] h-[112px] bg-gray-200 p-4 mb-4 rounded-[10px] shadow-default border-white bg-white/40">
            <img src={"https://www.unsw.edu.au/etc.clientlibs/unsw-common/clientlibs/unsw-assets/resources/social/UNSWlogo-opengraph-squaresafe.png"} alt="user Icon" className="w-[80px] h-[80px] rounded-[10px] self-center object-cover" />
            <div className="ml-[16px]">
            <h5>{user.name}</h5>
            <p className="text-[16px]">{user.handleStr}</p>
            </div>
        </div>
        );
    })}
    </div>
);
} 

export default SearchResultsUser;