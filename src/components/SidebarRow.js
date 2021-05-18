import React from 'react'
import '../css/SidebarRow.css'

function SidebarRow({ isActive, Icon, title }) {
    return (
        <div className={`sidebarRow ${isActive}`}>
            {Icon && <Icon />}

            <h6>{title}</h6>
        </div>
    )
}

export default SidebarRow
