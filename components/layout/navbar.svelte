<script> 
  import {goto} from '$app/navigation';
  import {getAuth, signOut} from "firebase/auth";
  import {isLoggedIn} from '../../routes/stores/authstore.js';
  import '../../../src/global.css';
  import {page} from '$app/stores';

  const auth = getAuth(); // Setting constant variable to get the returned value from getAuth function.
  
  //Logout function
  function Logout(){
      signOut(auth)
      .then(() => {localStorage.removeItem("uid");
      goto('/authenticate/login');
  })
  .catch((error) => {console.error(error)})
  }

  let clicked = false;
  let menu = false;
  let current = '/';
  let url = $page.url.pathname;
</script>


<!-- HTML Navbar Begins -->
<nav class="top-nav">
  <div class="top-nav-container">
    <button class="hamburger" class:active={clicked} on:click={() => clicked = !clicked} on:click={() => menu = !menu}> 
      <span></span>
      <span></span>
      <span></span>
    </button>

    <img class="beme-top-logo" src="src/content/images/BeMeSidebarLogo.png" alt="BeMe Logo">
    <h1 class="user-title"> Hey Lesedi!</h1>
    <div class="share-portfolio">
      <div class="share-icon"></div>
    <button class="share-portfolio-button"> Share </button></div>

  </div>
{#if clicked == true}
<div class="top-nav-background">
  <div class="top-nav-menu">
    <button onclick="location.href='/';" class="{url === '/' ? 'selected' : ''}"
    on:click="{() => current = '/'}">Profile</button>

    <button onclick="location.href='/mywork';" class="{url === '/mywork' ? 'selected' : ''}"
    on:click="{() => current = '/mywork'}">My Work</button>

    <button onclick="location.href='/portfolio';" class="{url === '/portfolio' ? 'selected' : ''}"
    on:click="{() => current = '/portfolio'}">Portfolio</button>
    <button onclick="location.href='/authenticate/login';" class="{url === '/authenticate/login' ? 'selected' : ''}"
    on:click="{() => current = '/authenticate/login'}" on:click|preventDefault={Logout} >Logout</button>
  </div>
  </div>
{/if}
</nav>


<style>
  .beme-top-logo{
    width: 8.8rem;
    height: auto;
  }

  .share-portfolio-button{
    font-size: 14px;
    color: var(--light);
    width: 12.3rem;
    height:auto;
    background: linear-gradient(90deg, #5271FF 0%, #38B6FF 100%);
    box-shadow: 0px 4px 4px rgba(7, 40, 129, 0.12);
    border-radius: 123px;
    border: none;
    padding: 0.44rem;
   margin-right: 0.88rem;
    
  }


  .top-nav-container{
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 0.88rem;
    padding-right: 0.88rem;
    padding-bottom: 0.88rem;
  }

  .user-title{
    width: 88%;
    margin-left: 2.23rem;
    text-align: left;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 2.3rem;
    color: var(--dark);
  }


  nav{
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    background-color: var(--light);
    padding-top: 0.55rem;
    box-shadow: 1px 4px 4px rgba(82, 101, 165, 0.12);
    border-radius: 0px 0px 44px 0px;
  }

  .hamburger{
    display: block;
    position: relative;
    z-index: 1;
    user-select: none;
    appearance: 0;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .hamburger span{
    display: block;
    width: 33px;
    height: 4px;
    margin-top: 3px;
    position: relative;
    background-image: linear-gradient(
              45deg,
              hsl(237deg 81% 60%) 0%,
              hsl(218deg 94% 54%) 20%,
              hsl(210deg 100% 50%) 40%,
              hsl(205deg 100% 50%) 60%,
              hsl(201deg 100% 50%) 80%,
              hsl(202deg 100% 61%) 100% );
    border-radius: 123px;
    z-index: 1;
    transform-origin: 0 0;
    transition: 0.4s;
  }

  .hamburger span:nth-child(2){
    width: 44px;
    height: 8.23px
  }

  .hamburger:hover span:nth-child(2){
    transform: translateX(8px);

  }

  .hamburger.active span:nth-child(1){
    transform: translate(5px, 0px) rotate(45deg);
  }

  .hamburger.active span:nth-child(2){
    transform: translate(-3px, 18px) rotate(-45deg);
  }

  .hamburger.active span:nth-child(3){
    opacity: 0;
    transform: translateX(15px);
  }



  .top-nav-background{
    height: 100vh;
  }

  .top-nav-menu{
    margin-top: 5.23rem;
    margin-left: 1.23rem;
    margin-right: 1.23rem;
    height: 23%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: 4s;
    scroll-behavior: none;
  }

 
    .top-nav-menu button{
      height: 3.23rem;
      padding-left: 3.23rem;
      text-align: left;
      color: var(--primary);
      background-color: var(--light);
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      letter-spacing: 0.023rem;
      border: none;
      border-radius: 23rem;
    }
  
    .top-nav-menu button.selected {
        color: white;
		    background-image: linear-gradient(
          45deg,
          hsl(237deg 81% 60%) 0%,
          hsl(218deg 94% 54%) 20%,
          hsl(210deg 100% 50%) 40%,
          hsl(205deg 100% 50%) 60%,
          hsl(201deg 100% 50%) 80%,
          hsl(202deg 100% 61%) 100% );
        transition: 0.4s;
	}
  

  @media (min-width: 777px){
  .hamburger{
    display: none;
  }

}

@media only screen and (max-width: 777px){
  .user-title{
    display: none;
  }

  .share-portfolio-button{
    width: 4.4rem;
  }

  .beme-top-logo{
    width: 5.5rem;
  }
}


</style>