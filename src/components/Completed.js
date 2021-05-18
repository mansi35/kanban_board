import React from 'react'
import '../css/ProjectCards.css'
import assigned from '../resources/avatar.jpg'
import assigned1 from '../resources/avatar2.jpg'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Task from './Task'

function Completed() {
    return (
        <div className="todo col-md-3 col-xs-12" style={{borderTop: "#51B960 3px solid"}}>
            <div className="projectCard__header">
                <div style={{display: "flex"}}>
                    <h5>COMPLETED</h5>
                    <h5 style={{marginLeft: "15px"}}>3</h5>
                </div>
                <MoreHorizIcon />
            </div>
            <Task heading="Case studies" assigned={assigned} date="9 December" difficulty="Medium" comments="1" />
            <Task heading="Sketching" assigned={assigned1} date="8 December" difficulty="Low" comments="1" />
            <Task heading="Wireframes" assigned={assigned1} date="8 December" difficulty="High" comments="2" />
        </div>
    )
}

export default Completed
