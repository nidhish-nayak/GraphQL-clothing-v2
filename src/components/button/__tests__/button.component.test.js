import { render, screen } from "@testing-library/react";
import Button, { BUTTON_TYPE_CLASSES } from "../button.component.jsx";

describe("button tests", () => {
	test("should render base button when nothing is passed", () => {
		render(<Button>Test</Button>);

		const buttonElement = screen.getByText(/test/i);
		expect(buttonElement).toHaveStyle("background-color: black");
	});

	test("should render google button when google button type passed", () => {
		render(<Button buttonType={BUTTON_TYPE_CLASSES.google} />);

		const googleButtonElement = screen.getByRole("button");
		expect(googleButtonElement).toHaveStyle("background-color: #4285f4");
	});
});
