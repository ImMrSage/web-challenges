console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  const darthVader = data.results[3];
  const r2d2 = data.results[2].eye_color;
  console.log(data);
  console.log(darthVader);
  console.log(`R2-D2 eye color: ${r2d2}`);
}

fetchData();
