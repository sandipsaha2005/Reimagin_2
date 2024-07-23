// src/components/Menu.jsx
import React, { useEffect } from "react";
import MenuItem from "./menuItem";
import MenuItemComponent from "./MenuItemComponent";
import img1 from "../Scroll3Dgrid/img/1.jpg";
import img2 from "../Scroll3Dgrid/img/2.jpg";
import img3 from "../Scroll3Dgrid/img/3.jpg";
import img4 from "../Scroll3Dgrid/img/4.jpg";

const Menu = () => {
  useEffect(() => {
    const menuEl = document.querySelector(".menu");
    new MenuComponent(menuEl);
  }, []);

  return (
    <nav className="menu">
      <MenuItem
        name="HOME"
        images={[
          "https://akmwebstatic.yuanzhanapp.com/web/admin/image/32451262d5189ba5b26671f5242d1b2a.jpg",
          "https://static.wikia.nocookie.net/mobile-legends/images/3/32/Moniyan_Empire.jpg",
        ]}
      />
      <MenuItem
        name="NEWS"
        images={[
          "https://www.dexerto.com/cdn-cgi/image/width=3840,quality=60,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/02/22/mobile-legends-adventure-tier-list.jpg",
          "https://cdnb.artstation.com/p/assets/images/images/046/923/683/large/xiirenity-akas5.jpg?1646313213",
        ]}
      />
      <MenuItem
        name="HEROS"
        images={[
          "https://i.pinimg.com/originals/73/dd/d3/73ddd333d6557025df3c8332249d6db2.jpg",
          "https://static.wikia.nocookie.net/mobile-legends/images/b/be/V.E.N.O.M._squad_wall.jpg",
        ]}
      />
      <MenuItem
        name="VIDEOS"
        images={[
          "https://wallpapers.com/images/hd/mobile-legend-background-1kzamkmmm1t1f144.jpg",
          "https://wallpapers.com/images/hd/alucard-with-mobile-legends-logo-e780n03vca6thx6d.jpg",
        ]}
      />
      <MenuItem
        name="MORE"
        images={[
          "https://www.bhmpics.com/downloads/mobile-legends-2020-Wallpapers/11.wallpaper-mobile-legend-hd.jpg",
          "https://wallpapers.com/images/hd/mobile-legends-background-mqjdqd30a1rd0gox.jpg",
        ]}
      />
    </nav>
  );
};

class MenuComponent {
  constructor(el) {
    this.DOM = { el: el };
    this.DOM.menuItems = this.DOM.el.querySelectorAll(".menu__item");
    this.menuItems = [];
    this.DOM.menuItems.forEach((menuItem) =>
      this.menuItems.push(new MenuItemComponent(menuItem))
    );
  }
}

export default Menu;
