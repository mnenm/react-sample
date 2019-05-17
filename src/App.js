import React from "react";
import SumBlock from "./SumBlock";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTxt: 0,
      num1: 0,
      num2: 0
    };

    this.changeInputNum = this.changeInputNum.bind(this);
    this.sumNum = this.sumNum.bind(this);
  }

  changeInputNum(target, num) {
    this.setState({ [target]: num });
  }

  sumNum() {
    this.setState({
      currentTxt: parseInt(this.state.num1, 10) + parseInt(this.state.num2, 10)
    });
  }

  render() {
    return (
      <div className="container">
        <SumBlock
          onChangeNum={this.changeInputNum}
          onClickBtn={this.sumNum}
          {...this.state}
        />
      </div>
    );
  }
}

export default App;
