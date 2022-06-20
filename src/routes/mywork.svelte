<!--Please note: This page has not been implemented yet as it is not part of this brief's scope-->
<script>
    import Addreaduser from "../components/forms/addreaduser.svelte";
    import LargeGallery from "../content/largegallery.svelte";
    import SmallGallery from "../content/smallgallery.svelte";
    import AllGallery from "../content/allgallery.svelte";
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
    margin-top: 0.88rem;
    margin-left: 0.88rem;
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
    font-size: 23px;
    line-height: 119.7%;
    display: flex;
    align-items: center;
    letter-spacing: -0.02em;
    color: #BDD1F9;
}

</style>

