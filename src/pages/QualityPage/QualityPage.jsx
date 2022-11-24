import React, { useState } from 'react';

import quality from '../../assets/icons/quality.svg';
import arrow from '../../assets/icons/catalog-arrow.svg';
import ok from '../../assets/icons/ok.svg';

import './QualityPage.scss';

function QualityPage() {
  const [activeSelect, setActiveSelect] = useState(false);
  const [selectOption, setSelectOption] = useState('Поблагодарить');
  const [activeApproval, setActiveApproval] = useState(false);
  const [activeSend, setActiveSend] = useState(false);

  return (
    <div className="qualityPage">
        <h2 className="qualityPage-title">Служба качества</h2>

        <div className="qualityPage__container">
          <div className="qualityPage__content">
            <img src={quality} alt="quality" className="qualityPage__content-icon" />
            <h4 className="qualityPage__content-title">
              Нам очень важно, чтобы вы остались довольны качеством наших услуг.
            </h4>
            <p className="qualityPage__content-text">
              Если у вас есть замечания к нашей работе опишите, пожалуйста, подробно сложившуюся ситуацию. 
            </p>
            <p className="qualityPage__content-text">
              Информация будет доведена до руководства нашей компании и проблема обязательно будет решена.
            </p>
            <p className="qualityPage__content-text">
              Мы гарантируем конфиденциальность ваших контактных данных. Они будут использованы только 
              в целях обеспеченя связи между вами и компанией.
            </p>
          </div>

          <div className="qualityPage__forms">
            <div className="qualityPage__forms__left">
              <div 
                className={`qualityPage__forms__left__select${activeSelect ? '-active' : ''}`}
                onClick={() => setActiveSelect(!activeSelect)}
              >
                <div className="qualityPage__forms__left__select__text">
                  <p className="qualityPage__forms__left__select__text-title">
                    Тема обращения
                  </p>
                  <p className="qualityPage__forms__left__select__text-value">
                    {selectOption}
                  </p>
                </div>
                <img 
                  src={arrow} 
                  alt="arrow" 
                  className={`qualityPage__forms__left__select-arrow${activeSelect ? '-active' : ''}`}
                />

                <div className={`qualityPage__forms__left__select__list${activeSelect ? '-active' : ''}`}>
                  <p 
                    className={`qualityPage__forms__left__select__list-item${activeSelect ? '-active' : ''}`}
                    onClick={(e) => setSelectOption('Поблагодарить')}
                  >
                    Поблагодарить
                  </p>
                  <p 
                    className={`qualityPage__forms__left__select__list-item${activeSelect ? '-active' : ''}`}
                    onClick={(e) => setSelectOption('Пожаловаться')}
                  >
                    Пожаловаться
                  </p>
                  <p 
                    className={`qualityPage__forms__left__select__list-item${activeSelect ? '-active' : ''}`}
                    onClick={(e) => setSelectOption('Задать вопрос')}
                  >
                    Задать вопрос
                  </p>
                </div>
              </div>

              <form class="qualityPage__form">
                <div class="qualityPage__form-item">
                  <input type="text" class="qualityPage__form-input" required />
                  <label class="qualityPage__form-label">Имя</label>
                </div>
              </form>

              <form class="qualityPage__form">
                <div class="qualityPage__form-item">
                  <input type="text" class="qualityPage__form-input" required />
                  <label class="qualityPage__form-label">Номер телефона</label>
                </div>
              </form>

              <form class="qualityPage__form">
                <div class="qualityPage__form-item">
                  <input type="text" class="qualityPage__form-input" required />
                  <label class="qualityPage__form-label">E-mail</label>
                </div>
              </form>
            </div>

            <div className="qualityPage__forms__right">
              <form form class="qualityPage__textarea__form">
                <div class="qualityPage__textarea__form-item">
                  <textarea type="text" class="qualityPage__textarea__form-input" required />
                  <label class="qualityPage__textarea__form-label">Текст обращения</label>
                </div>
              </form>

              <button className="qualityPage__forms__right-btn">Отправить</button>

              <div className="qualityPage__forms__right__approval">
                <div 
                  className={`qualityPage__forms__right__approval-checkbox${activeApproval ? '-active' : ''}`}
                  onClick={() => setActiveApproval(!activeApproval)}
                >
                  <img src={ok} alt="ok" className="qualityPage__forms__right__approval-ok" />
                </div>
                <p className="qualityPage__forms__right__approval-text">Я даю согласие на обработку</p>
                <p className="qualityPage__forms__right__approval-text-red">персональных данных</p>
              </div>

              <div className="qualityPage__forms__right__approval">
                <div 
                  className={`qualityPage__forms__right__approval-checkbox${activeSend ? '-active' : ''}`}
                  onClick={() => setActiveSend(!activeSend)}
                >
                  <img src={ok} alt="ok" className="qualityPage__forms__right__approval-ok" />
                </div>
                <p className="qualityPage__forms__right__approval-text">Я не против получать информацию об акциях и скидках</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default QualityPage;
