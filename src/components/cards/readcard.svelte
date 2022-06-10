<!-- JAVASCRIPT BEGINS -->
<script>
    import {goto} from '$app/navigation';
    import { getAuth, GoogleAuthProvider, onAuthStateChanged} from "firebase/auth";
    import {_firestore_} from "../../routes/firebase/firebase.js"; 
    import {
      onSnapshot, collection, addDoc, doc, getDoc, query, where, getDocs, documentId, QuerySnapshot} from "firebase/firestore";
    import { onDestroy } from "svelte";


    // Creating list of variables that will pass data to Firestore ()
    let _info = {
      firstname: "",
      lastname: "",
      workemail: "",
      pronouns: "",
      personalbio: "",
    };
   // let inputElement; // Declaring input element used for binding ui to list variables

    // Authenticating user before reading
    const auth = getAuth();
    const user = auth.currentUser;
    let _useremail;
   // let uid = '';

   onAuthStateChanged(auth, (user) => {
    if (user !== null) {
        const uid = user.uid;
        _useremail = user.email;
        onSnapshot(doc(_firestore_, "AllUsers", _useremail), (doc) => {
        console.log("Current data in addreaduser: ", doc.data());
    })
    }
    else{
        
        console.log("auth.currentUser error")
    };
})

 
    // STATIC Reading user from Firestore
    let _user = [];
    // Reading Multiple Documents from Firestore
      const _collection = query(collection(_firestore_, "AllUsers"), where("workemail", "==", 'lesedingoma@gmail.com'));
      const _snapshot = onSnapshot(_collection, (querySnapshot) => {
        const _fireuser = [];
        querySnapshot.forEach((doc) => {
            _fireuser.push(doc.data());
        });
        _user = _fireuser;
      });

    // Destroying _Snapshot obj from Firestore
   onDestroy(_snapshot);


</script>


<!-- HTML TEMPLATE BEGINS -->

<h1> **Reading Dynamic Data From Firestore**</h1>
{#if user !== null}
<p>{_useremail}</p>
{:else}
<p>{'user = null'}</p>
{/if}

 

<br>
<h1> ****************************************</h1><br>
<h1> **Reading Static Data From Firestore**</h1>
{#each _user as _info}
  <p>{_info.firstname}</p>
  <p>{_info.lastname}</p>
  <p>{_info.pronouns}</p>
  <p>{_info.workemail}</p>
  <p>{_info.personalbio}</p>
{/each}
<h1> ****</h1>






















<!--
/* Adding User to Firestore *
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
 _info = {firstname: "",
 lastname: "",
 email: "",
 currentrole: "",
 field_of_interest: "",
 level_experience: "",
 professional_goals: "",
 skills:{skill1:"",skill2:"",skill3:""}};
 inputElement.focus();
};




<div class="container p-4">
  <div class="row">
    <div class="col-md-6 offset-md-3">
      Task Form  handleSubmit() called when form is submitted. Default form response prevented
      <form on:submit|preventDefault={handleSubmit} class="form-card">
        <div class="input-title-flex">
        <label for="title" class="label-input">First Name</label>
         Binding firestore variables to ui and grabbing user entered text 
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

-->