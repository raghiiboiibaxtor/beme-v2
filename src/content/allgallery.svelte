<script>
import "./galleryglobal.css";

let sections = [
		 'src/content/images/mywork/media/mywork14.jpg',
		 'src/content/images/mywork/media/mywork13.jpg',
		 'src/content/images/mywork/media/mywork12.jpg',
		 'src/content/images/mywork/media/mywork6.jpg',
		 'src/content/images/mywork/media/mywork7.jpg',
		 'src/content/images/mywork/media/mywork8.jpg',
		 'src/content/images/mywork/media/mywork1.jpg',
		 'src/content/images/mywork/media/mywork2.jpg',
		 'src/content/images/mywork/media/mywork3.jpg',
		 'src/content/images/mywork/media/mywork4.jpg',
		 'src/content/images/mywork/media/mywork5.jpg',
		 'src/content/images/mywork/media/mywork9.jpg',
		 'src/content/images/mywork/media/mywork10.jpg',
         'src/content/images/mywork/media/mywork11.jpg',
];



</script>

<div class="slider">
	{#each sections as section}
    <div class="section-container">
		<section id="small-section">
            <div class="img-container">
                <img id="small-image" alt="" src={section}/>
            </div>
		</section> 
    </div>
	{/each} 
</div>



<style>


</style>

