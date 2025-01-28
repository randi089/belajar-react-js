import { useState } from "react";
import Counter from "./Counter";

export default function CounterApp() {
  const [show2, setShow2] = useState(true);

  function handleChange(e) {
    setShow2(e.target.checked);
  }
  return (
    <>
      {show2 ? <Counter key="1" name="2" /> : <Counter key="2" name="1" />}
      <label htmlFor="check">Tampilkan Counter 2</label>
      <input
        type="checkbox"
        checked={show2}
        onChange={handleChange}
        id="check"
      />
    </>
  );
}
