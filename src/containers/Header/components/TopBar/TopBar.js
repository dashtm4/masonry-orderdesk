import React from 'react';

import { TOPBAR_ITEMS } from './constants';
import './styles.scss';

function TopBar() {
  return (
    <div id="topbar">
      <div className="container">
        <div className="topbar__links">
          {TOPBAR_ITEMS.map((item, itemIndex) => (
            <div className="topbar__link" key={itemIndex}>
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopBar;
