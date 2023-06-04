import { useState } from "react";
import LoadingSpinner from "../LoadingSpinner";
import { allPostData } from "~/data/dummy";
import Post from "../Universal/Post";
import { api } from "~/utils/api";


const AllPosts = ({ selected, query }: { selected: boolean, query: string }) => {
    // api call to get data based on selected get "reccomended | hot" type posts
    const [loading, setLoading] = useState(true)


    const {data: posts} = api.post.getLatestPosts.useQuery();

    // after x seconds loading is false
    return (
      <>
        {!posts ?
          (<LoadingSpinner />)
          :
          (<div className="mt-8 space-y-8">
              {posts.posts.map((post, index) => {
                return <Post post={post} key={index} />
              })}
            </div>
          )}
      </>
    )
  }

  export default AllPosts