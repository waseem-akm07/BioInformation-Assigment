import React, { Component } from "react";
import { connect } from "react-redux";

class BIOList extends Component {

  render() {
    var list = this.props.BIOList;

    return (
      <div>
        <h1>List</h1>
        <ul>
          {list && list.map(el => (
            <div key={el.id}>
              <label>FirstName : </label><label>{el.data && el.data.firstName}</label> <br />
              <label>LastName : </label><label>{el.data && el.data.lastName}</label>  <br />
              <label>Company : </label><label>{el.data && el.data.companyName}</label> <br />
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { BIOList: state.data }
};

export default connect(mapStateToProps)(BIOList);