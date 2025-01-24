import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function AllProducts() {
  const { data: products, error, isLoading } = useSWR("/api/products", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} {product.description}
        </li>
      ))}
    </ul>
  );
}
