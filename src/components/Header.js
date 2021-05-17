import React from 'react'
import '../css/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
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
                    <AddCircleOutlinedIcon fontSize="large" />
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon fontSize="large" />
                </IconButton>
                <div className="header__info">
                    <Avatar src={avatar} />
                    <h5>Sophie Johnson</h5>
                </div>
            </div>
        </div>
    )
}

export default Header
