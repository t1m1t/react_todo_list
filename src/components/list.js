import React from 'react';


const List = (props) => {

    const list = props.list.map((item, index) => {
        return (
            <li className="list-group-item" key={index}>
                <span className="col-8">{item.title}</span>
                <span className="col-4">
                    
                </span>
            </li>
        )
    })

    return(
        <div>
            <ul className="list-group">
                {list}
            </ul>
        </div>
    )
}