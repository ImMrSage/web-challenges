import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1337, name: "🍌 Banana", color: "yellow" },
    {
      id: 2,
      name: "apple",
      color: "red",
    },
    {
      id: 3,
      name: "pickle",
      color: "green",
    },
    {
      id: 4,
      name: "tomato",
      color: "red",
    },
    {
      id: 5,
      name: "kiwi",
      color: "brown",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
