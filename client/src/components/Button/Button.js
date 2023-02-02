import './Button.css';

export const Button = (props) => {
  const { onClick, color, children } = props;
  const style = color === 'black' ? 'black' : 'white';
  return (
    <button type="button" onClick={onClick} className={`button ${style}`}>
      {children}
    </button>
  );
};
