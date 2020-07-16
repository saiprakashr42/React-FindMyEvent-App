import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";

import PropTypes from "prop-types";

import { connect } from "react-redux";

import { addEvent } from "../../actions/eventsActions";

class AddEvent extends Component {
  state = {
    name: "",
    description: "",
    Date: "",
    Phone: "",
    Venue: "",
    Email: "",
    errors: {},
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { name, description, Date, Venue, Email, Phone } = this.state;

    // Checking for errors For Errors
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (description === "") {
      this.setState({ errors: { description: "Description is required" } });
      return;
    }

    if (Date === "") {
      this.setState({ errors: { Date: " Date is required" } });
      return;
    }

    if (Venue === "") {
      this.setState({ errors: { Venue: " Venue is required" } });
      return;
    }

    if (Email === "") {
      this.setState({ errors: { Email: " Email is required" } });
      return;
    }

    if (Phone === "") {
      this.setState({ errors: { Phone: "Phone is required" } });
      return;
    }

    const newEvent = {
      name,
      description,
      Date,
      Venue,
      Email,
      Phone,
    };

    this.props.addEvent(newEvent);

    // Clearing the State
    this.setState({
      name: "",
      description: "",
      Date: "",
      Venue: "",
      Phone: "",
      Email: "",
      errors: {},
    });

    this.props.history.push("/");
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, description, Date, Venue, Phone, Email, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">
          <strong>Add Event</strong>
        </div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Name"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label="Description"
              name="description"
              type="description"
              placeholder="Enter description...."
              value={description}
              onChange={this.onChange}
              error={errors.description}
            />

            <TextInputGroup
              label="Event Date"
              name="Date"
              type="Date"
              placeholder=""
              value={Date}
              onChange={this.onChange}
              error={errors.Phone}
            />

            <TextInputGroup
              label="Venue"
              name="Venue"
              placeholder="Enter Venue"
              value={Venue}
              onChange={this.onChange}
              error={errors.Venue}
            />

            <TextInputGroup
              label="Email"
              name="Email"
              placeholder="Enter Email"
              value={Email}
              onChange={this.onChange}
              error={errors.Email}
            />
            <TextInputGroup
              label="Phone"
              name="Phone"
              placeholder="Enter Phone"
              value={Phone}
              onChange={this.onChange}
              error={errors.Phone}
            />
            <input
              type="submit"
              value="Add Event"
              className="btn btn-danger btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

AddEvent.propTypes = {
  addEvent: PropTypes.func.isRequired,
};

export default connect(null, { addEvent })(AddEvent);
