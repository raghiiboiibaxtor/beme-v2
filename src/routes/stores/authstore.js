import { writable } from "svelte/store";

// Setting up writeable store value (set, update & subscribe methods predefined)
export const isLoggedIn = writable(false); // Default is false so users are not automatically logged in.