import { useState } from "react";
import { api } from "~/utils/api";

const CreatePostForm = ({ userId }: { userId: string }) => {
  const [userIcon, setUserIcon] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const CreatePostMutation = api.post.create.useMutation();

  const courseId = "cligvmeea0000oy8j42afeanx";
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      title: { value: string };
      desc: { value: string };
    };
    const title: string = target.title.value;
    const desc: string = target.desc.value;
    CreatePostMutation;
    console.log(title, desc);
    // api call here
    CreatePostMutation.mutateAsync({ content: desc, courseId, title, userId })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="h-[246px] w-[844px] rounded-[20px] bg-background p-4">
      <form id="post-create" onSubmit={handleSubmit}>
        <div className="mb-4 flex items-center pt-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4128/4128176.png"
            alt="User Icon"
            className="mr-4 h-12 w-12 rounded-full"
          />
          <input
            id="title"
            type="text"
            value={userIcon}
            onChange={(e) => setUserIcon(e.target.value)}
            placeholder="Write a title..."
            className="w-full rounded border border-gray-300 bg-gray-100 px-4 py-2"
            required
          />
        </div>
        <textarea
          id="desc"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write a description..."
          className="w-full rounded border border-gray-300 bg-gray-100 px-4 pt-2"
          required
        ></textarea>
        <div className="flex justify-end">
          <button
            type="submit"
            className="mt-[10px] flex h-[38px] w-[120px] items-center rounded-[20px] border bg-accent-1 bg-white/40 px-4 py-2 text-[14px] font-bold shadow-default"
          >
            <span>Create</span>
            <img
              src="https://www.svgrepo.com/download/15468/send.svg"
              alt="User Icon"
              className="ml-3 h-4 w-4"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostForm;
