import "./hello-world.css";

export default function HelloWorld() {
  const props = {
    text: "Hello World From Spread Syntax",
  };
  return (
    <div>
      <HeaderHelloWorld {...props} />
      <ParagraphHelloWorld />
    </div>
  );
}

function HeaderHelloWorld({ text = "Ups, lupa kasih teks" }) {
  return (
    <div>
      <h1 className="title">{text.toUpperCase()}</h1>
    </div>
  );
}

function ParagraphHelloWorld() {
  const text = "Selamat Belajar ReactJS dari Programmer Zaman Now";
  return (
    <div>
      <p className="content">{text.toLocaleLowerCase()}</p>
    </div>
  );
}
