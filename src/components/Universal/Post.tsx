import { postData } from "~/types/dataTypes";
import TruncatedDescription from "../TruncatedDescription";

const Post = ({ post }: { post: any }) => {
  return (
    <div className="flex w-full flex-col space-y-3 rounded-3xl border border-background bg-background/40 px-7 py-8 shadow-default">
      {/* Avatar Group */}
      <div className="flex flex-wrap gap-4">
        {/* Place profile pic here ig */}
        <div className="h-12 w-12 rounded-full bg-accent-1"></div>
        <div className="flex flex-col space-y-1">
          <h5>{post.author}</h5>
          <p>
            in{" "}
            <span className="font-semibold text-accent-1">{post.course}</span>
          </p>
        </div>
      </div>
      {/* Post Details */}
      <h4 className="truncate">{post.title}</h4>
      <TruncatedDescription content={post.content} maxCharacters={50} />
    </div>
  );
};

export default Post;
