// This file handles state management in the form of svelte.stores
/* Writable will be used globally and interested parties will be notified when it's relevent state changes */

import { writable } from "svelte/store"; 

// Setting up writeable store value (set, update & subscribe methods predefined)
export const isLoggedIn = writable(false); // Default is false so users are not automatically logged in.