import React from 'react';
import './modal.css';


export default props => {
    return (
        <div className="del-modal">
            <div className="del-modal-content">
                <p>Are you sure you want to delete to do item:</p>
                <p>Feed the bear</p>
                <button className="btn btn-outline-success">Confirm</button>
                <button className="btn btn-outline-danger mr-2">Cancel</button>
            </div>
        </div>
    )
}