import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import type { INote } from "../../types/note";
import useAuth from "../../hooks/useAuth";

const NotesPage: React.FC = () => {
  const [notes, setNotes] = useState<INote[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/notes");
        setNotes(response.data);
        console.log("data found in frontend", response.data);
      } catch (error) {
        console.error("Failed to fetch notes", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user?.username}</h1>
      {loading ? (
        <p>Loading notes...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {notes.map((note) => (
            <div key={note._id} className="border p-4 rounded shadow">
              <h2 className="text-lg font-semibold">{note.title}</h2>
              <p className="text-sm text-gray-600">{note.content}</p>
              {note.imageUrl && (
                <img src={note.imageUrl} alt="Note" className="mt-2" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotesPage;
