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

class Projects extends Component {
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
                <strong>Add New Project</strong>
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  
                <strong>Upload the File save all the project details:</strong>
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
                      <strong><Label htmlFor="text-input">Enter Project Name</Label></strong>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="pname" name="pname" placeholder="Enter First name" />
                      <FormText color="muted">Enter project name</FormText>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Col md="3">
                      <strong><Label htmlFor="text-input">Enter Project Manager Name</Label></strong>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="pm_name" name="pm_name" placeholder="Enter First name" />
                      <FormText color="muted">Enter project manager name</FormText>
                    </Col>
                    </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                    <strong><Label htmlFor="date-input">Enter Start Date </Label> </strong>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="start-date-input" name="start-date-input" placeholder="date" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                    <strong><Label htmlFor="date-input">Enter End Date </Label> </strong>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="end-date-input" name="end-date-input" placeholder="date" />
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

export default Projects;
