const Button = ({ label, type }) => (
  <button type="button" className={`nes-btn ${type}`}>
    {label}
  </button>
);

export default Button;
