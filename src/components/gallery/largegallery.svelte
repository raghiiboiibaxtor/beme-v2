<script>
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

