import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Let`s talk about games</h2>
      <label htmlFor="input">What`s your favorite game franchise?</label>
      <input type="text" id="input" />
      <a href="https://en.wikipedia.org/wiki/Heroes_of_Might_and_Magic">
        It`s a link to my favorite game franchise
      </a>
    </article>
  );
}
