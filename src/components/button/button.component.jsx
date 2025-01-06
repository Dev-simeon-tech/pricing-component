import "./button.styles.scss";

const Button = ({ buttonType, children }) => {
  return <button className={`btn ${buttonType}`}>{children}</button>;
};

export default Button;
