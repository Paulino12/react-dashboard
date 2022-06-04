import React, { useContext } from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SystemSecurityUpdateGoodIcon from '@mui/icons-material/SystemSecurityUpdateGood';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { DarkModeContext } from '../../context/darkModeContext';

import {Link} from 'react-router-dom'

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext)
    return (
        <div className='sidebar'>
            <div className='top'>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <span className='logo'>Admin</span>
                </Link>
            </div>
            <hr />
            <div className='center'>
                <ul>
                    <p className='title'>MAIN</p>
                    <li>
                        <DashboardIcon className='icon' />
                        <span>Dashboard</span>
                    </li>
                    <p className='title'>LISTS</p>
                    <li>
                        <Link to="/users" style={{ textDecoration: 'none' }}>
                            <PersonOutlineIcon className='icon' />
                            <span>Users</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" style={{ textDecoration: 'none' }}>
                            <InventoryIcon className='icon' />
                            <span>Products</span>
                        </Link>
                    </li>
                    <li>
                        <CreditCardIcon className='icon' />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className='title'>USEFUL LINKS</p>
                    <li>
                        <QueryStatsIcon className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsActiveIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className='title'>SERVICE</p>
                    <li>
                        <SystemSecurityUpdateGoodIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className='title'>USER</p>
                    <li>
                        <AccountCircleIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className='bottom'>
                <div className='colorOptions' onClick={() => dispatch({type: "LIGHT"})}></div>
                <div className='colorOptions' onClick={() => dispatch({type: "DARK"})}></div>
            </div>
        </div>
    )
}

export default Sidebar