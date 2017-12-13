import React, { Component } from "react";
import { connect } from "react-redux";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { insertInto, deleteRow } from "../actions";
import _ from 'lodash';

require("react-bootstrap-table/dist/react-bootstrap-table.min.css");

class SQLTable extends Component {
  constructor(props) {
    super(props);
    this.afterSaveCell = this.afterSaveCell.bind(this);
    this.onAfterDeleteRow = this.onAfterDeleteRow.bind(this);
  }

  afterSaveCell(row) {
    console.log("onSave!!!", row);
    this.props.insertInto(row);
  }

  createCustomModalHeader(onClose, onSave) {
    const headerStyle = {
      fontWeight: "bold",
      fontSize: "large",
      textAlign: "center",
      backgroundColor: "#eeeeee"
    };

    return (
      <div className="modal-header" style={headerStyle}>
        <h4>Insert new row into crosswalk table</h4>
      </div>
    );
  }

  onAfterSaveCell(row, cellName, cellValue) {
    alert(`Save cell ${cellName} with value ${cellValue}`);

    let rowStr = "";
    for (const prop in row) {
      rowStr += prop + ": " + row[prop] + "\n";
    }

    alert("The whole row :\n" + rowStr);
  }

  onBeforeSaveCell(row, cellName, cellValue) {
    // You can do any validation on here for editing value,
    // return false for reject the editing
    return true;
  }

  search(key, array) {
	    for (var i = 0; i < array.length; i++) {
	      if (array[i].id === key) {
	        return array[i];
	      }
	    }
	  }

	  onAfterDeleteRow(rowKeys) {
	    console.log("rowkey to drop:", rowKeys);
	    var table = this.props.data;

	    var deleterows = [];
	    for (var i = 0; i < rowKeys.length; i++) {
	      deleterows.push(this.search(rowKeys[i], table));
	    }

	    console.log("row", deleterows);

	    this.props.deleteRow(deleterows);
	  }


  render() {
    const cellEditProp = {
      mode: "click",
      blurToSave: true,
      beforeSaveCell: this.onBeforeSaveCell, // a hook for before saving cell
      afterSaveCell: this.onAfterSaveCell // a hook for after saving cell
    };
    const selectRowProp = {
      mode: "checkbox",
      bgColor: "pink"
    };


    if (this.props.data[0]) {
      const options = {
        hideSizePerPage: true,
        sizePerPage: 10,
        prePage: "<",
        nextPage: ">",
        insertModalHeader: this.createCustomModalHeader,
        afterInsertRow: this.afterSaveCell,
        afterDeleteRow: this.onAfterDeleteRow
      };

      return (
        <BootstrapTable
          data={this.props.data}
          pagination={true}
          options={options}
          striped
          hover
          insertRow
          deleteRow={true}
          cellEdit={cellEditProp}
          selectRow={selectRowProp}
        >
          <TableHeaderColumn
            dataField="id"
            dataAlign="center"
            filter={{ type: "TextFilter", defaultValue: "" }}
            isKey
          >
            id
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="providerId"
            dataAlign="center"
            filter={{ type: "TextFilter", defaultValue: "" }}
          >
            Provider Id
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="ndbMarket"
            dataAlign="center"
            filter={{ type: "TextFilter", defaultValue: "" }}
          >
            NDBMarket
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="ndbFeeSchedule"
            dataAlign="center"
            filter={{ type: "TextFilter", defaultValue: "" }}
          >
            NDB Fee Schedule
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="pricingSetId"
            dataAlign="center"
            filter={{ type: "TextFilter", defaultValue: "" }}
          >
            Pricing Set Id
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="parallel_process"
            dataAlign="center"
            filter={{ type: "TextFilter", defaultValue: "" }}
          >
            Parallel
          </TableHeaderColumn>
        </BootstrapTable>
      );
    } else {
      return <div>Data Not Loaded</div>;
    }
  }
}
function mapStateToProps({ data }) {
  return { data };
}

export default connect(mapStateToProps, { insertInto, deleteRow })(SQLTable);
