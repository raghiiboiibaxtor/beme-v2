<script>
    import {_firestore_} from "../../../routes/firebase/firebase.js";
    import { getAuth,onAuthStateChanged} from "firebase/auth";
    import {updateDoc,onSnapshot,doc, arrayUnion} from "firebase/firestore";
       
       
    let newskill
    
    const handleSubmit = () => {
      const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (user) {
          //successfully logging the current user signed ins data on console
          const _uid = user.uid;       
          
    
        // console log reference of current user signed in
          onSnapshot(doc(_firestore_, "AllUsers", _uid), (doc) => {
            console.log("Current user logged in: ", doc.data());})
    
       //we only need update, since the user gets their data created / addedwhen they sign up, 
        const _userupdate = doc(_firestore_, 'AllUsers', _uid)
    
        updateDoc(_userupdate,{
          arrayUnion:newskill})       
      
      
        }})}     
    
    </script>
    
    
    

    <p> My Skills List </p>
    <form on:submit|preventDefault={handleSubmit} class="form-card">
    <button class="button">Add Skills</button>
    <input bind:value ={newskill}>
    
        
    <br>
   
    </form>
