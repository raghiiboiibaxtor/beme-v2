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
    <h2 class="card-h2">Past Experience</h2>
    <div class="card-container">
        <div class="vertical-flex-control-box">
            <div class="title-display-flex-top">
                <h4 class="card-h5">Role</h4>
                <h3 class="card-display-text">{_info._experience1.role}</h3>
            </div>
            <div class="title-display-flex">
                <h4 class="card-h5">Workplace / Company</h4>
                <h3 class="card-display-text">{_info._experience1.company}</h3>
            </div>
            <div class="title-display-flex">
                <h4 class="card-h5">Length of Time</h4>
                <h3 class="card-display-text">{_info._experience1.date}</h3>
            </div>
            <div class="title-display-flex">
                <h4 class="card-h5">Top Skill Learned / Utilised</h4>
                <h3 class="card-display-text">{_info._experience1.skill_applied}</h3>
            </div>
       </div>
       
    </div>
</div>

<!-- Each loop, executing the _userdetails[] array -->
<!-- Correct data displaying -->
{/if}
{/each}
