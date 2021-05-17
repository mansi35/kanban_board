import React from 'react'
import '../css/Sidebar.css'
import SidebarRow from './SidebarRow'
import Logo from '../resources/logo.svg';
import SpeedIcon from '@material-ui/icons/Speed';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import MoveToInboxOutlinedIcon from '@material-ui/icons/MoveToInboxOutlined';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
function Sidebar() {
    return (
        <div className="sidebar">
            <img
                className="sidebar__logo"
                src={Logo}
                alt="website logo"
            />
            <SidebarRow Icon={SpeedIcon} title="Dashboard" />
            <SidebarRow Icon={FolderOpenOutlinedIcon} title="Projects" />
            <SidebarRow Icon={MoveToInboxOutlinedIcon} title="Inbox" />
            <SidebarRow Icon={TodayOutlinedIcon} title="Calender" />
            <SidebarRow Icon={CheckCircleOutlineRoundedIcon} title="Tasks" />
            <SidebarRow Icon={AssignmentOutlinedIcon} title="Reports" />
            <SidebarRow Icon={SettingsOutlinedIcon} title="Settings" />
        </div>
    )
}

export default Sidebar
