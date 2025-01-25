import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductById() {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: product,
    error,
    isLoading,
  } = useSWR(id ? `/api/products/${id}` : null, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading || !product) return <div>loading...</div>;

  return (
    <>
      <h1>{product.name || "Product name unavailable"}</h1>
      <p>{product.description}</p>
      <p>
        Price: {product.price}
        {product.currency}
      </p>
      <p>Category: {product.category}</p>
    </>
  );
}
