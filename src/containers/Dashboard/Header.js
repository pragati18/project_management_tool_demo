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

        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
            <NavLink className="nav-link" ><strong><i className="nav-icon icon-list"></i> &nbsp;Projects <i class="nav-icon icon-arrow-down"></i><i className="nav-icon icon-arrow-double-down"></i> </strong></NavLink>
            </DropdownToggle>
            <DropdownMenu left>
            <DropdownItem><NavLink to="/details/projects" className="nav-link" ><strong><i className="nav-icon icon-list"></i> &nbsp;Project Details</strong></NavLink></DropdownItem>
              <DropdownItem><Link to="/add/projects" className="nav-link"><strong><i className="nav-icon icon-plus"></i> &nbsp;&nbsp;&nbsp; Add Projects</strong></Link></DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>&nbsp;&nbsp;&nbsp;


        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
            <NavLink className="nav-link" ><strong><i className="nav-icon icon-list"></i> &nbsp;&nbsp;&nbsp;Employees <i class="nav-icon icon-arrow-down"></i><i className="nav-icon icon-arrow-double-down"></i> </strong></NavLink>
            </DropdownToggle>
            <DropdownMenu left>
            <DropdownItem><NavLink to="/details/employees" className="nav-link" ><strong><i className="nav-icon icon-list"></i> &nbsp;&nbsp;&nbsp;Employee Details</strong></NavLink></DropdownItem>
              <DropdownItem><Link to="/add/logs" className="nav-link"><strong><i className="nav-icon icon-plus"></i> &nbsp;&nbsp;&nbsp; Add Employees Logs</strong></Link></DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>&nbsp;&nbsp;&nbsp;


        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
            <NavLink className="nav-link" ><strong><i className="nav-icon icon-list"></i> &nbsp;&nbsp;&nbsp;Leaves <i class="nav-icon icon-arrow-down"></i><i className="nav-icon icon-arrow-double-down"></i> </strong></NavLink>
            </DropdownToggle>
            <DropdownMenu left>
            <DropdownItem><NavLink to="/leaves/eleaves" className="nav-link" ><strong><i className="nav-icon icon-list"></i> &nbsp;&nbsp;&nbsp;Add Employee Leaves</strong></NavLink></DropdownItem>
              <DropdownItem><Link to="/leaves/oleaves" className="nav-link"><strong><i className="nav-icon icon-plus"></i> &nbsp;&nbsp;&nbsp; Add Official Leaves</strong></Link></DropdownItem>

            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>


         
          
        </Nav>
        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img src={'../../assets/img/avatars/user.jpg'} className="img-avatar" alt="Project Mamagement Users" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
              <DropdownItem><Link to="/add/user" className="nav-link"><strong><i className="nav-icon icon-plus"></i> &nbsp;&nbsp;&nbsp; Add User</strong></Link></DropdownItem>

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
