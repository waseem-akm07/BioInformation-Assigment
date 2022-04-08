import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addData } from '../Actions/action'


class BIO extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            firstName: "",
            lastName: "",
            companyName: ""
        };
    }

    handleChange = (e) => {
        this.setState({...this.state, [e.target.name]: e.target.value})
    }

    onSubmit = (event)=>{
        event.preventDefault();
        const data = this.state;
        data.id = Math.random();
        this.props.addData({ data });
        this.setState({ firstName: "", lastName: "", companyName: "" });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>FirstName: </label>
                        <input type="text"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>LastName: </label>
                        <input type="text"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Company: </label>
                        <input type="text"
                            name="companyName"
                            value={this.state.companyName}
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <button type="submit">
                            Add
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addData: data => dispatch(addData(data))
    };
  }

  const Form = connect(
    null,
    mapDispatchToProps
  )(BIO);
  
  export default Form;