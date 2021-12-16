import React from "react";
import renderer from "react-test-renderer";
import ErrorMessage from "./index";

it("renders correctly and matches the snapshot", () => {
  const mockError = {
    email: {
      message: "Please provide your email",
      type: "string.empty",
    },
  };

  const tree = renderer
    .create(<ErrorMessage error={mockError.email} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
