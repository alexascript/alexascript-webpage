import "./hero.css";

export function Hero({ title, text, imageUrl, buttonCopy }) {
  return (
    <article className="hero">
      <div className="hero__content">
        <h1 className="hero__title"> {title} </h1>
        <p className="hero__text">{text}</p>
        <button className="hero__btn">{buttonCopy}</button>
      </div>
      <div className="hero__img">
        <img src={imageUrl} alt="cyberpunk visual concept" />
      </div>
    </article>
  );
}
