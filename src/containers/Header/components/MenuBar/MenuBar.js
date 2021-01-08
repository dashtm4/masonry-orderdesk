import React from 'react';

import BaseButton from '../../../../components/BaseButton';
import BaseSearchInput from '../../../../components/BaseSearchInput';

import { MENUBAR_ITEMS } from './constants';
import './styles.scss';

function MenuBar() {
  return (
    <div id="menubar">
      <div className="container">
        {/* <div className="image-wrapper">
          <img src={require('../../../../assets/images/logo.png')} alt="logo"/>
        </div> */}
        <div className="menubar__links">
          {MENUBAR_ITEMS.map((item, itemIndex) => (
            <div className="menubar__link" key={itemIndex}>
              {item.title}
            </div>
          ))}
          <BaseSearchInput />
          <BaseButton variant="contained" color="primary"/>
        </div>
      </div>
    </div>
  )
}

export default MenuBar;
