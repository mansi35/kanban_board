import React from 'react'
import '../css/SidebarRow.css'

function SidebarRow({ Icon, title }) {
    return (
        <div className="sidebarRow">
            {Icon && <Icon />}

            <h6>{title}</h6>
        </div>
    )
}

export default SidebarRow
