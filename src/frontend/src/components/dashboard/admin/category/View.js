/* eslint-disable no-multi-str */
/* eslint-disable no-console */
/* eslint no-console: "error" */
import React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class View extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    this.fetchData = this.fetchData.bind(this);
    this.searchCategory = this.searchCategory.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }
  
  
  async fetchData() {
    await axios
      .get("http://localhost:4000/projects/category")
      .then((data) => {
            
         if (data.data.status === "success") {
          const category = data.data; 
           this.setState(category);
          }
      })
      .catch((error) => console.log(error));
  }

  searchCategory(e){
    e.preventDefault();

    const query = this.state.searchTerm;

    this.setState((prevState) => {
    
      let filteredCategory = prevState.data;
      if (query.trim() !== ""){
        filteredCategory = prevState.data.filter((element) => {
          return element.categoryName.toLowerCase().includes(query.toLowerCase()) ||
          element.categoryDescription.toLowerCase().includes(query.toLowerCase());
        });
      }
      return {
        filteredCategory
       
      };
    });
  }
  onChange(e){
    const value =  e.target.value;
    if (value.trim() === ""){
      this.setState({filteredCategory: this.state.data, searchTerm: value});
    }else{
      this.setState({searchTerm: value});
    }
    
  }
  
  render() {
    const data = this.state.data;
    
    return (
      <Card.Body>
   <div className="sachBody">
          <ul className="sach">
          <li><Button style={{float:"right",borderRadius:"20%"}} onClick={this.searchCategory}  variant="primary" type="submit" > Search</Button></li>
            <li><Form.Group controlId="searchId">
                <Form.Control onChange={this.onChange} style={{ width:"250px", float:"right",marginRight:"10px",border:"solid blue" }} type="text" placeholder="Enter category name to search" name="search" />
                </Form.Group>
            </li>
          </ul>
      </div>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Category Id</th>
              <th>Category Name</th>
              <th>Category Description</th>
               <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index, arr) => {
              let count = arr.length;
              console.log(item);
              console.log(index);
              return (
                <tr>
                  <td key={index}>{item.categoryName}</td>
                  <td key={index}>{item.categoryDescription}</td>
                  <td key={index}>{item.createdBy}</td>
                  <td key={count++}>
                    <Link to={`/delete/${item.id}`}>Delete</Link>|
                    <Link to={`/update/${item.od}`}>Update</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card.Body>
    );
  }
}
export default View;
