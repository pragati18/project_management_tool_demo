import React, { Component } from 'react';
import {Button} from 'reactstrap';
import DatePicker from "react-datepicker";


class Fdates extends Component {

    constructor(props) {
        super(props);
        this.state = {
          startDate: new Date(),
          endDate: new Date()
        };
       
        this.handleStartChange = date => {
          this.setState({
            startDate: date,
          });

         
      }

      this.handleEndChange = date => {
        this.setState({
          endDate: date,
        });
    }
  }
    render() {
        return (

        <div className="animated fadeIn">
      
                <br />  

                <strong>Get Reports Weekly/ Monthly Wise</strong><br/>
                <hr/>
                <div className="dates">
                  <strong><label> To:</label></strong>&nbsp;&nbsp; <DatePicker className = "date_fix start_date form-control" maxDate={this.state.startDate} selected={this.state.startDate} onChange={this.handleStartChange}/>
  
                  &nbsp;&nbsp;&nbsp; <strong><label> Form:</label></strong>&nbsp;&nbsp; <DatePicker className = "date_fix end_date form-control"  selected={this.state.endDate} onChange={this.handleEndChange}/>
                 &nbsp;&nbsp;&nbsp; <Button type="submit" size="sm" color="primary">Apply  <i className="nav-icon icon-check"></i> </Button>
                 </div>
                <hr/>

               
      </div>
            
        );
    }
}
export default Fdates;