<!-- This page is a global layout page. It's function is to assign a page template to the relevant pages (Index, MyWork, Portfolio) within this app-->

<!--JAVASCRIPT BEGINS-->
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
  //import {Image} from "../content/images/Spin-1s-200px";
  
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
        goto("/authenticate/login"); // Navigating back to login page
        login = false; 
      }
    });
   
  });
</script>

{#if login != false}
<!--HTML BEGINS-->
<div class="page-layout">
  <div class="top-nav">
  <Navbar/>
  </div>
  <div class="sidebar">
    <Sidebar/>
  </div>
  <div class="page-margin-slot">
  <div class="page-slot">
    <slot />
  </div>
</div>
</div>
{:else}
<div class="loading-page-layout">
  <img id="loading-logo" src="src/content/images/BeMeLogo.png" alt="Page is loading...">
  <img id="loading-spinner" src="/Spin-1s-200px.svg" alt="Page is loading...">
</div>
{/if}

<!--CSS BEGINS-->
<style>
  :global(body) {
    width: 100%;
    margin: 0 auto;
    background-color:var(--light);
  }
  
.page-layout{
 width: 100%;
 height:100%;
 margin: 0 auto;
}

#loading-logo{
  width: 5.23rem;
  height: auto;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1.23rem;
}

#loading-spinner{
  width: 5.23rem;
  height: auto;
  margin: 1.23rem;
}

.loading-page-layout{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  place-items: center;
  background-image: linear-gradient(
        45deg,
        hsl(237deg 81% 60%) 0%,
        hsl(218deg 94% 54%) 20%,
        hsl(210deg 100% 50%) 40%,
        hsl(205deg 100% 50%) 60%,
        hsl(201deg 100% 50%) 80%,
        hsl(202deg 100% 61%) 100% );
  z-index: 1000;
}

.top-nav{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}

.page-margin-slot{
  width: 100%;
  padding: 0.23rem;
  display: flex;
  
}

.sidebar{
  width: 10.23rem;
  height: 100%;
  position: fixed;
  top: 4.23rem;
  left: 0;
  z-index: 88;
}

.page-slot{
  width: calc(100% - 11.23rem);
  height: 100%;
  margin-left: 10.23rem;
  margin-top: 5rem;
  padding-left: 1.23rem;
}


@media only screen and (max-width: 777px){
  .sidebar{
    display: none;
  }

  .page-margin-slot{
    margin: 0;
    
  }

  .page-slot{
    margin: 0;
    margin-top: 4.23rem;
    padding: 0;
}


}
  </style>




<!--
If else to ensure navbar disapears when not logged in.
{#if login != true}
<img class="beme-login-logo" src="src/content/images/BeMeLogo.png" alt="BeMe Logo">
{/if}
-->