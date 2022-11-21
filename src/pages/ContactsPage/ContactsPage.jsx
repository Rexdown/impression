import map from '../../assets/imgs/map.png';

import './ContactsPage.scss';

function ContactsPage() {
  return (
    <div className="contactsPage">
        <div className="contactsPage__content">
            <h2 className="contactsPage__content-title">Контакты</h2>

            <h3 className="contactsPage__content-subtitle">+7 (495) 154-05-63</h3>
            <p className="contactsPage__content-textOne">Ежедневно с 09:00 до 21:00</p>

            <h3 className="contactsPage__content-subtitle">Отдел активации</h3>
            <p className="contactsPage__content-textTwo">+7 (495) 154-96-29</p>
            <p className="contactsPage__content-correction">Понедельник - Пятница с 9:00 до 18:00</p>

            <h3 className="contactsPage__content-subtitle">По вопросам сотрудничества</h3>
            <p className="contactsPage__content-textThree">sales@vpechatlenie.ru</p>

            <p className="contactsPage__content-info">ИП Лазовская А.В. </p>
            <p className="contactsPage__content-info">ОГРНИП: 321508100345101 </p>
            <p className="contactsPage__content-info">ИНН: 504709706196</p>
        </div>
        <img src={map} alt="map" className="contactsPage-map" />
    </div>
  );
}

export default ContactsPage;
