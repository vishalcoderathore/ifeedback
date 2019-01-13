import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys
      .reverse()
      .map(({ _id, title, body, dateSent, dateResponded, yes, no }) => {
        return (
          <div className="card grey lighten-4" key={_id}>
            <div className="card-content">
              <span className="card-title">{title}</span>
              <p>{body}</p>
              <p className="right">
                Sent On: {new Date(dateSent).toLocaleDateString()}
              </p>
            </div>
            <div className="card-action">
              <div className="row">
                <div className="col s3 l1">
                  <i className="material-icons" style={{ color: "#0277bd" }}>
                    thumb_up
                  </i>
                  <span className="h6">{yes}</span>
                </div>

                <div className="col s3 l1">
                  <i className="material-icons" style={{ color: "#bf360c " }}>
                    thumb_down
                  </i>
                  <span className="h6">{no}</span>
                </div>
              </div>
            </div>
          </div>
        );
      });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return {
    surveys
  };
}

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
