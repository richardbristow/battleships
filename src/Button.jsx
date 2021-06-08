const Button = ({ label, type, onClick }) => (
  <button onClick={onClick} type="button" className={`nes-btn ${type}`}>
    {label}
  </button>
);

export default Button;
