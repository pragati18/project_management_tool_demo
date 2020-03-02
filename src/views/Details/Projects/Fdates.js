import React, { Component } from 'react';
import {
  Button,

  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from 'reactstrap';

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
                  <strong>Get Reports Weekly/ Monthly Wise</strong>
                <hr/>
                <div className="dates">
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal form_dates">
                    <FormGroup row>
                        <Col md="4">
                        <strong><Label htmlFor="email-input">Enter Start Date:</Label></strong>
                        </Col>
                        <Col xs="12" md="8">
                        <Input type="date" id="log-input" name="date-input" placeholder="date" />
                          <FormText className="help-block">Please enter start date</FormText>
                        </Col>
                      </FormGroup>&nbsp;&nbsp;&nbsp;&nbsp;

                      <FormGroup row>
                        <Col md="4">
                        <strong><Label htmlFor="email-input">Enter End Date:</Label></strong>
                        </Col>
                        <Col xs="12" md="8">
                        <Input type="date" id="log-input" name="date-input" placeholder="date" />
                          <FormText className="help-block">Please enter end date</FormText>
                        </Col>
                      </FormGroup>

                
                      
                        <FormGroup row>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Col md="8">
                        <Button type="submit" size="xl" color="primary">Submit</Button>
                        </Col>
                        </FormGroup>
                    </Form>

                 </div>
                <hr/>

               
      </div>
            
        );
    }
}
export default Fdates;