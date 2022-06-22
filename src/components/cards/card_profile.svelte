<script>
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import {onSnapshot, doc, getDoc, collection, query, where,} from "firebase/firestore";
    import {_firestore_} from "../../routes/firebase/firebase.js"; 
    import { onDestroy } from "svelte";
    import "./cardsglobal.css";
    import GrabFile from "../files/grabfile.svelte";
    import LinkBar from "../links/linkbar.svelte";
    import EditButton from "../elements/editbutton.svelte";
    import CancelButton from "../elements/cancelbutton.svelte";
    import UserProfile from "../forms/userforms/userprofile.svelte";
import Cancelbutton from "../elements/cancelbutton.svelte";
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

    // Creating array 
    let _userid;
    let _userdetails = [];
    let clicked = false;

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

{#if clicked === false}
<div class="body-container">
    <h2 class="card-h2">About Me</h2>
    <div class="card-container">
            <div class="edit-button"><button on:click={() => clicked = !clicked}>
            <EditButton/></button>
        </div>
            <GrabFile/>
        <div class="horizontal-flex"> 
            <div class="left-items"> 
                <h1 class="card-heading"> {_info._myprofile.firstname}</h1>
                <h1 class="card-heading">{_info._myprofile.lastname}</h1>
            </div>
            </div>
            <div class="vertical-flex-control-box">
            <h3 class="card-subheading">{_info._myprofile.bio}</h3>
            <div class="horizontal-flex">
                <div class="left-items">
                    <p class="small-text">{_info._myprofile.pronouns}</p>
                </div>
                <div class="right-items">
                    <p class="small-text"> {_info._myprofile.workemail}</p>
                </div>
        </div>
        <LinkBar/>
        <hr class="underline-flex">
        </div>
        <div class="vertical-flex-control-box">
            <div class="title-display-flex">
                <h4 class="card-h5">Current Role</h4>
                <h3 class="card-display-text">{_info._userabout.currentrole}</h3>
            </div>
            <div class="title-display-flex">
                <h4 class="card-h5">Field of Interest</h4>
                <h3 class="card-display-text">{_info._userabout.interest}</h3>
            </div>
            <div class="title-display-flex">
                <h4 class="card-h5">Level of Experience</h4>
                <h3 class="card-display-text">{_info._userabout.level_experience}</h3>
            </div>
            <div class="title-display-flex">
                <h4 class="card-h5">Professional Goals</h4>
                <h3 class="card-display-text">{_info._userabout.goals}</h3>
            </div>
       </div>
    </div>
</div>

{:else}
<div class="body-container">
    <h2 class="card-h2">About Me</h2>
    <div class="edit-card-container">
        <div class="cancel-button">
        <button on:click={() => clicked = !clicked}><Cancelbutton/></button></div>
<UserProfile/>
</div>
</div>

{/if}

<!-- Each loop, executing the _userdetails[] array -->
<!-- Correct data displaying -->
{/if}
{/each}