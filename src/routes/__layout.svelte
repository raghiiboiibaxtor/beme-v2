<script>
  import "../app.css";
  // Importing SDKs
  import App from "./firebase/firebase.js";
  import { onMount } from "svelte";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { goto } from "$app/navigation";
  import { isLoggedIn } from "./stores/authstore.js";
  import Navbar from "../components/layout/navbar.svelte";
  import Sidebar from "../components/layout/sidebar.svelte";
 // import Login from "./authenticate/login.svelte";
  import {page} from '$app/stores';
  
  let login = false;
  let url = $page.url.pathname;
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
        goto("/authenticate/login"); // Navigating back to login page
        login = false; 
      }
    });
  });
</script>


<div class="page-layout">
  <div class="top-nav">
  <Navbar/>
  </div>
  <div class="horizontal-flex">
  <div class="sidebar">
    <Sidebar/>
  </div>
  <div class="page-margin-slot">
  <div class="page-slot">
    <slot />
  </div>
</div>
</div>
<img class="beme-water-img" src="src/content/images/bemeWater.png" alt="BeMe Logo">
</div>


<style>
  :global(body) {
    background-color:var(--light);
  }
  
.page-layout{
 width: 100%;
 height:100%;
}

.top-nav{
  position: sticky;
  top: 0;
  z-index: 1;
}

.horizontal-flex{
  height:100%;
  display: flex;
  
}

.sidebar{
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
}

.page-slot{
  width: 100%;
  height: 100%;
 
  margin-left: 10.23rem;
}


@media only screen and (max-width: 777px){
  .sidebar{
    display: none;
  }

  .page-margin-slot{
    margin: 1.23rem;
  }

  .page-slot{
    margin: 0;
}


}
  </style>




<!--
If else to ensure navbar disapears when not logged in.
{#if login != true}
<img class="beme-login-logo" src="src/content/images/BeMeLogo.png" alt="BeMe Logo">
{/if}
-->