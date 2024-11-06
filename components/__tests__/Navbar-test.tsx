import * as React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Navbar from "../Navbar";
import { Text } from "react-native";

describe("Navbar Component", () => {
  it("renders the default navbar text when no text prop is passed", () => {
    const { getByText } = render(<Navbar />);
    expect(getByText("Pokedex")).toBeTruthy();
  });

  it("renders custom text if passed", () => {
    const { getByText } = render(<Navbar text="Favorite Pokemon" />);
    expect(getByText("Favorite Pokemon")).toBeTruthy();
  });

  it("renders left icon if provided", () => {
    const { getByTestId } = render(<Navbar leftIcon={<Text>left</Text>} />);
    const leftIcon = getByTestId("left-icon");
    expect(leftIcon).toBeTruthy();
  });

  it("renders right icon if provided", () => {
    const { getByTestId } = render(<Navbar rightIcon={<Text>right</Text>} />);
    const rightIcon = getByTestId("right-icon");
    expect(rightIcon).toBeTruthy();
  });

  it("calls onLeftIconPress when left icon is pressed", () => {
    const onLeftIconPressMock = jest.fn();
    const { getByTestId } = render(
      <Navbar
        leftIcon={<Text>left</Text>}
        onLeftIconPress={onLeftIconPressMock}
      />
    );
    const leftIcon = getByTestId("left-icon");
    fireEvent.press(leftIcon);
    expect(onLeftIconPressMock).toHaveBeenCalled();
  });

  it("calls onRightIconPress when right icon is pressed", () => {
    const onRightIconPressMock = jest.fn();
    const { getByTestId } = render(
      <Navbar
        rightIcon={<Text>right</Text>}
        onRightIconPress={onRightIconPressMock}
      />
    );
    const rightIcon = getByTestId("right-icon");
    fireEvent.press(rightIcon);
    expect(onRightIconPressMock).toHaveBeenCalled();
  });

  it("does not render left icon if nothing is provided", () => {
    const { queryByTestId } = render(<Navbar />);
    const leftIcon = queryByTestId("left-icon");
    expect(leftIcon).toBeNull();
  });

  it("does not render right icon if nothing is provided", () => {
    const { queryByTestId } = render(<Navbar />);
    const rightIcon = queryByTestId("right-icon");
    expect(rightIcon).toBeNull();
  });
});
