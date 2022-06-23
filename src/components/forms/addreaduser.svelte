<!-- PLEASE NOTE : This page is purely functional. The data is real time pushed to firestore and pulled from firestore. The UI for the read function has not been implemented yet, as it was not part of this brief. Please see src/components/forms for components where AddUser functionality has been implemented with the ui as part of the brief.
-->

<!-- JAVASCRIPT BEGINS -->
<script>
    import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
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
QuerySnapshot
    } from "firebase/firestore";
    import { onDestroy } from "svelte";
    import { dirty_components } from "svelte/internal";


    // Creating list of variables that will pass data to Firestore ()
    let _info = {
      firstname: "",
      lastname: "",
      workemail: "",
      pronouns: "",
      personalbio: "",
    };

    let inputElement; // Declaring input element used for binding ui to list variables

       
    let _user = [];

    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {

  


        //successfully logging the current user signed ins data on console
        const uid = user.uid;
        onSnapshot(doc(_firestore_, "AllUsers", uid), (doc) => {
        console.log("Current data in addreaduser: ", doc.data());
        })
        
        /*const _fireuser = [];

        querySnapshot.forEach((doc) => {
            _fireuser.push(doc.data());
        });
        _user = _fireuser;
      }*/
    }

    else{
      console.log("auth.currentUser error")
    };
    

    
    /* Adding User to Firestore *\
     *** Async function declared with nested Try/Catch(error handling). Code will continue to execute (even if function is long running) until promise (await) has been made. */ 
     
     
     const addUserToFirestore = async () => {
      try {
        await addDoc(collection(_firestore_, "AllUsers"), {
          ..._info,
          createdAt: Date.now(),
        });
        // Waiting to catch errors
      } catch (error) {
        console.error(error);
      }
    };

    // Handling form submission. Passing addUserToFirestore() as well as relevant variables so that function executes when form submitted.
    
    const handleSubmit = () => {
      addUserToFirestore();
      _info = { firstname: "",
      lastname: "",
      workemail: "",
      pronouns: "",
      personalbio: ""};
      inputElement.focus();
    };
    // Destroying _Snapshot obj from Firestore
    //onDestroy(_snapshot);
</script>



<!-- HTML TEMPLATE BEGINS -->
<h1> **Reading Data From Firestore**</h1>
{#each _user as _info}
  <p>{_info.firstname}</p>
  <p>{_info.lastname}</p>
  <p>{_info.pronouns}</p>
  <p>{_info.workemail}</p>
  <p>{_info.personalbio}</p>
{/each}
<h1> ****</h1>
<div class="container p-4">
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <!-- Task Form  handleSubmit() called when form is submitted. Default form response prevented-->
      <form on:submit|preventDefault={handleSubmit} class="form-card">
        <div class="input-title-flex">
        <label for="title" class="label-input">First Name</label>
        <!-- Binding firestore variables to ui and grabbing user entered text -->
        <input
            type="text"
            bind:value={_info.firstname}
            bind:this={inputElement}
            placeholder= 'Enter your first name'
            class="form-control"
        />
        </div>

        <div class="input-title-flex">
        <label for="description" class="label-input">Last Name</label>
        <input
            type="text"
            bind:value={_info.lastname}
            bind:this={inputElement}
            placeholder="Enter your last name"
            class="form-control"
        />
        </div>

        <div class="input-title-flex">
        <label for="description" class="label-input"
            >Pronouns</label
        >
        <input
            type="text"
            bind:value={_info.pronouns}
            bind:this={inputElement}
            placeholder="What are your pronouns?"
            class="form-control"
        />
        </div>

        <div class="input-title-flex">
        <label for="description" class="label-input"
            >Personal Bio</label
        >
        <input
            type="text"
            bind:value={_info.personalbio}
            bind:this={inputElement}
            placeholder="Keep it short and sweet!"
            class="form-control"
        />
        </div>

        <div class="input-title-flex">
            <label for="description" class="label-input"
                >Professional Email</label
            >
            <input
                type="text"
                bind:value={_info.workemail}
                bind:this={inputElement}
                placeholder="Enter your professional email."
                class="form-control"
            />
            </div>

        <div class="button-flex">
        <button class="button" >Save </button>
        </div>
    </form>
    </div>
  </div>
</div>

