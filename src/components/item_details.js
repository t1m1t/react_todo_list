import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions/index';


class Details extends Component {
    componentWillMount() {
        const {id} = this.props.match.params;
        this.props.getSingleTodo(id);
    }

    tsToTime(ts){
        return new Date(parseInt(ts)).toLocaleString();
    }

    handleDelete(id){
        this.props.deleteToDo(id).then(() => {
            this.props.history.push("/");
        })
    }

    render(){
        const { single } = this.props;
        if (!single){
            return <h1>Loading...</h1>
        }
        console.log('Item:', single);
        return (
            <div className="card mt-5">
                <div className="card-block">
                    <h2 className="card-title">Item Title {single.title}</h2>
                    <h4 className="card-subtitle mb-2 text-muted">Item Details: {single.details}</h4>
                    <p>Created: {this.tsToTime(single.created)}</p>
                    <p>Item {single.complete ? `was completed ${this.tsToTime(single.completed)}` : 'is not completed'}</p>
                    <Link to="/" className="btn btn-outline-primary mr-2">Go Back</Link>
                    <button className="btn btn-outline-danger mr-2" onClick={() => {this.handleDelete(single._id)}}>Delete</button>
                    <button className={`btn btn-outline-${single.complete ? 'warning' : 'info'}`} onClick={() => {this.props.toggleTodo(single._id)}}>{single.complete ? 'Reopen' : 'Complete'}</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        single: state.todos.single
    }
}

export default connect(mapStateToProps, actions)(Details);