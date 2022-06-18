<script>
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import {onSnapshot, doc, getDoc, collection, query, where,} from "firebase/firestore";
    import {_firestore_} from "../../routes/firebase/firebase.js"; 
    import { onDestroy } from "svelte";
    import "./cardsglobal.css";
    import GrabFile from "../files/grabfile.svelte";
    import LinkBar from "../links/linkbar.svelte";

    // Grabbing auth from firebase
    const auth = getAuth();
    let _user;
    let _uid;
    let _email;
    onAuthStateChanged(auth, (user) => {
        _user = user;
    if (user) {
        _uid = user.uid;
        _email = user.email;
        // If user is authenticated, assign their data into global variables.
    } else {
        // User is signed out (logic to be included here)
    }
    });

    // Creating struct / list
    let _info = {
        firstname: "",
        lastname: "",
        workemail: "",
        pronouns: "",
        personalbio: "",
        currentrole: "",
        experiencelevel: "",
        fieldofinterest: "",
        profgoals: "",
        currentrole:"",
    };

    // Creating array 
    let _userid;
    let _userdetails = [];

    //Reading Collection 'AllUsers' from Firestore
    const _collection = collection(_firestore_, "AllUsers");
    // Creating snapshot from firestore 
    const _snapshot = onSnapshot(_collection, (querySnapshot) => {
      let _fireuser = []; // Local array[]
      querySnapshot.forEach((doc) => {
          let details = {...doc.data(), userid: doc.id} // Details = data from firestore
          _fireuser = [details, ..._fireuser]; // Assigning details to local []
          _userdetails.push(doc.data()); // Pushing data to global []
          _userdetails = _fireuser; // Assinging local [] details to global [] details
          _userid = doc.data().userid; // Grabbing userid from firestore and assinging it to global var
      });
        console.log(_fireuser)
    });

    onDestroy(_snapshot); // Destroying snapshot
</script>

<!-- HTML BEGINS -->
{#each _userdetails as _info}
<!-- If block, finding the relevant userdata based on document auth -->
{#if _info.userid == _uid && _info.email == _email} 


<div class="body-container">
    <div class="card-container">

        <GrabFile/>
        <div class="horizontal-flex"> 
            <div class="left-items"> 
                <h1 class="card-heading"> {_info.firstname}</h1>
                <h1 class="card-heading">{_info.lastname}</h1>
            </div>
            </div>
            <div class="vertical-flex-control-box">
            <h3 class="card-subheading">{_info.bio}</h3>
            <div class="horizontal-flex">
                <div class="left-items">
                    <p class="small-text">{_info.pronouns}</p>
                </div>
                <div class="right-items">
                    <p class="small-text"> {_info.workemail}</p>
                </div>
        </div>
        <LinkBar/>
        <hr class="underline-flex">
        </div>
        <div class="vertical-flex-control-box">
            <div class="title-display-flex">
                <h4 class="card-h5">Current Role</h4>
                <h3 class="card-display-text">{_info.currentrole}</h3>
            </div>
            <div class="title-display-flex">
                <h4 class="card-h5">Field of Interest</h4>
                <h3 class="card-display-text">{_info.fieldofinterest}</h3>
            </div>
            <div class="title-display-flex">
                <h4 class="card-h5">Level of Experience</h4>
                <h3 class="card-display-text">{_info.experiencelevel}</h3>
            </div>
            <div class="title-display-flex">
                <h4 class="card-h5">Professional Goals</h4>
                <h3 class="card-display-text">{_info.profgoals}</h3>
            </div>
       </div>
       
    </div>
</div>

<!-- Each loop, executing the _userdetails[] array -->
<!-- Correct data displaying -->
{/if}
{/each}
