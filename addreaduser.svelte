<script>
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import {onSnapshot, doc, getDoc, collection, query, where,} from "firebase/firestore";
  import {_firestore_} from "../../routes/firebase/firebase.js";

  // Grabbing auth from firebase
  const auth = getAuth();
  let _uid;
  let _email;
  onAuthStateChanged(auth, (user) => {
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
      email: "",
      currentrole: "",
      field_of_interest: "",
      goals: "",
  };

  // Creating array 
  let _userdetails = [];

  //Reading Collection 'AllUsers' from Firestore
  const _collection = collection(_firestore_, "AllUsers");
  // Copying Collection Data into a "snapshot"
  const _snapshot = onSnapshot(_collection, (querySnapshot) => {
    let _fireuser = []; // Local array _fireuser
    querySnapshot.forEach((doc) => {
        let details = {...doc.data(), userid: doc.id} // Defining details which will be pushed into the local array _fireuser
        _fireuser = [details, ..._fireuser]; // Spreding the newly assigned data into _fireuser
        _userdetails.push(doc.data()); // Pushing firestore document data to _userdetails[]
        _userdetails = _fireuser; // Assigning local[] data to global[] 
        _userid = doc.data().userid; // Grabbing user id from doc and assigning it to global variable (which will be used in if condition)
    });
      console.log(_fireuser)
  });

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
<p>{_info.field_of_interest}</p>
<p>{_info.currentrole}</p>
<p>{_info.goals}</p>
{/if}

{/each}
<h1> ****</h1>
<br>