<script> 
    import {goto} from '$app/navigation';
    import {getAuth, signOut} from "firebase/auth";
    import {isLoggedIn} from '../../routes/stores/authstore.js';
    
    const auth = getAuth(); // Setting constant variable to get the returned value from getAuth function.
    
    //Logout function
    function Logout(){
        signOut(auth)
        .then(() => {localStorage.removeItem("uid");
        goto('/login');
    })
    .catch((error) => {console.error(error)})
    }

    </script>
    
    
    <ul class="nav justify-content-end bg-dark">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" target="_self" href="/profile"
            >Profile Page</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" target="_self" href="/portfolio"
              >Portfolio Page</a>
        </li> 
        {#if $isLoggedIn} // Conditional logic using IfBlock from svelte
        <li class="nav-item">
          <a
            class="nav-link"
            on:click|preventDefault={Logout}
            target="_self"
            href="/">Sign Out</a
          >
        </li>
      {/if}
      </ul>