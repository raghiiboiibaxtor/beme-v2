<!-- JAVASCRIPT BEGINS -->
<script>
  import {goto} from '$app/navigation';
  import {getAuth, signOut} from "firebase/auth";
  import {isLoggedIn} from '../../routes/stores/authstore.js';
  import '../../../src/global.css';
  import {page} from '$app/stores';
  import Icon from '@iconify/svelte';

  const auth = getAuth(); // Setting constant variable to get the returned value from getAuth function.
  //Logout function
  function Logout(){
      signOut(auth)
      .then(() => {localStorage.removeItem("uid");
      goto('/authenticate/login');
  })
  .catch((error) => {console.error(error)})
  }

  let current = '/'; // Assigning indexed page path to current
  let url = $page.url.pathname; // Grabbing url from page path 

</script>

<!-- HTML BEGINS -->
<div class="sidebar-container">
        <div class="sidenav-menu">
            <div class="top-sidenav">

              <div class="button-icon">
 <button onclick="location.href='/';" class="{url === '/' ? 'selected' : ''}"
              on:click="{() => current = '/'}"> Profile </button>
              </div>
         
      
              <button onclick="location.href='/mywork';" class="{url === '/mywork' ? 'selected' : ''}"
              on:click="{() => current = '/mywork'}"> My Work</button>
      
              <button onclick="location.href='/portfolio';" class="{url === '/portfolio' ? 'selected' : ''}"
              on:click="{() => current = '/portfolio'}">Portfolio</button>
            </div>
            <div class="bottom-side-nav">
              <button onclick="location.href='/authenticate/login';" class="{url === '/authenticate/login' ? 'selected' : ''}"
              on:click="{() => current = '/authenticate/login'}" on:click|preventDefault={Logout} >Logout</button>
            </div>
        </div>
</div>


<!-- CSS BEGINS -->
<style>
.sidebar-container{
    z-index: 1;
    width: 10.23rem;
    height: 90vh;
    background-color: var(--light);
    box-shadow: 1px 4px 4px rgba(82, 101, 165, 0.23);
    backdrop-filter: blur(4px);
    border-radius: 0px 0px 123px 0px;
    padding: 1.23rem;
}

.sidenav-menu{
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.top-sidenav{
    margin-top: 1.23rem;
    height: 10.23rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

button{
  position: relative;
      height: 2.23rem;
      width: 100%;
      padding-left: 1.23rem;
      text-align: left;
      color: var(--primary);
      background-color: var(--light);
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      letter-spacing: 0.023rem;
      border-radius: 0.88rem;
    }

    button:hover{
      background-color: rgba(112, 156, 212, 0.055);
    }

    button.selected {
      border-radius: 23rem;
        color: var(--light);
		    background-image: linear-gradient(
          45deg,
          hsl(237deg 81% 60%) 0%,
          hsl(218deg 94% 54%) 20%,
          hsl(210deg 100% 50%) 40%,
          hsl(205deg 100% 50%) 60%,
          hsl(201deg 100% 50%) 80%,
          hsl(202deg 100% 61%) 100% );     
	}

  button.selected:hover {
      border: 0.088rem solid var(--light);
	}




</style>