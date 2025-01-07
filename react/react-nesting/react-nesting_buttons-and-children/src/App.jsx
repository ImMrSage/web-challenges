import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>
        <h2>Welcome!</h2>
      </Button>
      <Button>
        <h3>🐈‍⬛</h3>
      </Button>
      <Button>
        <p>Here we go...</p>
      </Button>
      <Button>
        <h2>🦑</h2>
      </Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
