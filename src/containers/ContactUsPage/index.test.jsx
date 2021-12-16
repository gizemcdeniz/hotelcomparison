import React from "react";
import renderer from "react-test-renderer";
import ContactUsPage from "./index";

it("renders correctly and matches the snapshot", () => {
  const tree = renderer.create(<ContactUsPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
