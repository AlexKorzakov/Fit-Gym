import { ReactComponent as SquareIcon } from '../../resources/square.svg';
import './Square.css';

export const Square = (props) => {
  const { color } = props;
  let squareStyle = '';
  switch (color) {
    case 'gray':
      squareStyle = 'square_gray';
      break;
    case 'white':
      squareStyle = 'square_white';
      break;
    default:
      squareStyle = 'square_black';
  }

  return (
    <div className="square">
      <SquareIcon className={`icon ${squareStyle}`} />
    </div>
  );
};
