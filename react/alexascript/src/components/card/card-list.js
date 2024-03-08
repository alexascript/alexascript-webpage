import "./card-list.css";
import { Card } from "./card";

export function CardList() {
  return (
    <ul className="card-list">
      <li>
        <Card platform="GitHub" logoImg="assets/github-logo.png" />
      </li>
      <li>
        <Card platform="LinkedIn" logoImg="assets/linkedin-logo.png" />
      </li>
      <li>
        <Card platform="CV" logoImg="assets/cv-icon.png" />
      </li>
    </ul>
  );
}
