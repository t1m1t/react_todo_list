import React from 'react';


export default props => {

    const list = props.list.map((item, index) => {
        return (
            <li className="list-group-item" key={index}>
                <span className="col-8">{item.title}</span>
                <span className="col-4">
                    <button onClick={() => props.delete(item._id)}
                            className="btn btn-outline-danger">Delete Item</button>
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