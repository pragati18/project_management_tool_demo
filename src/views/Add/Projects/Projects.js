import React, { Component } from 'react';
import TagsInput from './TagsInput';

import {
  Badge,
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
                  <FormGroup row>
                    <Col md="3">
                      <strong><Label htmlFor="text-input">Username:</Label></strong>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="username" name="username" placeholder="Enter Username" />
                      <FormText color="muted">Enter Unique Username</FormText>
                    </Col>
                    </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                    <strong><Label htmlFor="email-input">Email:</Label></strong>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="email" id="email" name="email" placeholder="Enter Email" autoComplete="email"/>
                      <FormText className="help-block">Please enter your email</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                    <strong><Label htmlFor="password-input">Password</Label></strong>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="password" id="password-input" name="password-input" placeholder="Password" autoComplete="new-password" />
                      <FormText className="help-block">Please enter a complex password</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <strong><Label htmlFor="text-input">First name:</Label></strong>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="fname" name="fname" placeholder="Enter First name" />
                      <FormText color="muted">Enter first name</FormText>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Col md="3">
                      <strong><Label htmlFor="text-input">Last name:</Label></strong>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="lname" name="lname" placeholder="Enter Last name" />
                      <FormText color="muted">Enter last name</FormText>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Col md="3">
                    <strong><Label htmlFor="select">Select Role</Label> </strong>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">Super Admin</option>
                        <option value="2">Admin</option>
                        <option value="3">Project Management</option>
                        <option value="3">Employee</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                    <strong><Label htmlFor="date-input">Start Date </Label> </strong>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="date-input" name="date-input" placeholder="date" />
                    </Col>
                  </FormGroup>
               
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Skills</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <div className="App">
                          <TagsInput selectedTags={selectedTags}/>
                    </div>
                    </Col>
                  </FormGroup>  

                  <hr/>
                  <hr/>
                  <strong>OR</strong>
                  <hr/>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="file-input">File input</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="file-input" name="file-input" />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
           
          </Col>
          
        </Row>
      </div>
    );
  }
}

export default Projects;
