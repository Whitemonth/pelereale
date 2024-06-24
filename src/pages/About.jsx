import useCart from "../hooks/useCart";

export default function About() {
  const { handleAddToCart } = useCart();
  return (
    <section>
      <p>About page</p>
      <button onClick={() => handleAddToCart(5)}>test</button>
    </section>
  );
}
