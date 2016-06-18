import { Col, Nav, Row } from 'react-bootstrap';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
const packageInfo = require('../../../package.json');

class Header extends Component {
  isLinkActive(pathname) {
    return this.context.router.isActive(pathname) ? 'active' : '';
  }
  render() {
    return (
      <header>
        <Row className="header">
          <Col md={6}>
            <Link to={`/${packageInfo.name}`}>
              <h1 className="title">
                web-audio-api-archive
                &nbsp;
                <small>version {packageInfo.version}</small>
              </h1>
            </Link>
          </Col>
          <Col md={6}>
            <Nav bsStyle="pills">
              <li key="home" className={
                  this.isLinkActive(`/${packageInfo.name}`) +
                  this.isLinkActive(`/${packageInfo.name}/home`)}>
                <Link to={`/${packageInfo.name}`}>Home</Link>
              </li>
              <li key="about"
                className={this.isLinkActive(`/${packageInfo.name}/about`)}>
                <Link to={`/${packageInfo.name}/about`}>About</Link>
              </li>
              <li key="view"
                className={this.isLinkActive(`/${packageInfo.name}/view`)}>
                <Link to={`/${packageInfo.name}/view`}>View</Link>
              </li>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col md={12}><div className="main-seperator"></div></Col>
        </Row>
      </header>
    );
  }
}

Header.contextTypes = {
  router: React.PropTypes.object
};

export default connect()(Header);
