import { Square } from '../Square/Square';

import './CardTitle.css';

export const CardTitle = ({ children }) => {
  return (
    <div className="card_title">
      <h3>{children}</h3>
      <Square />
    </div>
  );
};
