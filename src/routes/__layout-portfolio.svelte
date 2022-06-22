<script>
import { onMount } from "svelte";
import { goto } from "$app/navigation";

let loaded = false;
let clicked = false;

onMount(()=> {
loaded = true;
});

</script>

<!--HTML BEGINS-->
{#if loaded === true}
  <div class="page-layout">
  <div class="image-div">
    <a href="http://localhost:3000/">
<img id="loading-logo" src="src/content/images/BeMeLogo.png" alt="Page is loading..."></a></div>
  <div class="page-slot-layout">
    <slot />
  </div>
</div>
{:else}
<div class="loading-page-layout">
  <img id="loading-logo" src="src/content/images/BeMeLogo.png" alt="Page is loading...">
 
  <img id="loading-spinner" src="/Spin-1s-200px.svg" alt="Page is loading...">
</div>
{/if}


<style>
  .page-layout{
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #5271FF 0%, #38B6FF 100%);
  }

  .page-slot-layout{
   width: 100%;
   height: 100%;
   padding-left: 7.23rem;
  }

  .image-div{
    padding: 2.23rem;
    position: sticky;
    top: 0.88rem;
  }

  #loading-logo{
  width: 5.23rem;
  height: auto;
  position: absolute;
  left: 0;
  top: 0;
  margin-top: 1.23rem;
  margin-left: 1.23rem;
  margin-right: 4.23rem;
  margin-bottom: 4.23rem;
}
</style>