/* eslint-disable no-console */
/* eslint no-console: "error" */

import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import axios from "axios";

class Delete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      success: "",
      error: ""
    };

    this.deactivate = this.deactivate.bind(this);
  }

  componentDidMount() {
    this.deactivate();
  }

  async deactivate() {
    const categoryId = this.props.match.categoryId;

    await axios.delete("https://eazsme-backend.herokuapp.com/projects/category/" + categoryId).then((data) => {
      if (data.status === "success") {
        this.setState({ success: "User successfully deactivated!" });
      } else {
        this.setState({ error: "Error deactivatiing user" });
      }
    });
  }

  render() {
    const { success, error } = this.state;
    return (
      <Card.Body>
        {success ? (
          <Form.Text className="text-bold text-success">{success}</Form.Text>
        ) : (
          <Form.Text className="text-bold text-danger">{error}</Form.Text>
        )}
      </Card.Body>
    );
  }
}
export default Delete;
