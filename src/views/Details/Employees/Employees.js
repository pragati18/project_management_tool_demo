import React, { Component} from 'react';
import {Badge, Card, CardBody, Col, Row, Table,} from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from 'reactstrap';
import { MDBDataTable } from 'mdbreact';

/*class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
   
    this.handleChange = date => {
      this.setState({
        startDate: date
      });
    }
  }
  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardBody>
                <br />  

                <strong>Get Reports Weekly/ Monthly Wise</strong><br/>
                <hr/>
                <div className="dates">
                  <strong> To:&nbsp;</strong> <DatePicker className = "start_date" maxDate={this.state.startDate} selected={this.state.startDate} onChange={this.handleChange}/>
  
                  <strong>&nbsp;&nbsp;&nbsp; Form:&nbsp;</strong> <DatePicker className = "end_date"  selected={this.state.startDate} />
                 &nbsp;&nbsp;&nbsp;<Badge className="mr-3" color="warning"><i class="fa fa-pencil fa-lg"></i>  Apply  </Badge>
                 </div>
                <hr/>
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    <th className="text-center"><i className="icon-people"></i></th>
                    <th>Project Name</th>
                    <th className="text-center">Start Date</th>
                    <th>End Date</th>
                    <th className="text-center">Project Manager Name</th>
                    <th>Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    
                    <td className="text-center">
                    1. </td>
                    <td>
                      <div>Project Management Tool</div>
                    </td>
                    <td className="text-center">
                      <div>23rd Jan 2020</div>
                    </td>
                    <td>
                      <div>23rd Jan 2020</div>
                    </td>
                    <td className="text-center">
                      <div>Pragati</div>
                    </td>
                    <td>
                    <CardBody>
                          <Badge className="mr-4" color="info"><i class="fa fa-eye fa-lg"></i>  View  </Badge>
                          <Badge className="mr-4" color="warning"><i class="fa fa-pencil fa-lg"></i>  Update  </Badge>
                          <Badge className="mr-4" color="danger"><i class = "fa fa-bitbucket fa-lg"></i>  Delete  </Badge>      
                    </CardBody>
                    </td>

                  </tr>

                  
                  </tbody>
                </Table>
                
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;*/
class EEmployees extends Component {

  constructor(props) {
  super(props)
  this.clickHandler = () => {
    //this.props.onClick();
    alert("Great Shot!");
  }

  this.data = {
    columns: [
      {
        label: 'Sr.No00000000000000000000000',
        field: 'srno',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Project Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Start Date',
        field: 'start_date',
        sort: 'asc',
        width: 150
      },
      {
        label: 'End Date',
        field: 'end_date',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Project Manager Name',
        field: 'pname',
        sort: 'asc',
        width: 100
      },
    
      {
        label: 'View',
        field: 'view',
        sort: 'asc',
        width: 150
      },

      {
        label: 'Update',
        field: 'edit',
        sort: 'asc',
        width: 150
      },

      {
        label: 'Delete',
        field: 'delete',
        sort: 'asc',
        width: 150
      },

     
      
    ],
    rows: [
      {
        srno:'1',
        name: 'Tapclicks',
        start_date: '1st Jan 2020',
        end_date: '28th Feb 2020',
        pname: 'Rajesh',
        view: <Button onClick={this.clickHandler}>View</Button>,
        edit: <Button onClick={this.clickHandler}>Edit</Button>,
        delete: <Button onClick={this.clickHandler}>Delete</Button>
      },
       {
        srno:'2',
        name: 'Tapclicks Order',
        start_date: '1st Jan 2020',
        end_date: '28th Feb 2020',
        pname: 'Pragati',
        view: <Button onClick={this.clickHandler}>View</Button>,
        edit: <Button onClick={this.clickHandler}>Edit</Button>,
        delete: <Button onClick={this.clickHandler}>Delete</Button>
      },
       {
         srno:'3',
        name: 'Tiger Nixon',
        start_date: '1st Jan 2020',
        end_date: '28th Feb 2020',
        pname: 'Pragati',
        view: <Button onClick={this.clickHandler}>View</Button>,
        edit: <Button onClick={this.clickHandler}>Edit</Button>,
        delete: <Button onClick={this.clickHandler}>Delete</Button>
      },
      
    ]
  };

  }

  

  render() {
    return (
      <MDBDataTable
      striped
      hover
      data={this.data}
    />
    );
  }
}



export default EEmployees;

