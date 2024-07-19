import React from "react";
import './index.css'
function ButtonNEw() {

  return (
    <div className="block">
      <a class="download" href="#platforms"></a>
      <div class="platforms" id="platforms">
        <a href="#windows" data-os="windows"></a>
        <a href="#mac" data-os="mac"></a>
        <a href="#linux" data-os="linux"></a>
      </div>
      <div class="installer" id="windows">
        <div class="info" data-weight="753 KB"></div>
        <div class="details">
          <p>Windows installer</p>
          <span>Version 1.0.6</span>
          <ul>
            <li>List item number one</li>
            <li>List item number two</li>
            <li>List item number three</li>
            <li>List item number four</li>
          </ul>
        </div>
        <label for="progressWindows">
          <input type="radio" id="progressWindows" />
          <span></span>
        </label>
        <a class="close" href="#"></a>
      </div>
      <div class="installer" id="mac">
        <div class="info" data-weight="634 KB"></div>
        <div class="details">
          <p>Mac installer</p>
          <span>Version 1.0.6</span>
          <ul>
            <li>List item number one</li>
            <li>List item number two</li>
            <li>List item number three</li>
            <li>List item number four</li>
          </ul>
        </div>
        <label for="progressMac">
          <input type="radio" id="progressMac" />
          <span></span>
        </label>
        <a class="close" href="#"></a>
      </div>
      <div class="installer" id="linux">
        <div class="info" data-weight="781 KB"></div>
        <div class="details">
          <p>Linux installer</p>
          <span>Version 1.0.6</span>
          <ul>
            <li>List item number one</li>
            <li>List item number two</li>
            <li>List item number three</li>
            <li>List item number four</li>
          </ul>
        </div>
        <label for="progressLinux">
          <input type="radio" id="progressLinux" />
          <span></span>
        </label>
        <a class="close" href="#"></a>
      </div>
    </div>
  );
}

export default ButtonNEw;
