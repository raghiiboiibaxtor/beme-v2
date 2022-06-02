<script>
	import AboutMeForm from "../components/forms/userforms/aboutmeform.svelte";
	import UserProfile from "../components/forms/userforms/userprofile.svelte";
	import FavExperience from "../components/forms/userforms/favexperience.svelte";
	import PastWork from "../components/forms/userforms/pastwork.svelte";
	import Education from "../components/forms/userforms/education.svelte";
	import Skills from "../components/forms/userforms/skills.svelte";
</script>

<div class="profile-container">
<div class="cards-horizontal-flex">
	<div class="left-items">
		<div class="nested-vertical-flex">
			<UserProfile/>
			<FavExperience/>
		</div>
	</div>
	<div class="right-items">
		<div class="nested-horizontal-flex">
			<div class="nested-left-items">
				<AboutMeForm/>
				<Education/>
			</div>
			<div class="nested-right-items">
				<Skills/>
				<PastWork/>
			</div>
		</div>
	</div>
</div>	
</div>


<style>

.profile-container{
	width: 100%;
	margin: 0 auto;
	padding-top: 0.88rem;
	padding-left: 1.23rem;
}

.cards-horizontal-flex, .right-items{
	width: 100%;
	display: flex;
	justify-content: space-between;
}



.nested-horizontal-flex{
	width: 88%;
	display: flex;
	justify-content: space-between;
}



@media only screen and (max-width: 777px){

.profile-container{
	width: 100%;
	margin: 0 auto;
	padding-top: 0.88rem;
	padding-left: 0;
}
 
 .cards-horizontal-flex, .right-items{
 width: 100%;
 display: flex;
 flex-direction: column;
 justify-content: none;
}



.nested-horizontal-flex{
 display: flex;
 flex-direction: column;
}

}
/* MEDIA QUERY ENDS */
/*******************************************/


</style>