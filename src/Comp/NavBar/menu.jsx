// src/components/Menu.jsx
import React, { useEffect } from 'react';
import MenuItem from "./menuItem"
import MenuItemComponent from './MenuItemComponent';
import img1 from "../Scroll3Dgrid/img/1.jpg";
import img2 from "../Scroll3Dgrid/img/2.jpg";
import img3 from "../Scroll3Dgrid/img/3.jpg";
import img4 from "../Scroll3Dgrid/img/4.jpg";

const Menu = () => {
  useEffect(() => {
    const menuEl = document.querySelector('.menu');
    new MenuComponent(menuEl);
  }, []);

  return (
    
    <nav className="menu">
      
      <MenuItem name="Guayaquil" images={[img1, img2, img3, img4]} />
      <MenuItem name="Cartagena" images={[img1, img2, img3, img4]} />
    </nav>
  );
};

class MenuComponent {
  constructor(el) {
    this.DOM = { el: el };
    this.DOM.menuItems = this.DOM.el.querySelectorAll('.menu__item');
    this.menuItems = [];
    this.DOM.menuItems.forEach((menuItem) => this.menuItems.push(new MenuItemComponent(menuItem)));
  }
}

export default Menu;
