import React from "react";
import renderer from "react-test-renderer";
import LeaveMessage from "./index";

describe("LeaveMessage", () => {
  it("renders correctly and matches the snapshot", () => {
    const tree = renderer.create(<LeaveMessage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
