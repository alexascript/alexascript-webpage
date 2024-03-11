import "./card-list.css";
import { Card } from "./card";

export function CardList() {
  return (
    <ul className="card-list">
      <a href="https://github.com/alexascript" target="blank">
        <li>
          <Card platform="GitHub" logoImg="assets/github-logo.png" />
        </li>
      </a>
      <a href="https://www.linkedin.com/in/alexascript/" target="blank">
        <li>
          <Card platform="LinkedIn" logoImg="assets/linkedin-logo.png" />
        </li>
      </a>
      <a>
        <li>
          <Card platform="CV" logoImg="assets/cv-icon.png" />
        </li>
      </a>
    </ul>
  );
}
