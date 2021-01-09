import React from 'react';

import Container from '@material-ui/core/Container';

import './styles.scss';

const TOPBAR_ITEMS = [
  { title: 'About' },
  { title: 'Contact Us' },
  { title: 'Help & Support' },
];

function TopBar() {
  return (
    <div id="topbar">
      <Container>
        <div className="topbar__links">
          {TOPBAR_ITEMS.map((item, itemIndex) => (
            <div className="topbar__link" key={itemIndex}>
              {item.title}
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default TopBar;
