<script>
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import {onSnapshot, doc, getDoc, collection, query, where,} from "firebase/firestore";
    import {_firestore_} from "../../../../routes/firebase/firebase.js"; 
    import { onDestroy } from "svelte";

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

<h1> **Reading Dynamic Data From Firestore**</h1>

<!-- Each loop, executing the _userdetails[] array -->
{#each _userdetails as _info}
<!-- If block, finding the relevant userdata based on document auth -->
{#if _info.userid == _uid && _info.email == _email} 
<!-- Correct data displaying -->
<p>{_info.userid}</p>
<p>{_info.email}</p>
<p>{_info.firstname}</p>
<p>{_info.lastname}</p>
<p>{_info.pronouns}</p>
<p>{_info.workemail}</p>
<p>{_info.bio}</p>
{/if}
 
{/each}
<h1> ****</h1>
<br>