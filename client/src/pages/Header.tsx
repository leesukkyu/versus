import React, { Component, SyntheticEvent } from 'react';
import { MenuOutlined } from '@ant-design/icons';

function Header() {
  return (
    <div className="header-comp">
      <div className="header-box">
        <button className="header-side-menu-btn">
          <MenuOutlined
            style={{
              fontSize: '20px',
            }}
          />
        </button>
        <div className="header-logo-box">로고</div>
        <div className="header-search-box">검색창</div>
        <div className="header-item-end-box">
          <div className="">마이페이지</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
