import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleAddtag(newTag) {
    setTags([...tags, newTag]);
  }

  function handleRemovetag(tagToDelete) {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  }

  return (
    <main className="app">
      <Form onAddTag={handleAddtag} />
      <List tags={tags} onDeleteTag={handleRemovetag} />
    </main>
  );
}
