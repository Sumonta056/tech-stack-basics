import { useReducer } from "react";

// Define types for state
interface BlogState {
  likes: number;
  comments: string[];
  isFavorite: boolean;
}

// Define action types
type BlogAction =
  | { type: "LIKE" }
  | { type: "ADD_COMMENT"; payload: string }
  | { type: "TOGGLE_FAVORITE" };

// Initial state
const initialState: BlogState = {
  likes: 0,
  comments: [],
  isFavorite: false,
};

// Reducer function
const blogReducer = (state: BlogState, action: BlogAction): BlogState => {
  switch (action.type) {
    case "LIKE":
      return { ...state, likes: state.likes + 1 };
    case "ADD_COMMENT":
      return { ...state, comments: [...state.comments, action.payload] };
    case "TOGGLE_FAVORITE":
      return { ...state, isFavorite: !state.isFavorite };
    default:
      return state;
  }
};

const BlogPost = () => {
  const [state, dispatch] = useReducer(blogReducer, initialState);

  return (
    <div className="max-w-lg p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800">🌟 Blog Post</h2>

      {/* Like and Favorite Section */}
      <div className="flex items-center gap-4 mt-4">
        <button
          onClick={() => dispatch({ type: "LIKE" })}
          className="flex items-center gap-2 px-4 py-2 text-white transition bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          👍 Like <span className="font-bold">{state.likes}</span>
        </button>

        <button
          onClick={() => dispatch({ type: "TOGGLE_FAVORITE" })}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 transition ${
            state.isFavorite ? "bg-yellow-500 text-white" : "bg-gray-400 text-white"
          }`}
        >
          {state.isFavorite ? "⭐ Favorited" : "☆ Favorite"}
        </button>
      </div>

      {/* Comments Section */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700">💬 Comments</h3>
        <input
          type="text"
          placeholder="Write a comment..."
          className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.currentTarget.value) {
              dispatch({ type: "ADD_COMMENT", payload: e.currentTarget.value });
              e.currentTarget.value = ""; // Clear input field
            }
          }}
        />

        {/* Display Comments */}
        <ul className="mt-3 space-y-2">
          {state.comments.length > 0 ? (
            state.comments.map((comment, index) => (
              <li
                key={index}
                className="p-2 bg-gray-100 border border-gray-300 rounded-lg"
              >
                🗨 {comment}
              </li>
            ))
          ) : (
            <p className="mt-2 text-gray-500">No comments yet. Be the first to comment!</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default BlogPost;
