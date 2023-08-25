"use client";

import { createWrapper } from "next-redux-wrapper";
import { store } from "./store";

const wrapper = createWrapper(store, { debug: true });

export default wrapper;
