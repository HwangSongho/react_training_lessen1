import React, { Component, PropTypes } from 'react';

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxTitle: '',
    };
  }

  // Componentが呼び出し元のComponentよりrender()の中で出力される際に呼ばれるメソッド
  componentWillMount() {
    this.setState({boxTitle: Number.parseInt(Date.now(), 10)});
  }

  // Props が変更される際に呼ばれるメソッド
  componentWillReceiveProps(nextProps) {
    if (this.props.boxTitlep != nextProps.boxTitleP) {
      if (nextProps.boxTitleP == '') {
        this.setState({boxTitle: Number.parseInt(Date.now(), 10)});
      } else if (nextProps.boxTitleP != this.state.boxTitle) {
        this.setState({boxTitle: nextProps.boxTitleP});
      }
    }
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
  boxTitleP: PropTypes.string,
};
