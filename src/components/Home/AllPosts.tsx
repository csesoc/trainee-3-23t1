import { useState } from "react";
import LoadingSpinner from "../LoadingSpinner";
import { allPostData } from "~/data/dummy";
import Post from "../Universal/Post";


const AllPosts = ({ selected, query }: { selected: boolean, query: string }) => {
    // api call to get data based on selected get "reccomended | hot" type posts
    const [loading, setLoading] = useState(true)
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    // after x seconds loading is false
    return (
      <>
        {loading ?
          (<LoadingSpinner />)
          :
          (<div className="mt-8 space-y-8">
              {allPostData.map((post, index) => {
                return <Post post={post} key={index} />
              })}
            </div>
          )}
      </>
    )
  }

  export default AllPosts