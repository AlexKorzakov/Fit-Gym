import './Dropdown.css';
import { ReactComponent as ArrowIcon } from '../../resources/arrow.svg';
import { useState } from 'react';

export const Dropdown = ({ value, arr, func }) => {
  const [ddClick, setDdClick] = useState(false);
  return (
    <>
      <div className="dropdown_div" onClick={() => setDdClick(!ddClick)}>
        <span className="select_span">{value}</span>
        <ArrowIcon className={ddClick ? 'reverse' : null} />
      </div>
      {ddClick ? (
        <div className="dropdown_li">
          {arr.map((item) => {
            return (
              <div className="select_div">
                <li
                  className="select_li"
                  key={item}
                  onClick={() => {
                    func(item);
                    setDdClick(!ddClick);
                  }}
                >
                  {item}
                </li>
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
};
