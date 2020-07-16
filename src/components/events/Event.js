import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteEvent } from "../../actions/eventsActions";

class Event extends Component {
  state = {
    showEventInfo: false,
  };

  onDeleteClick = (id) => {
    this.props.deleteEvent(id);
  };

  render() {
    const {
      id,
      name,
      description,
      Date,
      Venue,
      category,
      Email,
      Phone,
    } = this.props.event;
    const { showEventInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            onClick={() =>
              this.setState({
                showEventInfo: !this.state.showEventInfo,
              })
            }
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={this.onDeleteClick.bind(this, id)}
          />
        </h4>
        {showEventInfo ? (
          <ul className="jumbotron">
            <li className="list-group-item">
              <strong>Description</strong>: {description}
            </li>

            <li className="list-group-item">
              <strong>Category</strong>: {category}
            </li>
            <li className="list-group-item">
              <strong>Event Date</strong>: {Date}
            </li>
            <li className="list-group-item">
              <strong>Venue</strong>: {Venue}
            </li>
            <li className="list-group-item">
              <strong>Email</strong>: {Email}
            </li>
            <li className="list-group-item">
              <strong>Phone</strong>: {Phone}
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Event.propTypes = {
  event: PropTypes.object.isRequired,
};

export default connect(null, { deleteEvent })(Event);
