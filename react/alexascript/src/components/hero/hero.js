import "./hero.css";

export function Hero({ title }) {
  return (
    <article className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Hi, I'm Alexandra Zapata</h1>
        <p className="hero__text">
          I'm Alexandra Zapata, a developer dedicated to making the world a
          better place one line of code at a time.
        </p>
        <button className="hero__btn">Hire me</button>
      </div>
      <div className="hero__img">
        <img src="/hero-pic.png" alt="cyberpunk visual concept" />
      </div>
    </article>
  );
}
