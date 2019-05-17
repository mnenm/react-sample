import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  onChangeNum: PropTypes.func,
  onClickBtn: PropTypes.func
};

class SumBlock extends React.Component {
  render() {
    const { onChangeNum } = this.props;
    const { onClickBtn } = this.props;

    return (
      <div className="container">
        <div className="sum-text">{this.props.currentTxt}</div>
        <input
          type="number"
          className="input-text num1"
          value={this.props.num1}
          onChange={el => onChangeNum("num1", el.target.value)}
        />
        <span className="arith-symbol">+</span>
        <input
          type="number"
          className="input-text num2"
          value={this.props.num2}
          onChange={el => onChangeNum("num2", el.target.value)}
        />
        <input
          type="button"
          className="input-btn submit-btn"
          onClick={onClickBtn}
          value="compute"
        />
      </div>
    );
  }
}

SumBlock.propTypes = propTypes;
export default SumBlock;
