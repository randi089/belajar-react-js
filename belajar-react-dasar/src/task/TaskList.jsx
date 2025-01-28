export default function TaskList({ items = [] }) {
  return (
    <>
      <h1>List Task</h1>
      <ul>
        {items.map((item, i) => (
          <li key={i}> {item} </li>
        ))}
      </ul>
    </>
  );
}
