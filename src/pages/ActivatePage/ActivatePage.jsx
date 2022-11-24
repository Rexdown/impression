import phone from '../../assets/imgs/phone.png';
import phoneIcon from '../../assets/icons/phone.svg';
import gifts from '../../assets/imgs/gifts.png';
import packaging from '../../assets/imgs/packagingBig.png'
import certificate from '../../assets/imgs/certificate.png'

import './ActivatePage.scss';

function ActivatePage() {
  return (
    <div className="activatePage">
      <h2 className="activatePage-title">Активация сертификата</h2>

      <div className="activatePage__content">
        <div className="activatePage__left">
            <div className="activatePage__left__instruction">
              <h4 className="activatePage__left__instruction-title">
                Для активации подарочного сертификата вам необходимо:
              </h4>
              <p className="activatePage__left__instruction-step first">
                1. Связаться с менеджером сайта Впечатление по номеру телефона:
              </p>
              <p className="activatePage__left__instruction-phone">
                +7 (495) 154-96-29
              </p>
              <p className="activatePage__left__instruction-step">
                2. Сообщить ему номер сертификата и пин-код, который указан на сертификате.
              </p>
              <p className="activatePage__left__instruction-step">
                3. Запись на впечатление ведётся за 7 и более дней в зависимости от выбранного мероприятия и загруженности.
              </p>
              <p className="activatePage__left__instruction-step last">
                4. Отправиться за новыми впечатлениями и яркими эмоциями!
              </p>
            </div>
            <div className="activatePage__left__help">
              <h4 className="activatePage__left__help-title">Отдел активации</h4>
              <p className="activatePage__left__help-text">
                Понедельник - Пятница с 9:00 до 18:00
              </p>
              <div className="activatePage__left__help__btn">
                <img src={phoneIcon} alt="phoneIcon" className="activatePage__left__help__btn-icon" />
                <p className="activatePage__left__help__btn-text">+7 (495) 154-96-29</p>
              </div>
              <img src={phone} alt="phone" className="activatePage__left__help-phone" />
            </div>
        </div>
        
        <div className="activatePage__middle">
          <h3 className="activatePage__middle-title">Возникли сложности?</h3>
          <p className="activatePage__middle-text">Наша служба качества поможет вам в любой ситуации</p>
          <button className="activatePage__middle-btn">Служба качества</button>
          <img src={gifts} alt="gifts" className="activatePage__middle-gifts" />
        </div>

        <div className="activatePage__right">
            <div className="activatePage__right__packaging">
              <img src={packaging} alt="packaging" className="activatePage__right__packaging-icon" />
              <div className="activatePage__right__packaging__content">
                <h4 className="activatePage__right__packaging__content-title">
                  Подарочная упаковка
                </h4>
                <p className="activatePage__right__packaging__content-price">350 ₽</p>
                <p className="activatePage__right__packaging__content-text">
                  Сертификат выполнен на плотной бумаге и содержит в себе всю необходимую информацию о подарке.
                  Упакован в стильный конверт из приятного материала.
                </p>
              </div>
            </div>

            <div className="activatePage__right__certificate">
              <img src={certificate} alt="certificate" className="activatePage__right__packaging-icon" />
              <div className="activatePage__right__certificate__content">
                <h4 className="activatePage__right__certificate__content-title">
                  Электронный сертификат
                </h4>
                <p className="activatePage__right__certificate__content-price">Бесплатно</p>
                <p className="activatePage__right__certificate__content-text">
                  Вы можете отправить его на e-mail получателю. Сертификат также можно распечатать и вручить лично.
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ActivatePage;
