// Test away!
import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Controls from "./Controls";

test("If gate is locked, show 'unlock gate'. Otherwise show 'lock gate'", () => {
    //button shows 'unlock gate' as text
    const {getByText, rerender} = render(<Controls locked={true}/>);
    getByText(/unlock gate/i);

    rerender(<Controls locked={false}/>);
    getByText(/lock gate/i);
});

test("When clicking 'unlock gate', text changes to 'lock gate'", () => {
    const { getByText } = render(<Controls locked={true}/>);
    const button = getByText(/unlock gate/i);
    fireEvent.click(button);
    getByText(/lock gate/i);
})