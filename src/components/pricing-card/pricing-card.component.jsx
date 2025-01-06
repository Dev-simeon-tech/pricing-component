import { useContext } from "react";
import { TogglePriceContext } from "../../context/toggle-price.context";

import Button from "../button/button.component";

import "./pricing-card.styles.scss";

const PricingCard = ({ card }) => {
  const { label, priceMonthly, priceAnnually, cardTheme, benefits } = card;

  const { priceType } = useContext(TogglePriceContext);

  const price = priceType === "monthly" ? priceMonthly : priceAnnually;
  return (
    <div className={`pricing-card ${cardTheme}`}>
      <h2 className='label'>{label}</h2>
      <h3 className='price'>
        <span>&#36;</span> {price}
      </h3>

      <ul className='benefits'>
        {benefits.map((benefit) => (
          <li key={benefit} className='benefit'>
            {benefit}
          </li>
        ))}
      </ul>
      <Button buttonType={cardTheme}>Learn More</Button>
    </div>
  );
};

export default PricingCard;
