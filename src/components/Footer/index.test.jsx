import React from "react";
import renderer from "react-test-renderer";
import Footer from "./index";

it("renders correctly and matches the snapshot", () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
