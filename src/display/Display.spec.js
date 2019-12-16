// Test away!
import React from "react";
import { render } from "@testing-library/react";

import Display from "./Display";

test("Displays correct text based on lock status", () => {
    const { getByText, rerender } = render(<Display locked={true} />);
    getByText(/locked/i);

    rerender(<Display locked={false}/>);
    getByText(/unlock/i);
})

test("Displays correct text based on open status", () => {
    const { getByText, rerender } = render(<Display closed={true}/>);
    getByText(/closed/i);

    rerender(<Display closed={false} />);
    getByText(/open/i);
})