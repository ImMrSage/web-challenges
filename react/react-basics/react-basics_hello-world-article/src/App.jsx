import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World!</h1>
      <p>
        This is actually an article which contains an h1 element and a p
        element.
      </p>
      <ul>
        <li>Actually</li>
        <li>also</li>
        <li>a list</li>
      </ul>
    </article>
  );
}
