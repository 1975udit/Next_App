import Hello from "./components/hello";

export default function Home() {
  console.log("Where i am going to be rendered?");
  return (
    <div>
      <h1>Hello World</h1>
      <Hello />
    </div>
  );
}
