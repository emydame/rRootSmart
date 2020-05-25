import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

export default class SmeAndProjects extends Component {
  render() {
    return (
      <Card.Body>
      <div className="sme-project">
        <h2 style={{textAlign:"center"}}>SMEs/Projects</h2>
      </div>
      <Table striped bordered hover variant="dark">
      <thead>
          <tr>
            <th>Action</th>
            <th>Nos.</th>
            <th>Date</th>
            <th>Full Details</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>Pending Background Check</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Checked/Approved</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Checked/Not Approved</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Recieved Projects</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Feasible Projects</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Projects approved for funding</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Blacklisted</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>

      </Table>
    </Card.Body>
    )
  }
}
