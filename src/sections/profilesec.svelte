<script>
  
    import UserCard from "../components/cards/card_profile.svelte";
   
   import AddFile from "../components/files/addfile.svelte";
   import CardFavExp from "../components/cards/card_favexp.svelte";
   import CardEducation from "../components/cards/card_education.svelte";
   import CardPastWork from "../components/cards/card_paswork.svelte";
   import CardSkills from "../components/cards/card_skills.svelte";

   
 
 </script>
 
 <!--HTML BEGINS-->
 <div class="profile-container">
   <div class="cards-horizontal-flex">
     <div class="left-items">
       <div class="nested-vertical-flex">
         <UserCard/>
       </div>
     </div>
     <div class="right-items">
       <div class="nested-horizontal-flex">
         <div class="nested-left-items">
           <div class="divider">
           <CardFavExp/>
         </div>
         <div class="divider-bottom">
           <CardSkills/>
         </div>
         </div>
         <div class="nested-right-items">
           <div class="divider">
           <CardPastWork/>
         </div>
         <div class="divider-bottom">
           <CardEducation/>
         </div>
         </div>
       </div>
     </div>
   </div>
   </div>
   <!--CSS BEGINS-->
   <style>
   
   .profile-container{
     width: auto;
     padding-top: 0.88rem;
    
   }
   
   .cards-horizontal-flex{
     display: flex;
     justify-content: space-between;
   }

   .left-items{
    margin-right: 0.55rem;
   }
 
   .divider{
     margin-bottom: 1.23rem;
   }
 
   .nested-horizontal-flex{
     display: flex;
     flex-direction: row;
   }
 
 
   .nested-left-items{
     height: 100%;
     margin-right: 2.23rem;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
   }
 
   .nested-right-items{
    
     margin-left: 1.23rem;
     margin-right: 2.23rem;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
   }
   
   
   /* MEDIA QUERY BEGINS */
   /*******************************************/
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
   
   </style>