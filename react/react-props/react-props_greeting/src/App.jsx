import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Alex" />
      <Greeting name="Andrea" isCoach />
      <Greeting name="Denise" />
      <Greeting name="Joshua" />
      <Greeting name="Jessica" isCoach />
      <Greeting name="Gunnar" />
      <Greeting name="Roland" isCoach />
      <Greeting name="Philipp" />
      <Greeting name="Uschi" />
    </div>
  );
}

function Greeting({ name, isCoach }) {
  return <h2>Hello, {isCoach ? "coach " + name : name}!</h2>;
}
