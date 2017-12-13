import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div className="navbar-nav nav navbar-right">
            <li key="0" className="align-right" >
              <a href="/auth/ldap">Login</a>
            </li>
          </div>
        );
      default:
        return (
          <div className="navbar-nav nav navbar-right">
            <li key="1" className="align-right">
              <a href="/api/logout">Logout</a>
            </li>
          </div>
        );
    }
  }
  render() {
    return (
      <nav>
        <div className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a key="navbar" href={this.props.data ? "/" : "/"} className="navbar-brand">
                Cirrus NDB Crosswalk
              </a>
            </div>
            <ul key="login" className="right">
              {this.renderContent()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
