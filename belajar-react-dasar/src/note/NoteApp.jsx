import { useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NodeList from "./NoteList";
import { NotesContext, NotesDispatchContext } from "./NoteContext";

let id = 0;
const initialNotes = [
  {
    id: id++,
    text: "Learn HTML",
    done: false,
  },
  {
    id: id++,
    text: "Learn CSS",
    done: true,
  },
  {
    id: id++,
    text: "Learn JavaScript",
    done: false,
  },
  {
    id: id++,
    text: "Learn React",
    done: false,
  },
];

function notesReducer(draft, action) {
  if (action.type === "ADD_NOTE") {
    draft.push({
      id: id++,
      text: action.text,
      done: false,
    });
  } else if (action.type === "CHANGE_NOTE") {
    const index = draft.findIndex((note) => note.id === action.id);
    draft[index] = { ...action };
  } else if (action.type === "DELETE_NOTE") {
    const index = draft.findIndex((note) => note.id === action.id);
    draft.splice(index, 1);
  }
}

export default function NoteApp() {
  const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

  return (
    <>
      <NotesContext.Provider value={notes}>
        <NotesDispatchContext.Provider value={dispatch}>
          <h1>Note App</h1>
          <NoteForm />
          <NodeList />
        </NotesDispatchContext.Provider>
      </NotesContext.Provider>
    </>
  );
}
