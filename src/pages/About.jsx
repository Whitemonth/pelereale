import { useContext } from "react";
import Context from "../Context";

export default function About() {
  const value = useContext(Context);
  return (
    <section style={{ marginTop: "100px" }}>
      <p>About page</p>
    </section>
  );
}
