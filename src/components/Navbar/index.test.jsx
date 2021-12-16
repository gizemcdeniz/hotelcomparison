import React from "react";
import renderer from "react-test-renderer";
import MainNavbar from "./index";
import { BrowserRouter as Router } from "react-router-dom";

it("renders correctly and matches the snapshot", () => {
  const tree = renderer
    .create(
      <Router>
        <MainNavbar />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
