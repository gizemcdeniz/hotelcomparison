import React from "react";
import renderer from "react-test-renderer";
import ContactInfo from "./index";

describe("ContactInfo", () => {
  it("renders correctly and matches the snapshot", () => {
    const tree = renderer.create(<ContactInfo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
