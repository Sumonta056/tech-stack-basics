import { useRef } from "react";
// useRef is used when you need to interact with the DOM directly without causing re-renders.
// Does not trigger a re-render when updated.
// Auto-focus input fields, storing previous values without re-render

const NewPost = () => {
  const titleRef = useRef(null); // Reference to the title input field

  const handleNewPost = () => {
    titleRef.current.focus(); // Focus the input field
  };

  return (
    <div>
      <button
        onClick={handleNewPost}
        className="px-4 py-2 text-white bg-blue-500 rounded"
      >
        Create New Post
      </button>

      <input
        ref={titleRef}
        type="text"
        placeholder="Enter blog title..."
        className="block w-full p-2 mt-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default NewPost;
