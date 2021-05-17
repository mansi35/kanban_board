import React from 'react'
import '../css/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { Avatar, IconButton } from '@material-ui/core';
import avatar from '../resources/avatar.jpg'

function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            
            <div className="header__right">
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <div className="header__info">
                    <Avatar src={avatar} />
                    <h4>Sophie Johnson</h4>
                </div>
            </div>
        </div>
    )
}

export default Header
