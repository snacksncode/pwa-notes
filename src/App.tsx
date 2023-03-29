import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { List } from "./components/List/List";
import { useEffect, useState } from "react";
import { Note, NoteFormData } from "./types";
import { SubmitHandler, useForm } from "react-hook-form";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const { register, handleSubmit, reset } = useForm<NoteFormData>();

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes != null) {
      const parsedSavedNotes = JSON.parse(savedNotes);
      setNotes(parsedSavedNotes);
    }
  }, []);

  const createNote: SubmitHandler<NoteFormData> = ({ title, content }) => {
    const newNote: Note = {
      id: crypto.randomUUID(),
      title,
      content,
    };
    setNotes((prevNotesState) => {
      const newState = [...prevNotesState, newNote];
      localStorage.setItem("notes", JSON.stringify(newState));
      return newState;
    });
    reset();
  };

  const removeNote = (id: Note["id"]) => {
    setNotes((prevNotesState) => {
      const newState = prevNotesState.filter((note) => note.id !== id);
      localStorage.setItem("notes", JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <div className="App">
      <div className="logos">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="global-heading">Notes PWA</h1>
      <div className="card">
        <h2>Create new note</h2>
        <form onSubmit={handleSubmit(createNote)}>
          <div>
            <label htmlFor="title">Title</label>
            <input {...register("title", { required: true })} id="title" />
          </div>
          <div>
            <label htmlFor="content">Content</label>
            <input {...register("content", { required: true })} id="content" />
          </div>
          <button>Create</button>
        </form>
        <hr />
        <List notes={notes} onRemove={removeNote} />
      </div>
    </div>
  );
}

export default App;
