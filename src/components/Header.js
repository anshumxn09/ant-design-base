import { Menu, Drawer } from 'antd'
import React, { useState } from 'react'
import './Header.css';
import {MenuOutlined} from '@ant-design/icons';

const MenuBlock = ({myMode=false}) => {
  return (
    <Menu
        style={{backgroundColor  : "white", color : "black", border : "none", fontSize : "17px"}}
        mode={myMode ? 'inline' : 'horizontal'}
        items={[
          {label : "The Weeknd", key : '1'},
          {label : "Tour",key : '2'},
          {label : "Merchandise",key : '3'},
          {label : "Spotify",key : '4'},
      ]}>
      </Menu>
  )
}
const Header = () => {
  const [openMenu, setMenu] = useState(false);
  return (
    <div className="navBar">
      <div className='mobileIcons'><MenuOutlined style={{fontSize : '20px'}} onClick={() => setMenu(true)} /></div>
      <span className='webMenu'><MenuBlock/></span>
      <Drawer open={openMenu} onClose={() => setMenu(false)} style={{backgroundColor : "black"}} closable={false} placement="left">
        <MenuBlock myMode={true}/>
      </Drawer>
    </div>
  )
}


export default Header