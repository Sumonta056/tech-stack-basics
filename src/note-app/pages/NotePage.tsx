/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { useNavigate, useParams } from "react-router-dom";

export default function NotePage() {
  const [note, setNote] = useState<{
    title: string;
    content: string;
    category: string;
  } | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    const foundNote = storedNotes.find((n: any) => n.id === id);
    if (foundNote) setNote(foundNote);
  }, [id]);

  const deleteNote = () => {
    const storedNotes = JSON.parse(
      localStorage.getItem("notes") || "[]"
    ).filter((n: any) => n.id !== id);
    localStorage.setItem("notes", JSON.stringify(storedNotes));
    navigate("/");
  };

  if (!note) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">{note.title}</h1>
      <p className="text-sm text-gray-600">Category: {note.category}</p>
      <div className="p-4 mt-4 border bg-gray-50">
        <Markdown>{note.content}</Markdown>
      </div>
      <button
        onClick={deleteNote}
        className="p-2 mt-4 text-white bg-red-500 rounded"
      >
        Delete
      </button>
    </div>
  );
}
