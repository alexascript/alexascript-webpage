import "./card.css";

export function Card({ platform, logoImg }) {
  return (
    <article className="card">
      <div className="card__img">
        <img className="card__logo" src={logoImg} alt="social media icon" />
      </div>
    </article>
  );
}
