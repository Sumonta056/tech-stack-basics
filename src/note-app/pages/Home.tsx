// pages/Home.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [notes, setNotes] = useState<
    { id: string; title: string; category: string }[]
  >([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    setNotes(storedNotes);
  }, []);

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Notes</h1>
      <Link to="/new" className="p-2 text-white bg-blue-500 rounded">
        New Note
      </Link>
      <div className="mt-4">
        {notes.map((note) => (
          <Link key={note.id} to={`/note/${note.id}`}>
            <div className="p-4 mb-2 border rounded-lg cursor-pointer">
              <h2 className="font-semibold">{note.title}</h2>
              <p className="text-sm text-gray-600">{note.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
