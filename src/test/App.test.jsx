// eslint-disable-next-line no-unused-vars
import React from "react";
import AppWrapper from "../components/AppWrapper";
import { test, expect } from "vitest";

test('The app must render properly', () => {
    expect((<AppWrapper />))
});
