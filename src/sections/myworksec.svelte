<!--Please note: This page has not been implemented yet as it is not part of this brief's scope-->
<script>
    import LargeGallery from "../components/gallery/largegallery.svelte";
    import SmallGallery from "../components/gallery/smallgallery.svelte";
    import AllGallery from "../components/gallery/allgallery.svelte";
    import AddWorkModal from "../components/elements/addworkmodal.svelte";

    let clicked = false;
</script>


<div class="body-container">
    <div class="gallery-container">
        <h1> Featured Projects </h1>
        <LargeGallery/>
    </div>
    <div class="gallery-container">
        <h1> Recent Work </h1>
        <SmallGallery/>
    </div>
    <div class="gallery-container">
        <h1> All Work </h1>
        <AllGallery/>
    </div>
   <div class="addwork-button">
    <button on:click={() => clicked = !clicked}>+</button>
   </div>
   {#if clicked == true}
   <div class="modal-div">
   <AddWorkModal/>
</div>
   {/if}
</div>


<style>

.body-container{
    width: 100%;
    margin-top: 2.23rem;  
}

.gallery-container{
    margin-bottom: 1.23rem;
}

h1{
    margin-left: 0.23rem;
    margin-bottom: 0.88rem;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 119.7%;
    display: flex;
    align-items: center;
    letter-spacing: -0.02em;
    color: var(--primary);
}

.addwork-button{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5.23rem;
    position: fixed;
    right: 0;
    bottom: 0;
    margin: 0.55rem;
    z-index: 9999;
    width: 7.23rem;
    height: 7.23rem;
    background: rgba(246, 248, 255, 0.55);
}

button{
    opacity: 88%;
    margin: 0.55rem;
    background-color: var(--light);
    width: 5.23rem;
    height: 5.23rem;
    font-family: 'Montserrat';
    color: var(--light);
    font-style: normal;
    font-weight: 700;
    font-size: 33px;
    align-items: center;
    background-color: var(--main);
        border-radius: 23rem;
        text-align: center !important;
        transition-duration: 0.4s;

}

button:hover{
   opacity: 100%;
}

.modal-div{
    width: 100%;
    height: 100%;
    background: rgba(246, 248, 255, 0.55);
    display: grid;
    place-items: center;
    align-items: center;
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 100;
}

@media only screen and (max-width: 777px){

    .gallery-container{
    width: 100%;
    margin-bottom: 1.23rem;
    margin-left: 1.23rem;
}




}
</style>

