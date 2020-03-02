import React, { Component } from 'react';

import {

  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from 'reactstrap';
const selectedTags = tags => console.log(tags);

class Logs extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }
  

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <strong>Add Employees Logs</strong>
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  
                <strong>Upload the File to add:</strong>
                  <hr/>

                  <FormGroup row>
                    <Col md="3">
                      <strong><Label htmlFor="file-input">File input</Label></strong>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="file-input" name="file-input" />
                    </Col>
                  </FormGroup>

                  <hr/>
                  <strong>Or you can also add the details using below form:</strong>
                  <hr/>
                  <FormGroup row>
                    <Col md="3">
                    <strong><Label htmlFor="select">Select Name</Label> </strong>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select">
                        <option value="0">Select Name</option>
                        <option value="0">Pragati Gaikwad (ID - 12321)</option>
                        <option value="1">Rajesh Darak (ID - 12232)</option>
                        <option value="2">Saurabh Mahajan (ID -1234)</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                    <strong><Label htmlFor="date-input">Enter Date </Label> </strong>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="start-date-input" name="start-date-input" placeholder="date" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                    <strong><Label htmlFor="date-input">Enter Logs </Label> </strong>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="number" id="logs" name="logs" placeholder="Enter Logs" />
                    </Col>
                  </FormGroup>
               
              <CardFooter className="footer_button">
                <Button type="submit" size="xl" color="primary"><i className="nav-icon icon-check"></i> Submit</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button type="reset" size="xl" color="danger"><i className="nav-icon icon-speedometer"></i> Reset</Button>
              </CardFooter>

              </Form>
              </CardBody>
            </Card>
           
          </Col>
          
        </Row>
      </div>
    );
  }
}

export default Logs;
