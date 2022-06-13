<script>
import {_firestore_} from "../../../routes/firebase/firebase.js";
import { getAuth,onAuthStateChanged} from "firebase/auth";
import {updateDoc,onSnapshot,doc} from "firebase/firestore";



let _skills =[]


const handleSubmit = () => {
  
  const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
      //successfully logging the current user signed ins data on console
      const _uid = user.uid;       
      

    // console log reference of current user signed in
      onSnapshot(doc(_firestore_, "AllUsers", _uid), (doc) => {
        console.log("Current user logged in: ", doc.data());})

   //we only need update, since the user gets their data created / addedwhen they sign up, 
    const _userupdate = doc(_firestore_, 'AllUsers', _uid)

    updateDoc(_userupdate,{
      ..._skills})        
  }})     
  }  





function _addSkills(){
	_skills = [..._skills,'']}

function _removeskill(index){

	_skills=[..._skills.slice(0,index), ..._skills.slice(index+1)]

}


</script>




<p> My Skills List </p>
<form on:submit|preventDefault={handleSubmit} class="form-card">
{#each _skills as skills, index}

<input bind:value={_skills[index]}>
<button on:click={()=>_removeskill(index)}>x</button>
<br>

{/each}

<button on:click={_addSkills}>Add Skills</button>

</form>