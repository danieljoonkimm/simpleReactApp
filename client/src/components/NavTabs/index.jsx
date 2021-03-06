import React from 'react';
import './navTabs.scss';
import ReactTooltip from 'react-tooltip';
import Popup from 'reactjs-popup'


import NavCat from './NavCat';
import VendorInfo from './VendorInfo';


const NavTabs = () => (
  <div id="navTabs">
    <Popup trigger={<button> Vendor Category</button>} position="bottom center" className="navTab_container">
      <NavCat />
    </Popup>
    <Popup trigger={<button> Vendor Info</button>} position="bottom center" className="navTab_container">
      <VendorInfo />
    </Popup>
    
    {/* <button data-tip data-for="navVendors" data-event='click focus'>Vendor Info
      <ReactTooltip id='navVendors' place="bottom" globalEventOff='click' type="light" aria-haspopup='true' 
        effect="solid" border={true} className="navbar_tooltip"
        clickable={true} scrollHide={false}>
      </ReactTooltip>
    </button> */}
  </div>
);
export default NavTabs;
      {/* <ReactTooltip id='subCat' place="bottom" type="light" 
        effect="solid" border={true} className="navbar_tooltip"
        clickable={true} scrollHide={false}>
        <NavCat />
      </ReactTooltip> */}