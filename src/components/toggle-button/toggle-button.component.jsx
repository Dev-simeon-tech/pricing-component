import "./toggle-button.styles.scss";
import { useContext } from "react";
import { TogglePriceContext } from "../../context/toggle-price.context";

const ToggleButton = () => {
  const { priceType, setPriceType } = useContext(TogglePriceContext);
  const togglePriceHandler = () => {
    setPriceType(priceType === "annually" ? "monthly" : "annually");
  };
  return (
    <button
      className={`${priceType === "monthly" ? "monthly" : ""} toggle-button`}
      onClick={togglePriceHandler}
    >
      <div className='toggle-switch'></div>
    </button>
  );
};

export default ToggleButton;
