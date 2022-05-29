<script>
  import "../app.css";
  // Importing SDKs
  import App from "./firebase/firebase.js";
  import { onMount } from "svelte";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { goto } from "$app/navigation";
  import { isLoggedIn } from "./stores/authstore.js";
  import Navbar from "../components/layout/navbar.svelte";
  
  let login = false;
  // Mounting authentication.
  // Grabbing getAuth() variable from Firebase and passing it locally to auth
  onMount(() => {
    const auth = getAuth();
    // Monitors authentication state changes.
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // If user verified open application
        console.log("Welcome to the BeMe!");
        isLoggedIn.update(() => true);
        login = true; // If the user exists authstore writeable will return true.
      } else {
        // Else redirect to login page
        isLoggedIn.update(() => false); // Ensuring authstore writable is false and user cannot login
        goto("/login"); // Navigating back to login page
        login = false; 
      }
    });
  });
</script>

<!-- If else to ensure navbar disapears when not logged in.--> 
{#if login === true}
<Navbar/>
{/if}

<slot />

<style>
  :global(body) {
    background-color:var(--light);
  }
  </style>