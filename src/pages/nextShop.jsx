import React from 'react';
import "./nextShop.css";
import logo from "./Logo.png";
import menu from "./menu.png";
import search from "./search.png";
import skipback from "./skip-back.png";
import Navbar from '../components/navbar';

const NextShop = () => {
  return (
    // <div>
    //   <Navbar />
      <div className="next-shopping-list-desktop">
        {/* <div className="header-div">
          <div className="icon-buttons-div">
            <a href="https://foodtodo.herokuapp.com/">
              <img className="master-logo-icon" alt="" src={logo} />
            </a>
            <div className="search-and-menu">
              <img className="search-icon" alt="" src={search} />
              <img className="menu-icon" alt="" src={menu} />
            </div>
          </div>
        </div> */}
        <Navbar />
        <div className="next-shopping-list-title-group">
          <img className="skip-back-icon" alt="" src={skipback} />
          <div className="next-shopping-list">Next Shopping List</div>
        </div>
        <div className="content-div">
          <div className="demo-items-group">
            <div className="items-row-group">
              <div className="demo-items-row-1">
                <div className="item-demo-1">
                  <div className="rectangle-div" />
                  <div className="item-name-div">Item Name</div>
                </div>
                <div className="item-demo-1">
                  <div className="rectangle-div" />
                  <div className="item-name-div">Item Name</div>
                </div>
                <div className="item-demo-1">
                  <div className="rectangle-div" />
                  <div className="item-name-div">Item Name</div>
                </div>
                <div className="item-demo-1">
                  <div className="rectangle-div" />
                  <div className="item-name-div">Item Name</div>
                </div>
              </div>
              <div className="demo-items-row-1">
                <div className="item-demo-1">
                  <div className="rectangle-div" />
                  <div className="item-name-div">Item Name</div>
                </div>
                <div className="item-demo-1">
                  <div className="rectangle-div" />
                  <div className="item-name-div">Item Name</div>
                </div>
                <div className="item-demo-1">
                  <div className="rectangle-div" />
                  <div className="item-name-div">Item Name</div>
                </div>
                <div className="item-demo-1">
                  <div className="rectangle-div" />
                  <div className="item-name-div">Item Name</div>
                </div>
              </div>
              <div className="demo-items-row-1">
                <div className="item-demo-1">
                  <div className="rectangle-div" />
                  <div className="item-name-div">Item Name</div>
                </div>
                <div className="item-demo-1">
                  <div className="rectangle-div" />
                  <div className="item-name-div">Item Name</div>
                </div>
                <div className="item-demo-1">
                  <div className="rectangle-div" />
                  <div className="item-name-div">Item Name</div>
                </div>
                <div className="item-demo-1">
                  <div className="rectangle-div" />
                  <div className="item-name-div">Item Name</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="made-with-by-teamsushi">
          <span>{`Made with `}</span>
          <span className="span">♥</span>
          <span> by TeamSushi</span>
        </div>
      </div>
    // </div>
  );
};

export default NextShop;
