
<slot />



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