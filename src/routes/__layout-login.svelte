<script>
</script>

<div class="page-layout">
  <img class="beme-logo" src="/src/content/images/BeMeLogo.png" alt="BeMe Logo">
  <div class="horizontal-flex">
      <div class="page-margin-slot">
        <div class="page-slot">
          <slot />
        </div>
     </div>
  </div>
  <img class="beme-water-img" src="/src/content/images/bemeWater.png" alt="BeMe Logo">
</div>


<style>
  :global(body) {
    background-color:var(--light);
  }
  
.page-layout{
 width: 100%;
 height: 100%;
 
}

.horizontal-flex{
  width: 100%;
  height:100%;
  display: flex;
}

.page-slot{
  width: 88%;
  margin: 2.23rem;
}

.beme-logo{
  width:5.5rem;
  margin-top: 0.55rem;
  margin-left: 0.88rem;
}

.beme-water-img{
  width:100%;
  height: 23rem;
  bottom: -5.5rem;
  -webkit-transform:rotate(0deg);
  -moz-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
}


@media only screen and (max-width: 777px){

  .page-margin-slot{
    margin-left: 1.23rem;
    margin-right: 1.23rem;
  }

  .page-slot{
    width: 100%;
    margin: 0;
}

.beme-water-img{
  width:100%;
  height: 8.8rem;
  position: fixed;
  bottom: 0;
  right: 0;
  -webkit-transform:rotate(0deg);
  -moz-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
}

}
  </style>




<!--
If else to ensure navbar disapears when not logged in.
{#if login != true}
<img class="beme-login-logo" src="src/content/images/BeMeLogo.png" alt="BeMe Logo">
{/if}
-->