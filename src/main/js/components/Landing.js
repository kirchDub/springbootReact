import React, { Component } from "react";
import SQLTable from "./SQLTable";
import TableSelector from "./TableSelector";
import { connect } from "react-redux";
import * as actions from "../actions";

class Landing extends Component {
	
  render() {
    console.log("data", this.props.data);
    if (this.props.data) {
      return (
        <div>
          <TableSelector />
          <SQLTable />
        </div>
      );
    } else {
      return (
        <div style={{ textAlign: "center" }}>
          <h3>Select a table</h3>
        </div>
      );
    }
  }
}

function mapStateToProps({ data }) {
  return { data };
}

export default connect(mapStateToProps, actions)(Landing);
