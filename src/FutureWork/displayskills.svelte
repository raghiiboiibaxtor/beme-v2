<script>
    import {_firestore_} from "../../../routes/firebase/firebase.js";
    import { getAuth,onAuthStateChanged} from "firebase/auth";
    import {updateDoc,onSnapshot,doc, arrayUnion, getDoc, query, collection, where} from "firebase/firestore"; 
import { object_without_properties } from "svelte/internal";
    
    let _Skills = [];

 

    onSnapshot(doc(_firestore_, "AllUsers", "ui1GeMMlpkenbFQde6robp8g7Io2"), (doc) => {
            console.log("Current user logged in: ", doc.data());})

    //let q = getDoc(_firestore_,"AllUsers")
    
    
  console.log("will this print the skills only",object.values())
          
    </script>

    <!--<button on:click={remove}> 🗑 </button>--> 
    <br><br>
    <p>List of skills</p>
    
    <ul>
      
      <p>{_Skills }</p>
      <br>

    </ul>
    
   
   
   