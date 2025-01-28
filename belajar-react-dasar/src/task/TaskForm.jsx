import { useState } from "react";

export default function TaskForm({ setItems }) {
  const [item, setItem] = useState("");

  function handleChange(e) {
    setItem(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    setItems((items) => {
      items.push(item);
    });
    setItem("");
  }

  return (
    <>
      <h1>Create Task</h1>
      <form>
        <input value={item} onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
      </form>
    </>
  );
}
