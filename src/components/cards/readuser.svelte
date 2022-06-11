<script>
import {goto} from '$app/navigation';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {onSnapshot, doc, getDoc, collection, query, where,} from "firebase/firestore";
import {_firestore_} from "../../routes/firebase/firebase.js"; 

const auth = getAuth();
let _user;
let _uid;
let _email;
let _userarray = [];
onAuthStateChanged(auth, (user) => {
    _user = user;
  if (user) {
    _uid = user.uid;
    _email = user.email;
    _userarray = user;
    // ...
  } else {
    // User is signed out
  }
});

let _doctext;


    const unsub = onSnapshot(doc(_firestore_, "AllUsers", "Rkh06ixdTceYcbffOGgSeRxKhwr2"), (doc) => {
    const _name = doc.data().firstname;
    console.log("Current data: ", doc.data());
    _doctext = doc.data().firstname;
});

let _info = {
      firstname: "",
      lastname: "",
      workemail: "",
      pronouns: "",
      personalbio: "",
    };
    let _userdetails = [];

    // Reading Multiple Documents from Firestore
      const _collection = query(collection(_firestore_, "AllUsers"), where("__name__", "==", 'Rkh06ixdTceYcbffOGgSeRxKhwr2'));
      const _snapshot = onSnapshot(_collection, (querySnapshot) => {
        const _fireuser = [];
        querySnapshot.forEach((doc) => {
            _fireuser.push(doc.data());
        });
        _userdetails = _fireuser;
      });
    


  


</script>


<h1> ****</h1>
<p> {_doctext} </p>

<br>
<h1> **Reading Dynamic Data From Firestore**</h1>

{#if _user != null}
<p> {_userarray.email} </p>
<p> {_userarray.uid} </p>
{:else if _user == null}
<p> Loading </p>
{/if}

<br>
<h1> ****************************************</h1><br>
<h1> **Reading Static Data From Firestore**</h1>
{#each _userdetails as _info}
  <p>{_info.firstname}</p>
  <p>{_info.lastname}</p>
  <p>{_info.pronouns}</p>
  <p>{_info.workemail}</p>
  <p>{_info.personalbio}</p>
{/each}
<h1> ****</h1>
<br>
