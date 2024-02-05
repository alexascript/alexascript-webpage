import "./navbar.css";

export function Navbar({ title }) {
  return (
    <nav className="navbar">
      <h1 className="navbar__header">{title}</h1>
    </nav>
  );
}
