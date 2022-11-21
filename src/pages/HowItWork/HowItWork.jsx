import { howItWorkSteps, howItWorkCards } from '../../constants';

import './HowItWork.scss';

const StepItem = (step) => {
  return (
    <div className="howItWork__steps__item">
      <p className="howItWork__steps__item-number">{step.number}</p>
      <h4 className="howItWork__steps__item-title">{step.title}</h4>
      <p className="howItWork__steps__item-text">{step.text}</p>
    </div>
  )
}

const CardItem = (item) => {
  return (
    <div className="howItWork__cards__item">
      <img src={item.url} alt="icon" className="howItWork__cards__item-icon" />
      <h3 className="howItWork__cards__item-title">{item.title}</h3>
      {item.lis.map((li) => (
        <p className="howItWork__cards__item-li">{li}</p>
      ))}
      <button className="howItWork__cards__item-btn">Смотреть наборы</button>
    </div>
  )
}

function HowItWork() {
  return (
    <div className="howItWork">
      <h2 className="howItWork-title">Как это работает?</h2>

      <div className="howItWork__steps">
        {howItWorkSteps.map((step) => (
          StepItem(step)
        ))}
      </div>

      <div className="howItWork__cards">
        {howItWorkCards.map((item) => (
          CardItem(item)
        ))}
      </div>
    </div>
  );
}

export default HowItWork;
