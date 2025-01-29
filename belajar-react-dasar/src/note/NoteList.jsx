import { useContext, useMemo, useRef, useState } from "react";
import Note from "./Note";
import { NotesContext } from "./NoteContext";

export default function NodeList() {
  const notes = useContext(NotesContext);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const filteredNotes = useMemo(() => {
    console.log("Filtering notes");
    return notes.filter((note) => note.text.includes(search));
  }, [notes, search]);

  function handleSearch() {
    console.info("Search:", searchInput.current.value);
    setSearch(searchInput.current.value);
  }
  return (
    <>
      <input ref={searchInput} placeholder="Search" />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {filteredNotes.map((note) => (
          <li key={note.id}>
            <Note note={note} />
          </li>
        ))}
      </ul>
    </>
  );
}
