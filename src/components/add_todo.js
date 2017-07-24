import React, {Component} from 'react';


class Add extends Component {
    constructor(props){
        super(props);

        this.state = {
            form: {
                title: '',
                details: ''
            }
        }
    }

    handleChange(event){
        const {value, name} = event.target;
        const {form} = this.state;

        form[name] = value;

        this.setState({
            form: {...form} // {title: form.title, details: form.details}
        });
    }

    addItem(event) {
        event.preventDefault();

        const {form} = this.state;
        this.props.add({...form});

        this.setState({
            form: {
                title: '',
                details: ''
            }
        })
    }

    render(){
        const {form} = this.state;

        return (
            <div className="my-3">
                <form className="form-inline" onSubmit={(event) => this.addItem(event)}>
                    <div className="form-group">
                        <label>Title:</label>
                        <input name="title" onChange={(event) => this.handleChange(event)}
                               value={form.title} className="form-control mx-3"/>
                    </div>
                    <div className="form-group">
                        <label>Details:</label>
                        <input name="details" onChange={(event) => this.handleChange(event)}
                               value={form.details} className="form-control mx-3"/>
                    </div>
                    <button className="btn btn-outline-primary">Add Item</button>
                </form>
            </div>
        )
    }
}

export default Add;