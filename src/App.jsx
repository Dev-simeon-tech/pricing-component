import { useState } from "react";
// import { ReactComponent as Blogtop } from "./assets/bg-top.svg";
// import { ReactComponent as BlogBottom } from "./assets/bg-bottom.svg";
import blogBottom from "./assets/bg-bottom.svg";
import blogTop from "./assets/bg-top.svg";

import ToggleButton from "./components/toggle-button/toggle-button.component";
import PricingCard from "./components/pricing-card/pricing-card.component";
import "./App.scss";

const App = () => {
  const cards = [
    {
      label: "Basic",
      priceMonthly: "19.99",
      priceAnnually: "199.99",
      cardTheme: "white",
      benefits: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
    },
    {
      label: "Professional",
      priceMonthly: "24.99",
      priceAnnually: "249.99",
      cardTheme: "purple",
      benefits: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
    },
    {
      label: "Master",
      priceMonthly: "39.99",
      priceAnnually: "399.99",
      cardTheme: "white",
      benefits: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
    },
  ];

  return (
    <>
      <h1>Our pricing</h1>
      <div className='toggle-container'>
        <span>Annually</span>
        <ToggleButton />
        <span>Monthly</span>
      </div>

      <div className='pricings-container'>
        {cards.map((card) => (
          <PricingCard key={card.label} card={card} />
        ))}
      </div>
    </>
  );
};

export default App;
