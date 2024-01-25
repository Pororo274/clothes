import adidas from "../../assets/icons/brands/adidas.svg";
import nike from "../../assets/icons/brands/nike.svg";
import newbalance from "../../assets/icons/brands/newbalance.svg";
import puma from "../../assets/icons/brands/puma.svg";

export default function Partners() {
  const icons = [adidas, nike, newbalance, puma];

  return (
    <section className="partners">
      <div className="container">
        <h2 className="h2">Наши партнеры</h2>
        <div className="wrapper partners__wrappper">
          {icons.map((x, i) => (
            <figure className="partners-icon" key={i}>
              <img src={x} alt="" className="partners-icon_" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
