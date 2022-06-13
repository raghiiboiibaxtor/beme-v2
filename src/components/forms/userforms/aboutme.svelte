<script>
  import './formsglobal.css'; // Importing global form css
  import { getAuth,onAuthStateChanged} from "firebase/auth";
  import {_firestore_} from "../../../routes/firebase/firebase.js"; //Importing Firestore component that was initialised in firebase.js
  import {updateDoc,onSnapshot,doc} from "firebase/firestore";


  // Creating list of variables that will pass data to Firestore ()
  let _aboutme = {
    _about:{currentrole: "",
    interest: "",
    level_experience: "",
    goals: ""}
  };

  let inputElement; // Declaring input element used for binding ui to list variables
  
  const handleSubmit = () => {
  
    const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
      if (user) {
      //successfully logging the current user signed ins data on console
      const _uid = user.uid;       
      

      // console log reference of current user signed in
      onSnapshot(doc(_firestore_, "AllUsers", _uid), (doc) => {
          console.log("Current user logged in: ", doc.data());
      })

     //we only need update, since the user gets their data created / addedwhen they sign up, 
      const _userupdate = doc(_firestore_, 'AllUsers', _uid)

      updateDoc(_userupdate,{
        ..._aboutme,
        
      })        
    }})
    inputElement.focus();
     }
    

</script>

<!-- HTML TEMPLATE BEGINS -->
<div class="body-container">
  <div class="form-container">
  <!-- Task Form  handleSubmit() called when form is submitted. Default form response prevented-->
  <h1 class="form-heading"> More About Me</h1>
  <h1 class="form-subtitle"> Describe your professional life and goals.</h1>
  <form on:submit|preventDefault={handleSubmit} class="form-card">

      <div class="input-title-flex">
      <label for="description" class="label-input"
          >Current Role</label
      >
      <input
          type="text"
          bind:value={_aboutme._about.currentrole}
          bind:this={inputElement}
          placeholder="Add your current role"
          class="form-control"
      />
      </div>

      <div class="input-title-flex">
      <label for="description" class="label-input"
          >Field of Interest</label
      >
      <input
          type="text"
          bind:value={_aboutme._about.interest}
          bind:this={inputElement}
          placeholder="What are you specialising in?"
          class="form-control"
      />
      </div>

      <div class="input-title-flex">
      <label for="description" class="label-input"
          >Level of Experience</label
      >
      <input
          type="text"
          bind:value={_aboutme._about.level_experience}
          bind:this={inputElement}
          placeholder="What is your level of experience?"
          class="form-control"
      />
      </div>

      <div class="input-title-flex">
      <label for="description" class="label-input"
          >Goals</label
      >
      <textarea
          type="text"
          bind:value={_aboutme._about.goals}
          bind:this={inputElement}
          placeholder="Shoot for the stars in 123 characters."
          class="textarea-form-control"
      />
      </div>

      <div class="button-flex">
      <button class="button" >Save </button>
      </div>
  </form>
  </div>
</div>

