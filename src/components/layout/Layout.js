import Container from "react-bootstrap/Container";
import CustomNav from "./CustomNav";

export default function Layout({ children, home, contact, login }) {
  return (
    <>
      <div className="flex-wrapper">
        <header></header>
        <CustomNav home={home} contact={contact} login={login} />
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
