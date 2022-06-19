<script>
  import './formsglobal.css';
  // add data
  import {_firestore_} from "../../../routes/firebase/firebase.js"; //Importing Firestore component that was initialised in firebase.js
  import {updateDoc,onSnapshot,doc, getDoc,runTransaction} from "firebase/firestore";
  import { getAuth,onAuthStateChanged} from "firebase/auth";

  // Creating list of variables that will pass data to Firestore ()
  let _myprofile = {
    _myprofile:{
    firstname: "",
    lastname: "",
    workemail: "",
    phone: "",
    bio:""}};

    
   let _showprofile=["name","surname","email"]


  let inputElement;

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
      ..._myprofile})        
  }})     
  inputElement.focus();}    // Declaring input element used for binding ui to list variables

</script>



<!-- HTML TEMPLATE BEGINS -->


<div class="body-container">
  <div class="form-container">
  <!-- Task Form  handleSubmit() called when form is submitted. Default form response prevented-->
  <h1 class="form-heading"> My Profile</h1>
  <h1 class="form-subtitle"> Enter your details to get started.</h1>
  <form on:submit|preventDefault={handleSubmit} class="form-card">
      <div class="input-title-flex">
      <label for="title" class="label-input">First Name</label>
      <!-- Binding firestore variables to ui and grabbing user entered text -->
      <input
          type="text"
          bind:value={_myprofile._myprofile.firstname}
          bind:this={inputElement}
          placeholder="Enter your first name"
          class="form-control"
      />
      </div>

      <div class="input-title-flex">
      <label for="description" class="label-input">Last Name</label>
      <input
          type="text"
          bind:value={_myprofile._myprofile.lastname}
          bind:this={inputElement}
          placeholder="Enter your last name"
          class="form-control"
      />

      <div class="input-title-flex">
        <label for="description" class="label-input"
            >Email</label
        >
        <input
            type="text"
            bind:value={_myprofile._myprofile.email}
            bind:this={inputElement}
            placeholder="Enter your email."
            class="form-control"
        />
        </div>
        <div class="input-title-flex">
          <label for="description" class="label-input"
              >Phone Number</label
          >
          <input
              type="text"
              bind:value={_myprofile._myprofile.phone}
              bind:this={inputElement}
              placeholder="Enter your contact number."
              class="form-control"
          />
          </div>

      <div class="input-title-flex">
      <label for="description" class="label-input"
          >Bio</label
      >
      <input
          type="text"
          bind:value={_myprofile._myprofile.bio}
          bind:this={inputElement}
          placeholder="This is your elevator pitch"
          class="textarea-form-control"
      />
      </div>
      <div class="button-flex">
      <button class="button" >Save </button>
      </div>
  </form>
  </div>
</div>
