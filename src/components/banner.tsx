import banner from "../assets/img/banner.jpg";

export default function Banner() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-banner">
          <h1 className="h1">Онлайн магазин</h1>
          <p className="hero__p">* лучший по продажам среди конкурентов</p>
          <a href="" className="hero-button">
            Каталог
          </a>
        </div>
      </div>
      <div className="hero-banner">
        <img src={banner} alt="" className="hero-banner__i" />
      </div>
    </section>
  );
}
