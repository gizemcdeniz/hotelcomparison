import React from "react";
import renderer from "react-test-renderer";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SigninForm from "./index";

describe("SigninForm", () => {
  it("renders correctly and matches the snapshot", () => {
    const tree = renderer.create(<SigninForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  const mockSubmit = jest.fn((email, password) => {
    return Promise.resolve({ email, password });
  });

  beforeEach(() => {
    render(<SigninForm submit={mockSubmit} />);
  });

  it("should display required error when value is invalid", async () => {
    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(2);
    expect(mockSubmit).not.toBeCalled();
  });

  it("should display matching error when email is invalid", async () => {
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "test",
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/password/i), {
      target: {
        value: "password123",
      },
    });

    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(1);
    expect(mockSubmit).not.toBeCalled();
    expect(screen.getByRole("textbox", { name: /email/i }).value).toBe("test");
    expect(screen.getByPlaceholderText(/password/i).value).toBe("password123");
  });

  it("should display matching error when email domain is invalid", async () => {
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "test@test.co",
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/password/i), {
      target: {
        value: "password123",
      },
    });

    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(1);
    expect(mockSubmit).not.toBeCalled();
    expect(screen.getByRole("textbox", { name: /email/i }).value).toBe(
      "test@test.co"
    );
    expect(screen.getByPlaceholderText(/password/i).value).toBe("password123");
  });

  it("should display min length error when password is short", async () => {
    const MIN_CHAR = 8;
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "test@mail.com",
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/password/i), {
      target: {
        value: `${"a".repeat(MIN_CHAR - 1)}`,
      },
    });

    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(1);
    expect(mockSubmit).not.toBeCalled();
    expect(screen.getByRole("textbox", { name: /email/i }).value).toBe(
      "test@mail.com"
    );
    expect(screen.getByPlaceholderText(/password/i).value).toBe(
      `${"a".repeat(MIN_CHAR - 1)}`
    );
  });

  it("should display max length error when password is long", async () => {
    const MAX_CHAR = 64;
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "test@mail.com",
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/password/i), {
      target: {
        value: `${"a".repeat(MAX_CHAR + 1)}`,
      },
    });

    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(1);
    expect(mockSubmit).not.toBeCalled();
    expect(screen.getByRole("textbox", { name: /email/i }).value).toBe(
      "test@mail.com"
    );
    expect(screen.getByPlaceholderText(/password/i).value).toBe(
      `${"a".repeat(MAX_CHAR + 1)}`
    );
  });

  it("should not display error when value is valid", async () => {
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "test@mail.com",
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/password/i), {
      target: {
        value: "fooobaar",
      },
    });

    fireEvent.submit(screen.getByRole("button"));

    await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));
    expect(mockSubmit).toBeCalledWith({
      email: "test@mail.com",
      password: "fooobaar",
    });
    expect(screen.getByRole("textbox", { name: /email/i }).value).toBe("");
    expect(screen.getByPlaceholderText(/password/i).value).toBe("");
  });
});
