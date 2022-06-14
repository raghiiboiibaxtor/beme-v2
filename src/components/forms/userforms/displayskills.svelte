<script>
    import {_firestore_} from "../../../routes/firebase/firebase.js";
    import { getAuth,onAuthStateChanged} from "firebase/auth";
    import {updateDoc,onSnapshot,doc, arrayUnion, getDoc} from "firebase/firestore";
    
    
    
    let _skill_set2 = {
    _skills:[]}
    
    let usersskill=[]
    
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
        const _getuserskills = doc(_firestore_, 'AllUsers', _uid)
    
         usersskill= getDoc(_getuserskills)
          
        }})}     
    
    </script>
    
    
    <p>List of skills</p>
    {#each usersskill as {skill},i}
    <li>
        {i+1}:{skill}
        <br>
    </li>>
    {/each}
        
   
   
   