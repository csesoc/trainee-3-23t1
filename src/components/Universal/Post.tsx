import { postData } from "~/types/dataTypes"

const Post = ({ post }: { post: postData }) => {

    return (
      <div className="bg-secondary rounded-3xl w-full h-48 py-8 px-7 flex flex-col space-y-3 border border-background shadow-default">
        {/* Avatar Group */}
        <div className="flex flex-row space-x-4">
          {/* Place profile pic here ig */}
          <div className="bg-accent-1 h-12 w-12 rounded-full"></div>
          <div className="flex flex-col space-y-1">
            <h5>{post.author}</h5>
            <p>in <span className="text-accent-1 font-semibold">{post.course}</span></p>
          </div>
        </div>
        {/* Post Details */}
        <h4 className="truncate">{post.title}</h4>
        <p className="truncate">{post.content}</p>
      </div>
    )
  }

  export default Post