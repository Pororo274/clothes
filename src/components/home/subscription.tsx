import { ButtonType } from "../../enums/ButtonType";
import Button from "../ui/button";

export default function Subscription() {
  return (
    <section className="subscription">
      <div className="container">
        <div className="subscription-banner">
          <h2 className="h2 subscription__h2">
            Будьте в курсе наших последних новостей
          </h2>
          <form method="POST" action="" className="subscription-form">
            <div className="wrapper subscription-form__wrapper">
              <input
                type="text"
                className="subscription-form__input"
                placeholder="email..."
              />
              <div className="subscription-form-item">
                <Button type={ButtonType.LIGHT}>Отправить</Button>
                <p className="subscription__p">
                  *нажимая отправить вы соглашаетесь получать рассылку
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
