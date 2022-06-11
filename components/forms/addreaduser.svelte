<!-- svelte-ignore non-top-level-reactive-declaration -->
<!-- PLEASE NOTE : This page is purely functional. The data is real time pushed to firestore and pulled from firestore. The UI for the read function has not been implemented yet, as it was not part of this brief. Please see src/components/forms for components where AddUser functionality has been implemented with the ui as part of the brief.
-->

<!-- JAVASCRIPT BEGINS -->
<script>
    import { getAuth, GoogleAuthProvider, onAuthStateChanged} from "firebase/auth";
    import {_firestore_} from "../../routes/firebase/firebase.js"; //Importing Firestore component that was initialised in firebase.js
    import {
      onSnapshot,
      collection,
      addDoc,
      doc,
      getDoc,
      query,
      where,
      getDocs,
      documentId,
      QuerySnapshot,
      updateDoc
    } from "firebase/firestore";
    
    import { onDestroy } from "svelte";
    import { dirty_components } from "svelte/internal";


    // Creating list of variables that will pass data to Firestore ()
    let _info = {
      firstname: "",
      lastname: "",
      email: "",
      currentrole: "",
      field_of_interest: "",
      level_experience: "",
      professional_goals: ""
    };

    let inputElement; // Declaring input element used for binding ui to list variables
    let _user = [];

  

    // using the onAuthStateChange to listen for updates in the users authentication
    // including the function to update the signed in user data when submitting a form
    
   
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
        const _userupdate = doc(_firestore_, 'Allusers', _uid)

        updateDoc(_userupdate,{
          ..._info,
          email:user.email
        })
      }});

    // Handling form submission. Passing addUserToFirestore() as well as relevant variables 
    //so that function executes when form submitted.
    
    const handleSubmit = () => {
          //addUserToFirestore();
           _info = {  
                    firstname: "",
                    lastname: "",
                    email: "",
                    currentrole: "",
                    field_of_interest: "",
                    level_experience: "",
                    professional_goals: ""};
            inputElement.focus();      
    };

//Destroying _Snapshot obj from Firestore
//onDestroy(_snapshot);
</script>


<!-- HTML TEMPLATE BEGINS -->
<h1> **Reading Data From Firestore**</h1>
{#each _user as _info}
  <p>{_info.firstname}</p>
  <p>{_info.lastname}</p>
  <p>{_info.email}</p>
  <p>{_info.currentrole}</p>
  <p>{_info.field_of_interest}</p>
  <p>{_info.level_experience}</p>
  <p>{_info.professional_goals}</p>
  <p>{_info.currentrole}</p>
{/each}
<h1> ***** </h1>
<div class="container p-4">
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <!-- _info Form  handleSubmit() called when form is submitted. Default form response prevented-->
      <form on:submit|preventDefault={handleSubmit} class="card card-body p-5">
        <div class="mb-3">
            <h5 class="card-title"> Welcome Your BeMe page <br></h5>
          <label for="title" class="fs-5 text-secondary">Firstname</label>
          <!-- Binding firestore variables to ui and grabbing user entered text -->
          <input
            type="text"
            bind:value={_info.firstname}
            bind:this={inputElement}
            placeholder= 'First Name'
            class="form-control"
          />
        </div>

        <div class="mb-2">
          <label for="description" class="fs-5 text-secondary"
            >Lastname</label
          >
          <input
            type="text"
            bind:value={_info.lastname}
            bind:this={inputElement}
            placeholder="Lastname"
            class="form-control"
          />
        </div>

        <div class="mb-4">
          <label for="description" class="fs-5 text-secondary"
            >Current Role</label
          >
          <input
            type="text"
            bind:value={_info.currentrole}
            bind:this={inputElement}
            placeholder="Add your current role"
            class="form-control"
          />
        </div>

        <div class="mb-5">
          <label for="description" class="fs-5 text-secondary"
            >Field of Interest</label
          >
          <input
            type="text"
            bind:value={_info.field_of_interest}
            bind:this={inputElement}
            placeholder="What are you specialising in now"
            class="form-control"
          />
        </div>

        <div class="mb-6">
          <label for="description" class="fs-5 text-secondary"
            >Level of Experience</label
          >
          <input
            type="text"
            bind:value={_info.level_experience}
            bind:this={inputElement}
            placeholder="Level of Experience"
            class="form-control"
          />
        </div>
<!--
        <div class="mb-7">
          <label for="description" class="fs-5 text-secondary"
            >Skill</label
          >
          <input
            type="text"
            bind:value={_info.professional_goals}
            bind:this={inputElement}
            placeholder="What is your next role"
            class="form-control"
          />
        </div>
        
        <h5 class="card-title"> Add your top 2 skills <br></h5>
        <div class="mb-8">
          <label for="description" class="fs-5 text-secondary"
            >Skill 1</label
          >
          <input
            type="text"
            bind:value={_info.skills.skill1}
            bind:this={inputElement}
            class="form-control"
          />
        </div>
        <div class="mb-9">
          <label for="description" class="fs-5 text-secondary"
            >Skill 2</label
          >
          <input
            type="text"
            bind:value={_info.skills.skill2}
            bind:this={inputElement}
            class="form-control"
          />
        </div>
        <div class="mb-10">
          <label for="description" class="fs-5 text-secondary"
            >Skill 3</label
          >
          <input
            type="text"
            bind:value={_info.skills.skill3}
            bind:this={inputElement}
            class="form-control"
          />
        </div>-->
        <div class="d-flex gap-2 mt-2">
          <button class="btn btn-primary btn-sm d-flex" >Save</button>
        </div>
      </form>
    </div>
  </div>
</div>

