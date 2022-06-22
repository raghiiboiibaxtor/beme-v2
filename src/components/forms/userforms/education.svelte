<script>
  import './formsglobal.css';
  // add data
  import {_firestore_} from "../../../routes/firebase/firebase.js"; //Importing Firestore component that was initialised in firebase.js
  import {updateDoc,onSnapshot,doc} from "firebase/firestore";
  import { getAuth,onAuthStateChanged} from "firebase/auth";


  // Creating list of variables that will pass data to Firestore ()
  let _education= {
    _education:{qualification: "",
    study_level: "",
    study_place: "",
    fav_subject: "",
    year: ""}};

  let inputElement; // Declaring input element used for binding ui to list variables

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
      ..._education})        
  }})     
  inputElement.focus();}

</script>

<!-- HTML TEMPLATE BEGINS -->
<div class="body-container">
  <div class="form-container">
  <!-- Task Form  handleSubmit() called when form is submitted. Default form response prevented-->
  <h1 class="form-heading"> Education </h1>
  <h1 class="form-subtitle"> Life is all about learning, then learning again.</h1>
  <form on:submit|preventDefault={handleSubmit} class="form-card">
      <div class="input-title-flex">
      <label for="title" class="label-input">Qualification</label>
      <!-- Binding firestore variables to ui and grabbing user entered text -->
      <input
          type="text"
          bind:value={_education._education.qualification}
          bind:this={inputElement}
          placeholder= "What did you graduate with?"
          class="form-control"
      />
      </div>

      <div class="input-title-flex">
        <label for="title" class="label-input">Level of Study</label>
        <!-- Binding firestore variables to ui and grabbing user entered text -->
        <input
            type="text"
            bind:value={_education._education.study_level}
            bind:this={inputElement}
            placeholder= "Eg: NZQA Level 8"
            class="form-control"
        />
        </div>

        <div class="input-title-flex">
          <label for="title" class="label-input">Place of Study</label>
          <input
              type="text"
              bind:value={_education._education.study_place}
              bind:this={inputElement}
              placeholder= "Where did you study?"
              class="form-control"
          />
          </div>
  
      <div class="input-title-flex">
      <label for="description" class="label-input">Favourite Subject</label>
      <input
          type="text"
          bind:value={_education._education.fav_subject}
          bind:this={inputElement}
          placeholder="What did you enjoy learning the most?"
          class="form-control"
      />
      </div>

      <div class="input-title-flex">
        <label for="description" class="label-input">Graduation Year </label>
        <input
            type="text"
            bind:value={_education._education.year}
            bind:this={inputElement}
            placeholder="When did you graduate?"
            class="form-control"
        />
        </div>
     
      <div class="button-flex">
      <button class="button" >Save </button>
      </div>
  </form>
  </div>
</div>
