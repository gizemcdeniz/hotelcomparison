import React from "react";
import renderer from "react-test-renderer";
import SearchBar from "./index";

it("renders correctly and matches the snapshot", () => {
  const tree = renderer.create(<SearchBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
