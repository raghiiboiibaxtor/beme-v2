<script>
    import './formsglobal.css';
    // add data
    import {_firestore_} from "../../../routes/firebase/firebase.js"; //Importing Firestore component that was initialised in firebase.js
    import {onSnapshot, doc, collection, addDoc,} from "firebase/firestore";
    import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth"

    // Creating list of variables that will pass data to Firestore ()
    let _profile = {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      bio:""
    };

    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        if (user) {

        //successfully logging the current user signed ins data on console
        const _uid = user.uid;
        onSnapshot(doc(_firestore_, "AllUsers", _uid), (doc) => {
        console.log("Current user logged in: ", doc.data());
        })
        
        //because we are "adding" the user when they sign up we only need update :)
          const _userupdate = doc(_firestore_, "AllUsers",_uid)
                   
           updateDoc(_userupdate,{
              ..._profile,
              email: user.email
            });
       }});

    let inputElement; // Declaring input element used for binding ui to list variables
  
    //Adding User to Firestore 
    const addUserToFirestore = async () => {
      try {
        await addDoc(collection(_firestore_, "AllUsers"), {
          ..._profile,
          createdAt: Date.now(),
        });
        // Waiting to catch errors
      } catch (error) {
        console.error(error);
      }
    };

   // Handling form submission & passing addUserToFirestore()
    const handleSubmit = () => {
      addUserToFirestore();
      _profile = {firstname: "",
      lastname: "",
      email: "",
      phone: "",
      bio:""
      };
      inputElement.focus();
    };

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
            bind:value={_profile.firstname}
            bind:this={inputElement}
            placeholder= 'Enter your first name'
            class="form-control"
        />
        </div>

        <div class="input-title-flex">
        <label for="description" class="label-input">Last Name</label>
        <input
            type="text"
            bind:value={_profile.lastname}
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
              bind:value={_profile.workemail}
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
                bind:value={_profile.phone}
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
            bind:value={_profile.bio}
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
