import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppNavbarBrand, AppSidebarToggler }  from '../extends_files';
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
       <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 140, height: 25, alt: 'Coditation System' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'Coditation Systems' }}
        />
         <AppSidebarToggler className="d-md-down-none" display="lg" />
       

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/details/projects" className="nav-link" >Project Details</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/details/employees" className="nav-link">Employee Details</Link>
          </NavItem>
        </Nav>

        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
                <img src={'../../assets/img/avatars/user.png'} className="img-avatar" alt="Project Management Tool" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
              <DropdownItem><Link to="/add/user" className="nav-link"><strong><i className="nav-icon icon-plus"></i> &nbsp;&nbsp;&nbsp; Add User</strong></Link></DropdownItem>
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
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
