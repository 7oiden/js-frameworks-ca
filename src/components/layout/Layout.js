import CustomNav from "./CustomNav";
import Container from "react-bootstrap/Container";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex-wrapper">
        <header>
          <CustomNav />
        </header>
        <main>
          <Container>{children}</Container>
        </main>
      </div>
      <footer>
        <span>JS Frameworks - Tommy Johnsen 2022</span>
      </footer>
    </>
  );
}
