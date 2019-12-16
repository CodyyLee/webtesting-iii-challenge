// Test away
import React from "react";
import { render } from "@testing-library/react";

import Dashboard from "./Dashboard";

test("check for component render", () => {
    const {baseElement} = render(<Dashboard/>)
    expect(baseElement).toMatchSnapshot();
})