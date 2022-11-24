import gift from '../../assets/icons/gift.svg';
import money from '../../assets/icons/money.svg';
import bank from '../../assets/icons/bank.svg';
import creditCard from '../../assets/icons/credit-card.svg';

import gifts from '../../assets/imgs/bigGifts.png';
import men from '../../assets/imgs/men.png';


import './DeliveryPage.scss';

function DeliveryPage() {
  return (
    <div className="deliveryPage">
      <h2 className="deliveryPage-title">Доставка и оплата</h2>
      <p className="deliveryPage-text">
        У нас своя курьерская служба. Это позволяет нам обеспечивать быструю и 
        своевременную доставку по Москве и ближайшей области.
      </p>

      <h3 className="deliveryPage-subtitle">Способы получения</h3>

      <div className="deliveryPage__cards">
        <div className="deliveryPage__cards__item">
          <img src={gift} alt="gift" className="deliveryPage__cards__item-icon" />
          <h4 className="deliveryPage__cards__item-title">Стандартная доставка</h4>
          <div className="deliveryPage__cards__item-line">
            <p className="deliveryPage__cards__item-text-bold">350 ₽</p>
            <p className="deliveryPage__cards__item-text">в пределах МКАД.</p>
          </div>
          <div className="deliveryPage__cards__item-line-end">
            <p className="deliveryPage__cards__item-text">C</p>
            <p className="deliveryPage__cards__item-text-red">9:00</p>
            <p className="deliveryPage__cards__item-text">до</p>
            <p className="deliveryPage__cards__item-text-red">21:00</p>
            <p className="deliveryPage__cards__item-text">без выходных.</p>
          </div>
          <div className="deliveryPage__cards__item-line">
            <p className="deliveryPage__cards__item-text-main">
              Доставка осуществляется в день заказа или в любой удобный для вас день. 
              Вы можете выбрать один из трех интервалов: с 9:00 до 14:00 / с 14:00 до 18:00 / с 18:00 до 21:00
            </p>
          </div>
        </div>

        <div className="deliveryPage__cards__item">
          <img src={gift} alt="gift" className="deliveryPage__cards__item-icon" />
          <h4 className="deliveryPage__cards__item-title">Срочная доставка</h4>
          <div className="deliveryPage__cards__item-line">
            <p className="deliveryPage__cards__item-text-bold">500 ₽</p>
            <p className="deliveryPage__cards__item-text">в пределах МКАД.</p>
          </div>
          <div className="deliveryPage__cards__item-line-end">
            <p className="deliveryPage__cards__item-text">
              В течение трех часов с момента заказа.
            </p>
          </div>
          <div className="deliveryPage__cards__item-line">
            <p className="deliveryPage__cards__item-text-main">
              Заказы на срочную доставку принимаются до 15:00.
            </p>
          </div>
        </div>

        <div className="deliveryPage__cards__item">
          <img src={gift} alt="gift" className="deliveryPage__cards__item-icon" />
          <h4 className="deliveryPage__cards__item-title">Самовывоз</h4>
          <div className="deliveryPage__cards__item-line-main">
            <p className="deliveryPage__cards__item-text-main">Мы открыты ежедневно с</p>
            <p className="deliveryPage__cards__item-text-main-red">9:00</p>
            <p className="deliveryPage__cards__item-text-main">до</p>
            <p className="deliveryPage__cards__item-text-main-red">21:00.</p>
            <p className="deliveryPage__cards__item-text-main">Предварительно необходимо</p>
          </div>
          <div className="deliveryPage__cards__item-line-main">
            <p className="deliveryPage__cards__item-text-main">оформить заказ.</p>
          </div>
          <div className="deliveryPage__cards__item-line-main">
            <p className="deliveryPage__cards__item-text-main">Перед приездом обязательно свяжитесь с менеджером по</p>
          </div>
          <div className="deliveryPage__cards__item-line-main">
            <p className="deliveryPage__cards__item-text-main">Телефону</p>
            <p className="deliveryPage__cards__item-text-main-red">+7 (495) 154-05-63</p>
            <p className="deliveryPage__cards__item-text-main">и уточните адрес для самовывоза.</p>
          </div>
        </div>

        <div className="deliveryPage__cards__item">
          <img src={gift} alt="gift" className="deliveryPage__cards__item-icon" />
          <h4 className="deliveryPage__cards__item-title">Доставка за МКАД</h4>
          <div className="deliveryPage__cards__item-line-end">
            <p className="deliveryPage__cards__item-text-bold">От 500 ₽,</p>
            <p className="deliveryPage__cards__item-text">рассчитывается индивидуально.</p>
          </div>
          <div className="deliveryPage__cards__item-line-main">
            <p className="deliveryPage__cards__item-text-main">
              Доставка в другие города осуществляется экспресс-службой UPS или TNT по их расценкам.
            </p>
          </div>
        </div>

        <div className="deliveryPage__cards__item">
          <img src={gift} alt="gift" className="deliveryPage__cards__item-icon" />
          <h4 className="deliveryPage__cards__item-title">Доставка сразу получателю</h4>
          <div className="deliveryPage__cards__item-line">
            <p className="deliveryPage__cards__item-text">
              Оплатите подарок и выезд курьера онлайн, и мы доставим подарок сразу в руки получателю!
            </p>
          </div>
        </div>

        <div className="deliveryPage__cards__item">
          <img src={gift} alt="gift" className="deliveryPage__cards__item-icon" />
          <h4 className="deliveryPage__cards__item-title">Электронный сертификат</h4>
          <div className="deliveryPage__cards__item-line-end">
            <p className="deliveryPage__cards__item-text-bold">Мгновенная</p>
            <p className="deliveryPage__cards__item-text">доставка на почту</p>
          </div>
          <div className="deliveryPage__cards__item-line-main">
            <p className="deliveryPage__cards__item-text-main">Мы открыты ежедневно с</p>
            <p className="deliveryPage__cards__item-text-main-red">9:00</p>
            <p className="deliveryPage__cards__item-text-main">до</p>
            <p className="deliveryPage__cards__item-text-main-red">21:00.</p>
            <p className="deliveryPage__cards__item-text-main">Предварительно необходимо</p>
          </div>
          <div className="deliveryPage__cards__item-line-main">
            <p className="deliveryPage__cards__item-text-main">оформить заказ.</p>
          </div>
          <div className="deliveryPage__cards__item-line-main">
            <p className="deliveryPage__cards__item-text-main">Перед приездом обязательно свяжитесь с менеджером по</p>
          </div>
          <div className="deliveryPage__cards__item-line-main">
            <p className="deliveryPage__cards__item-text-main">Телефону</p>
            <p className="deliveryPage__cards__item-text-main-red">+7 (495) 154-05-63</p>
            <p className="deliveryPage__cards__item-text-main">и уточните адрес для самовывоза.</p>
          </div>
        </div>
      </div>

      <h3 className="deliveryPage-subtitle">Способы оплаты</h3>

      <div className="deliveryPage__minicards">
        <div className="deliveryPage__minicards__item">
          <img src={money} alt="money" className="deliveryPage__minicards__item-icon" />
          <h4 className="deliveryPage__minicards__item-title">Наличными курьеру</h4>
        </div>
        <div className="deliveryPage__minicards__item">
          <img src={bank} alt="bank" className="deliveryPage__minicards__item-icon" />
          <h4 className="deliveryPage__minicards__item-title">Банковским переводом</h4>
        </div>
        <div className="deliveryPage__minicards__item">
          <img src={creditCard} alt="Credit Card" className="deliveryPage__minicards__item-icon" />
          <h4 className="deliveryPage__minicards__item-title">Кредитной картой</h4>
        </div>
      </div>

      <div className="deliveryPage__help">
        <h3 className="deliveryPage__help-title">Остались вопросы?</h3>
        <p className="deliveryPage__help-text">Закажите обратный звонок или свяжитесь с нами.</p>
        <p className="deliveryPage__help-text">Ежедневно с 9:00 до 21:00</p>
        <button className="deliveryPage__help-btn">+7 (495) 154-01-87</button>

        <img src={gifts} alt="gifts" className="deliveryPage__help-gifts" />
        <img src={men} alt="men" className="deliveryPage__help-men" />
      </div>
    </div>
  );
}

export default DeliveryPage;
