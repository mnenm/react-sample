import React from "react";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../src/App";
import SumBlock from "../src/SumBlock";

Enzyme.configure({ adapter: new Adapter() });

describe("SumBlock", () => {
  test("ボタン動作チェック", () => {
    let sumNum = jest.fn();
    const subject = shallow(<SumBlock onClickBtn={sumNum} />);
    subject.find(".submit-btn").simulate("click");
    expect(sumNum).toBeCalled();
  });

  test("sumNum計算チェック", () => {
    const subject = shallow(<App />);
    subject.setState({ num1: 3 });
    subject.setState({ num2: 2 });
    subject.instance().sumNum();
    expect(subject.state("currentTxt")).toBe(5);
  });
});
