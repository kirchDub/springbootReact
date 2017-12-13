import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
// import "materialize-css/dist/css/materialize.min.css";

class TableSelector extends Component {
  constructor(props) {
    super(props);
    this.onTableSelect = this.onTableSelect.bind(this);
  }

  onTableSelect(event) {
    event.preventDefault();
    this.props.selectAllFrom();
  }
  render() {
    return (
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenu2"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"
        >
          Tables
        </button>

        <ul
          className="dropdown-menu"
          id="dropdown"
          aria-labelledby="dropdownMenuButton"
        >
          <li>
            <a className="dropdown-item" onClick={this.onTableSelect}>
              Crosswalk Table
            </a>
          </li>
          <li>
            <a>Settings Table</a>
          </li>
          <li>
            <a>Some Other Table</a>
          </li>
        </ul>
      </div>
    );
  }
}

function maptStateToProps({ data }) {
  return data;
}

export default connect(maptStateToProps, actions)(TableSelector);
