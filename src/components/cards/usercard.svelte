<script>
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import {onSnapshot, doc, getDoc, collection, query, where,} from "firebase/firestore";
    import {_firestore_} from "../../routes/firebase/firebase.js"; 

    const auth = getAuth();
    let _uid;
    let _email;
    onAuthStateChanged(auth, (user) => {
    if (user) {
        _uid = user.uid;
        _email = user.email;
        // ...
    } else {
        // User is signed out
    }
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
    const _collection = collection(_firestore_, "AllUsers");

    const _snapshot = onSnapshot(_collection, (querySnapshot) => {
      let _fireuser = [];
      querySnapshot.forEach((doc) => {
          let details = {...doc.data(), userid: doc.id}
          _fireuser = [details, ..._fireuser];
          _userdetails.push(doc.data());
          _userdetails = _fireuser;
          _userid = doc.data().userid;
      });
        console.log(_fireuser)
    });
  
</script>

<!-- ######################## HTML BEGINS ############################### -->

<h1> ****************************************</h1>
<h1> **Reading Dynamic Data From Firestore**</h1>
{#each _userdetails as _info}

{#if _info.userid == _uid && _info.email == _email}
<p>{_info.userid}</p>
<p>{_info.firstname}</p>
<p>{_info.email}</p>
{/if}
 
{/each}
<h1> ****</h1>
<br>