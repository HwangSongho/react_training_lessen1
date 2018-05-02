import React, { Component, PropTypes } from 'react';
import Box from './Box';
import PostalCodeAjax from './PostalCodeAjax';

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBox: false,
    };
  }

  handleClick() {
    this.setState({showBox: !this.state.showBox});
  }

  render() {
    const btnName = this.state.showBox ? 'Box非表示' : 'Box表示';
    const boxComponent = this.state.showBox ? (
      <PostalCodeAjax />
    ) : null;

    return (
      <div className="container">
        <h1>{this.props.title}</h1>
        {boxComponent}
        {/* onClick イベントが呼び出された時に handleClick() を呼び出す */}
        <button 
          className="btn btn-primary" 
          onClick={() => this.handleClick()}>
          {btnName}
        </button>
        <div>
          {this.props.children}
        </div>
        
      </div>
    );
  }
}

// Props のバリデーション
Root.propTypes = {
  // 文字列（必須）
  title: PropTypes.string.isRequired,
  // 呼び出し元の開始タグと終了タグの間にある要素が入る特別な　Props
  children: PropTypes.any.isRequired,
};