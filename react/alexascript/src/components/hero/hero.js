import "./hero.css";

export function Hero({ title, text, imageUrl, buttonCopy }) {
  return (
    <article className="hero">
      <div className="hero__content">
        <h1 className="hero__title"> {title} </h1>
        <p className="hero__text">{text}</p>
        <a href="https://www.linkedin.com/in/alexascript/" target="blank">
          <button className="hero__btn">{buttonCopy}</button>
        </a>
      </div>
      <div className="hero__img">
        <img
          className="hero__pic"
          src={imageUrl}
          alt="cyberpunk visual concept"
        />
      </div>
    </article>
  );
}
