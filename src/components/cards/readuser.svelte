<script>
import {goto} from '$app/navigation';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
let _user;
let _userarray = [];
onAuthStateChanged(auth, (user) => {
    _user = user;
  if (user) {
    const uid = user.uid;
    _userarray = user;
        onSnapshot(doc(_firestore_, "AllUsers", uid), (doc) => {
        console.log("Current data in addreaduser: ", doc.data());
        })
    // ...
  } else {
    // User is signed out
  }
});

</script>



<h1> **Reading Dynamic Data From Firestore**</h1>

{#if _user != null}
<p> {_userarray.email} </p>
<p> {_userarray.firstname} </p>
{:else if _user == null}
<p> Loading </p>
{/if}


<br>
<h1> ****************************************</h1><br>