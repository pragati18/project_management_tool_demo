import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppNavbarBrand } from './extends_files';
import logo from '../../assets/img/logo.png'
import sygnet from '../../assets/img/logo.png'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class Header extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
       
        <AppNavbarBrand
          full={{ src: logo, width: 140, height: 25, alt: 'Coditation System' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'Coditation Systems' }}
        />
        
        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/details/projects" className="nav-link" ><strong> | </strong></NavLink>
          </NavItem>
          </Nav>

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/details/projects" className="nav-link" ><strong><i className="nav-icon icon-list"></i> &nbsp;&nbsp;&nbsp;Project Details</strong></NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/add/projects" className="nav-link"><strong><i className="nav-icon icon-plus"></i> &nbsp;&nbsp;&nbsp; Add Projects</strong></Link>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/details/employees" className="nav-link"><strong><i className="nav-icon icon-list"></i> &nbsp;&nbsp;&nbsp; Employee Details</strong></Link>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/add/employees" className="nav-link"><strong><i className="nav-icon icon-plus"></i> &nbsp;&nbsp;&nbsp; Add employees</strong></Link>
          </NavItem>
          
        </Nav>
        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img src={'../../assets/img/avatars/user.jpg'} className="img-avatar" alt="Project Mamagement Users" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
              <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
              <DropdownItem><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </React.Fragment>
    );
  }
  
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
