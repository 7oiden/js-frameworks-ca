import Container from "react-bootstrap/Container";
import CustomNav from "./CustomNav";

export default function Layout({ children }) {
  return (
    <>
      <header></header>
      <CustomNav />
      <main>
        <Container>{children}</Container>
      </main>
      <footer></footer>
    </>
  );
}
