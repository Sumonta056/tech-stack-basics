import { useState } from "react";
import Markdown from "react-markdown";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function NewNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const saveNote = () => {
    const newNote = { id: uuidv4(), title, content, category };
    const storedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    localStorage.setItem("notes", JSON.stringify([...storedNotes, newNote]));
    navigate("/");
  };

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">New Note</h1>
      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 mb-2 border"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        className="w-full p-2 mb-2 border"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <textarea
        placeholder="Write in Markdown..."
        className="w-full h-40 p-2 border"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <h2 className="mt-2 font-bold">Preview:</h2>
      <div className="p-2 mt-2 border bg-gray-50">
        <Markdown>{content}</Markdown>
      </div>
      <button
        onClick={saveNote}
        className="p-2 mt-4 text-white bg-green-500 rounded"
      >
        Save
      </button>
    </div>
  );
}
