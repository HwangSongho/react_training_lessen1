import React, { Component, PropTypes } from 'react';

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxTitle: '',
    };
  }

  componentWillMount() {
    this.setState({boxTitle: Number.parseInt(Date.now(), 10)});
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">{this.state.boxTitle}</div>
        <div className="panel-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Box.propTypes = {
  children: PropTypes.any.isRequired,
};
