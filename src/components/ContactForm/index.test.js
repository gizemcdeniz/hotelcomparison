import React from "react";
import renderer from "react-test-renderer";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "./index";

describe("ContactForm", () => {
  it("renders correctly and matches the snapshot", () => {
    const tree = renderer.create(<ContactForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  beforeEach(() => {
    render(<ContactForm />);
  });

  it("should display required error when value is invalid", async () => {
    await fireEvent.submit(screen.getByRole("button"));
    expect(await screen.findAllByRole("alert")).toHaveLength(2);
  });

  it("should display min length error when message is short", async () => {
    fireEvent.input(screen.getByRole("textbox", { name: /Email address/i }), {
      target: {
        value: "test@mail.com",
      },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /message/i }), {
      target: {
        value: "pass",
      },
    });

    await fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(1);
    expect(screen.getByRole("textbox", { name: /Email address/i }).value).toBe(
      "test@mail.com"
    );
    expect(screen.getByRole("textbox", { name: /message/i }).value).toBe(
      "pass"
    );
  });

  it("should not display error when value is valid", async () => {
    fireEvent.input(screen.getByRole("textbox", { name: /Full Name/i }), {
      target: {
        value: "Name Nami",
      },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /Email address/i }), {
      target: {
        value: "test@mail.com",
      },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /message/i }), {
      target: {
        value: "Long message to be sent",
      },
    });

    const alertElement = screen.queryByRole("alert");
    expect(alertElement).toBeNull();
  });

  it("should empty input fields after submission", async () => {
    expect(screen.getByRole("textbox", { name: /Full Name/i }).value).toBe("");
    expect(screen.getByRole("textbox", { name: /Email address/i }).value).toBe(
      ""
    );
    expect(screen.getByRole("textbox", { name: /message/i }).value).toBe("");
  });
});
