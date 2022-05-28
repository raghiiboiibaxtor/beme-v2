<script> 
    import {goto} from '$app/navigation';
    import {getAuth, signOut} from "firebase/auth";
    import {isLoggedIn} from '../../routes/stores/authstore.js';

    import '../../../src/global.css';

    const auth = getAuth(); // Setting constant variable to get the returned value from getAuth function.
    
    //Logout function
    function Logout(){
        signOut(auth)
        .then(() => {localStorage.removeItem("uid");
        goto('/login');
    })
    .catch((error) => {console.error(error)})
    }

    let active = false;
    let menu = false;
    let clicked = false;
   
</script>


<!-- HTML Navbar Begins -->
  <nav class="top-nav">
    <div class="top-nav-container">
      <button class="hamburger" class:active={active} on:click={() => active = !active} on:click={() => menu = !menu}> 
        <span></span>
        <span></span>
        <span></span>
      </button>

      <img class="beme-top-logo" src="src/content/images/BeMeLogo.png" alt="BeMe Logo">

      <button class="share-portfolio-button"> Share</button>

    </div>
  {#if active == true}
  <div class="top-nav-background">
    <div class="top-nav-menu">
      <a class="nav-link" class:active={clicked} aria-current="page" href="/">Home</a>
      <a class="nav-link" target="_self" href="/profile"
      >Profile Page</a>
      <a class="nav-link" target="_self" href="/portfolio"
      >Portfolio Page</a>
      <a class="nav-link" on:click|preventDefault={Logout} target="_self" href="/">Sign Out</a>
    </div>
  </div>
{/if}
  </nav>
  

  <style>
    .beme-top-logo{
      width: 88px;
      height: auto;
    }

    .share-portfolio-button{
      font-size: 14px;
      color: var(--light);
      width: 4rem;
      height:auto;
      background: linear-gradient(90deg, #5271FF 0%, #38B6FF 100%);
      box-shadow: 0px 4px 4px rgba(7, 40, 129, 0.12);
      border-radius: 123px;
      border: none;
      padding: 0.44rem;
      margin-top: 0.23rem;
      margin-right: 1.23rem;
    }


    .top-nav-container{
      width: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }


nav{
	position: relative;
	top: 0;
	left: 0;
	right: 0;
	z-index: 99;
	background-color: var(--light);
	padding: 8px;
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
	height: 5.23px
}

.hamburger:hover span:nth-child(2){
	transform: translateX(8px);
	
}

.hamburger.active span:nth-child(1){
	transform: translate(5px, 0px) rotate(45deg);
}

.hamburger.active span:nth-child(2){
	transform: translate(0px, 16px) rotate(-45deg);
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
  margin-left: 2.23rem;
  height: 55%;
	display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 4s;
  scroll-behavior: none;
}

.top-nav-menu a {
  width: 8rem;
  color: var(--primary);
  font-weight: 500;
  font-size: 18px;
  width: 23rem;
  height: 2.3rem;
}

.nav-link{
 
  width: 8rem;
  height: auto;
  text-decoration: none;
}

.nav-link:hover{
  width: 23rem;
  height: 2.3rem;
  background-image: linear-gradient(
             45deg,
             hsl(237deg 81% 60%) 0%,
             hsl(218deg 94% 54%) 20%,
             hsl(210deg 100% 50%) 40%,
             hsl(205deg 100% 50%) 60%,
             hsl(201deg 100% 50%) 80%,
             hsl(202deg 100% 61%) 100% );
  border-radius: 23rem;
}


@media (min-width: 777px){
  .hamburger{
    display: none;
  }
 
}

  </style>