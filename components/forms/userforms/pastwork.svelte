<script>
    import './formsglobal.css';
    // add data
    import {_firestore_} from "../../../routes/firebase/firebase.js"; //Importing Firestore component that was initialised in firebase.js
    import {updateDoc,onSnapshot,doc} from "firebase/firestore";
    import { getAuth,onAuthStateChanged} from "firebase/auth";

    // Creating list of variables that will pass data to Firestore ()
    let _experience = {
      _experience1:{role: "",
      company: "",
      date: "",
      skill_applied:""},
      _experience2:{role: "",
      company: "",
      date: "",
      skill_applied:""},
      _experience3:{role: "",
      company: "",
      date: "",
      skill_applied:""},
      _experience4:{role: "",
      company: "",
      date: "",
      skill_applied:""}
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
          console.log("Current user logged in: ", doc.data());})

     //we only need update, since the user gets their data created / addedwhen they sign up, 
      const _userupdate = doc(_firestore_, 'AllUsers', _uid)

      updateDoc(_userupdate,{
        ..._experience})        
    }})     
    inputElement.focus();}   

</script>



<!-- HTML TEMPLATE BEGINS -->


<div class="body-container">
  <div class="form-container">
    <!-- Task Form  handleSubmit() called when form is submitted. Default form response prevented-->
    <h1 class="form-heading"> Detailed Experience </h1>
    <h1 class="form-subtitle"> The journey that got you here.</h1>
    <form on:submit|preventDefault={handleSubmit} class="form-card">
        <div class="input-title-flex">
        <label for="title" class="label-input">Job Title</label>
        <!-- Binding firestore variables to ui and grabbing user entered text -->
        <input
            type="text"
            bind:value={_experience._experience1.role}
            bind:this={inputElement}
            placeholder= "What was your job title?"
            class="form-control"
        />
        </div>

        <div class="input-title-flex">
          <label for="title" class="label-input">Place / Company</label>
          <!-- Binding firestore variables to ui and grabbing user entered text -->
          <input
              type="text"
              bind:value={_experience._experience1.company}
              bind:this={inputElement}
              placeholder= "What company did you experience for?"
              class="form-control"
          />
          </div>

          <div class="input-title-flex">
            <label for="title" class="label-input">Duration</label>
            <input
                type="text"
                bind:value={_experience._experience1.date}
                bind:this={inputElement}
                placeholder= "How long did you experience here?"
                class="form-control"
            />
            </div>            
          <div class="input-title-flex">
            <label for="title" class="label-input">Skills Applied</label>
            <input
                type="text"
                bind:value={_experience._experience1.skill_applied}
                bind:this={inputElement}
                placeholder= "What skills did you applied or learned."
                class="textarea-form-control"
            />
            </div>       
        <div class="button-flex">
        <button class="button" >Save </button>
        </div>
    </form>
    </div>
</div>

