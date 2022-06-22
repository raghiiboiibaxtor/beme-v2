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

</style>

