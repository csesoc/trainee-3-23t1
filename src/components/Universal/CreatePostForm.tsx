import { useState } from "react";

const CreatePostForm = () => {
  const [userIcon, setUserIcon] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    //e.preventDefault();
  };

  return (
    <div className="w-[844px] h-[246px] bg-background p-4 rounded-[20px]">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center mb-4 pt-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4128/4128176.png"
            alt="User Icon"
            className="w-12 h-12 rounded-full mr-4"
          />
          <input
            type="text"
            value={userIcon}
            onChange={(e) => setUserIcon(e.target.value)}
            placeholder="Write a title..."
            className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write a description..."
          className="w-full bg-gray-100 border border-gray-300 rounded px-4 pt-2"
        ></textarea>
        <div className="flex justify-end">
          <button
            type="submit"
            className="text-[14px] bg-white/40 mt-[10px] flex h-[38px] w-[120px] items-center rounded-[20px] border px-4 py-2 font-bold shadow-default bg-accent-1"
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
