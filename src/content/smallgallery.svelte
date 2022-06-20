<script>
import AddImage from "./newaddimage.svelte";
import images from "./images/mywork/mywork.json";
import Grabfile from "../components/files/grabfile.svelte";
import "./galleryglobal.css";

let sections = [
		 'src/content/images/mywork/media/mywork1.jpg',
		 'src/content/images/mywork/media/mywork2.jpg',
		 'src/content/images/mywork/media/mywork3.jpg',
		 'src/content/images/mywork/media/mywork4.jpg',
		 'src/content/images/mywork/media/mywork5.jpg',
         'src/content/images/mywork/media/mywork6.jpg',
];



</script>

<div class="slider">
	{#each sections as section}
    <div class="section-container">
		<section>
            <div class="img-container">
                <img alt="" src={section}/>
            </div>
		</section> 
    </div>
	{/each} 
</div>



<style>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	.slider {
		font-family: sans-serif;
		scroll-snap-type: x mandatory;	
		display: flex;
		-webkit-overflow-scrolling: touch;
		overflow-x: scroll;
	}

    .section-container{
        margin-left: 1.23rem;
    }


	section {
        height: auto;
		background-color:rgba(56, 182, 255, 0.08);
		padding: 1.23rem;
		min-width: 88vw;
		scroll-snap-align: start;
		text-align: left;
		position: relative;
        border-radius: 2.23rem;
	}

	h1	{
		margin-top: 0.23rem;
		transform: translateY();
		text-align: left;
		color: var(--dark);
		width: 100%;
		left: 0;
		font-size: 1.23rem;
	}

    .img-container{
        width:100%;
        border-radius: 1.23rem;
    }

    img{
        width: 23rem;
        height: 15rem;
        border-radius: 1.23rem;
    }



</style>

