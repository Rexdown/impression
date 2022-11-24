import React, { useState, useEffect } from 'react';

import { shoppingCartItems, shoppingCartDelivery } from '../../constants';

import './ShoppingCart.scss';

const ReceipItem = (item, removeItem, addCount, removeCount) => {
  return (
    <div className="shoppingCart__receipt__list__item">
      <div className="shoppingCart__receipt__list__item__left">
        <img src={item.img} alt="img" className="shoppingCart__receipt__list__item__left-img" />
        <div className="shoppingCart__receipt__list__item__left__counter">
          <p
            className="shoppingCart__receipt__list__item__left__counter-action"
            onClick={() => removeCount(item.id)}
          >
            -
          </p>
          <p className="shoppingCart__receipt__list__item__left__counter-value">{`${item.count} шт.`}</p>
          <p 
            className="shoppingCart__receipt__list__item__left__counter-action"
            onClick={() => addCount(item.id)}
          >
            +
          </p>
        </div>
      </div>

      <div className="shoppingCart__receipt__list__item__right">
        <div className="shoppingCart__receipt__list__item__right-name">{item.name}</div>
        <div className="shoppingCart__receipt__list__item__right__info">
          {item.info.map((text) => (
            <p className="shoppingCart__receipt__list__item__right__info-item">{text}</p>
          ))}
        </div>
        <p className="shoppingCart__receipt__list__item__right-price">{`${item.price} ₽`}</p>
        <div className="shoppingCart__receipt__list__item__right__actions">
          <p className="shoppingCart__receipt__list__item__right__actions-item">Изменить</p>
          <p 
            className="shoppingCart__receipt__list__item__right__actions-item"
            onClick={() => removeItem(item.id)}
          >
            Удалить
          </p>
        </div>
      </div>
    </div>
  )
}

const DeliveryItem = (item, dileveryActive, setDileveryActive) => {
  return (
    <div 
      className={`shoppingCart__info__delivery__item${dileveryActive === item.id ? '-active' : ''}`}
      onClick={() => setDileveryActive(item.id)}
    >
      <h4 className="shoppingCart__info__delivery__item-title">{item.title}</h4>
      <p className="shoppingCart__info__delivery__item-price">{item.price}</p>
      <p className="shoppingCart__info__delivery__item-text">{item.text}</p>
    </div>
  )
}

function ShoppingCart() {
  const [productsArr, setProductsArr] = useState(shoppingCartItems);
  const [dileveryActive, setDileveryActive] = useState(1);
  const [productsPrice, setProductsPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentActive, setPaymentActive] = useState(false);

  useEffect(() => {
    let price = 0;

    productsArr.forEach((item) => {
      price += item.price
    })

    setProductsPrice(price);
    if (dileveryActive === 1) {
      setTotalPrice(price !== 0 ? price + 350 : 0)
    } else if (dileveryActive !== 4) {
      setTotalPrice(price !== 0 ? price + 500 : 0)
    } else {
      setTotalPrice(price)
    }

  }, [productsArr, dileveryActive])

  const removeItem = (id) => {
    setProductsArr(productsArr.filter((item) => item.id !== id))
  }

  const addCount = (id) => {
    const tempArr = [];

    productsArr.forEach((item) => {
      if (item.id === id) {
        tempArr.push({
          price: item.price += item.price / item.count,
          count: item.count++,
          ...item,
        })
      } else {
        tempArr.push(item)
      }
    })

    console.log(tempArr)

    setProductsArr(tempArr)
  }

  const removeCount = (id) => {
    const tempArr = [];

    productsArr.forEach((item) => {
      if (item.id === id && item.count > 1) {
        tempArr.push({
          price: item.price -= item.price / item.count,
          count: item.count--,
          ...item,
        })
      } else if (item.id !== id) {
        tempArr.push(item)
      }
    })

    console.log(tempArr)

    setProductsArr(tempArr)
  }

  return (
    <div className="shoppingCart">
      <h2 className="shoppingCart-title">Корзина</h2>
      {productsArr.length > 0
        ? <>
            <div className="shoppingCart__content">
              <div className="shoppingCart__receipt">
                <div className="shoppingCart__receipt__list">
                  {productsArr.map((item) => (
                    ReceipItem(item, removeItem, addCount, removeCount)
                  ))}
                </div>
                <div className="shoppingCart__receipt__total">
                  <div className="shoppingCart__receipt__total__line">
                    <p className="shoppingCart__receipt__total__line-name">{`${productsArr.length} шт.`}</p>
                    <div className="shoppingCart__receipt__total__line-dots" />
                    <p className="shoppingCart__receipt__total__line-price">{`${productsPrice} ₽`}</p>
                  </div>
                  <div className="shoppingCart__receipt__total__line">
                    <p className="shoppingCart__receipt__total__line-name">Доставка</p>
                    <div className="shoppingCart__receipt__total__line-dots" />
                    <p className="shoppingCart__receipt__total__line-price">
                      {`${dileveryActive === 1 ? 350 : dileveryActive === 4 ? 0 : 500} ₽`}
                    </p>
                  </div>
                  <div className="shoppingCart__receipt__total__price">
                    <p className="shoppingCart__receipt__total__price-text">Итого:</p>
                    <p className="shoppingCart__receipt__total__price-text-red">{`${totalPrice} ₽`}</p>
                  </div>
                </div>
              </div>

              <div className={`shoppingCart__info${dileveryActive !== 4 ? '-big' : ''}`}>
                <h3 className="shoppingCart__info-title">
                  Ваши данные
                </h3>
                <div className="shoppingCart__info__forms">
                  <form class="shoppingCart__info__forms__form">
                    <div class="shoppingCart__info__forms__form-item">
                      <input type="text" class="shoppingCart__info__forms__form-input" required />
                      <label class="shoppingCart__info__forms__form-label">Имя</label>
                    </div>
                  </form>

                  <form class="shoppingCart__info__forms__form">
                    <div class="shoppingCart__info__forms__form-item">
                      <input type="text" class="shoppingCart__info__forms__form-input" required />
                      <label class="shoppingCart__info__forms__form-label">Номер телефона</label>
                    </div>
                  </form>

                  <form class="shoppingCart__info__forms__form">
                    <div class="shoppingCart__info__forms__form-item">
                      <input type="text" class="shoppingCart__info__forms__form-input" required />
                      <label class="shoppingCart__info__forms__form-label">E-mail</label>
                    </div>
                  </form>
                </div>

                <h3 className="shoppingCart__info-title">
                  Способ получения
                </h3>
                <div className="shoppingCart__info__delivery">
                  {shoppingCartDelivery.map((item) => (
                    DeliveryItem(item, dileveryActive, setDileveryActive)
                  ))}
                </div>

                {dileveryActive !== 4
                  ? <div className="shoppingCart__info__deliveryInfo">
                      <h3 className="shoppingCart__info__deliveryInfo-title">Подробности доставки</h3>

                      <div className="shoppingCart__info__deliveryInfo__forms">
                        <form class="shoppingCart__info__deliveryInfo__forms__form">
                          <div class="shoppingCart__info__deliveryInfo__forms__form-item">
                            <input type="text" class="shoppingCart__info__deliveryInfo__forms__form-input" required />
                            <label class="shoppingCart__info__deliveryInfo__forms__form-label">Адрес</label>
                          </div>
                        </form>

                        <form class="shoppingCart__info__deliveryInfo__forms__form">
                          <div class="shoppingCart__info__deliveryInfo__forms__form-item">
                            <input type="text" class="shoppingCart__info__deliveryInfo__forms__form-input" required />
                            <label class="shoppingCart__info__deliveryInfo__forms__form-label">Дата доставки</label>
                          </div>
                        </form>

                        <form class="shoppingCart__info__deliveryInfo__forms__form">
                          <div class="shoppingCart__info__deliveryInfo__forms__form-item">
                            <input type="text" class="shoppingCart__info__deliveryInfo__forms__form-input" required />
                            <label class="shoppingCart__info__deliveryInfo__forms__form-label">Время доставки</label>
                          </div>
                        </form>
                      </div>

                      <form class="shoppingCart__info__deliveryInfo__form">
                        <div class="shoppingCart__info__deliveryInfo__form-item">
                          <input type="text" class="shoppingCart__info__deliveryInfo__form-input" required />
                          <label class="shoppingCart__info__deliveryInfo__form-label">Комментарий</label>
                        </div>
                      </form>
                    </div>
                  : ''
                }

                <h3 className="shoppingCart__info-title">
                  Способ оплаты
                </h3>
                <div className="shoppingCart__info__paymentType">
                  <div 
                    className={`shoppingCart__info__paymentType-checkbox${paymentActive ? '-active' : ''}`}
                    onClick={() => setPaymentActive(true)}
                  />
                  <p className="shoppingCart__info__paymentType-text">На сайте</p>
                  <p className="shoppingCart__info__paymentType-text-gray">(МИР, VISA, MasterCard, электронные деньги и др.)</p>
                </div>

                <div className="shoppingCart__info__paymentType">
                  <div 
                    className={`shoppingCart__info__paymentType-checkbox${!paymentActive ? '-active' : ''}`}
                    onClick={() => setPaymentActive(false)}
                  />
                  <p className="shoppingCart__info__paymentType-text">При получении</p>
                  <p className="shoppingCart__info__paymentType-text-gray">(Наличными или банковской картой)</p>
                </div>

                <div className="shoppingCart__info__submit">
                  <button className="shoppingCart__info__submit-btn">Оформить заказ</button>
                  <div className="shoppingCart__info__submit__textWrapper">
                    <div className="shoppingCart__info__submit__line">
                      <p className="shoppingCart__info__submit__line-text">Нажимая кнопку, вы принимете условие</p>
                      <a href="#" className="shoppingCart__info__submit__line-link">Оферты</a>
                      <p className="shoppingCart__info__submit__line-text">и даете согласие на обработку </p>
                    </div>
                    <div className="shoppingCart__info__submit__line">
                      <p className="shoppingCart__info__submit__line-text">персональных данных в соответствии с</p>
                      <a href="#" className="shoppingCart__info__submit__line-link">Положением о персональных данных</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        : <>
            <p className="shoppingCart-text">Сейчас в корзине пусто</p>
            <button className="shoppingCart-btn">В каталог подарков</button>
          </>
      }
    </div>
  );
}

export default ShoppingCart;
