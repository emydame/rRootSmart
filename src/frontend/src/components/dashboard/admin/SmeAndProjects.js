import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";



export default class SmeAndProjects extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      searchData: ``,
      foundData: [],
      valueChange: ``,
      success: "",
      error: ""
    };

    this.fetchData = this.fetchData.bind(this);
    //this.handleChange = this.handleChange.bind(this);
    //this.search = this.search.bind(this);
    //this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios
      .get(`http://localhost:4000/fund/applications/all`)
      .then(({ data }) => {
        console.log(data);
        const  status  = data.status;
        const projects = data.data;
        if (status === `success`) {
          this.setState({ data: projects });
          
        }
      })
      .catch((error) => console.log(error));
  }


  render() {
    const data = this.state.data;
    return (
      <Card.Body>
      <div className="sme-project">
        <strong style={{textAlign:"center"}}>SMEs Projects</strong>
      </div>
      <div className="update" style={{textAlign:"center"}}>
          <em> List of Funds Related Projects </em>
        
        </div>
      <table class="table table-striped">
      <thead>
          <tr>
            <th>Project Name</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>End Date</th>
          
          </tr>
        </thead>
        <tbody>
            {data.map((item, index, arr) => {
            
              return (
                <tr>
                  <td key={index}>{item.projectName}</td>
                  <td key={index}>{item.description}</td>
                  <td key={index}>{item.dateStart}</td>
                  <td key={index}>{item.dateEnd}</td>
                 
                </tr>
              );
            })}
          </tbody>

      </table>
    </Card.Body>
    );
  }
}
