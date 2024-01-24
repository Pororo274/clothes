import banner from "../assets/img/banner.jpg";

export default function Banner() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-banner">
          <img src={banner} alt="" className="hero-banner__i" />
        </div>
      </div>
    </section>
  );
}
