import React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

class Project extends React.Component {
  render() {
    return (
      <Card.Body>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Project ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    );
  }
}
export default Project;