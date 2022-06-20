<script>
    import {_firestore_} from "../../routes/firebase/firebase.js";
    import { getAuth,onAuthStateChanged} from "firebase/auth";
    import {onSnapshot,doc} from "firebase/firestore";
  

    var today = new Date();
    var hour = today.getHours();
    let greeting = "";
    let username = "";

    if (hour < 12) {
        greeting = "Good Morning";
    } else if (hour < 18) {
        greeting = "Good Afternoon"
    } else {
        greeting = "Good Evening"
    }   

    const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
        //successfully logging the current user signed ins data on console
        const _uid = user.uid;   
    
     onSnapshot(doc(_firestore_, "AllUsers", _uid), (doc) => {
            console.log("Current user logged in: ", doc.data());
            username = doc.data()._myprofile.firstname
        })
   
        }});
        
</script>

{#if username != ""}
<h1>{greeting + " " + username + "!"}</h1>
{/if}



<style>
    h1{
    width: 88%;
    margin-left: 2.23rem;
    text-align: left;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 1.23rem;
    color: var(--primary);
    }
</style>


