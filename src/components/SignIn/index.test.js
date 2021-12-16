import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./index";
import { BrowserRouter as Router } from "react-router-dom";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Router>
        <SignIn />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
