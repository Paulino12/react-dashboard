import React, { useContext } from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ListIcon from '@mui/icons-material/List';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext)
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchIcon />
        </div>
        <div className='items'>
          <div className="item">
            <LanguageIcon className='icon' />
            English
          </div>
          <div className="item" style={{ cursor: 'pointer' }}>
            <DarkModeIcon className='icon' onClick={() => dispatch({ type: "TOGGLE" })} />
          </div>
          <div className="item">
            <FullscreenIcon className='icon' />
          </div>
          <div className="item">
            <NotificationsActiveIcon className='icon' />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleIcon className='icon' />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListIcon className='icon' />
          </div>
          <div className="item">
            <img 
            src='https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' 
            alt='' className='avatar'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar