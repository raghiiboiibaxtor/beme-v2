<script>
    import {_firestore_} from "../../routes/firebase/firebase.js"; //Importing Firestore component that was initialised in firebase.js
    import {
     onSnapshot,
     collection,
     addDoc,
     deleteDoc,
     doc,
     updateDoc,
   } from "firebase/firestore";
   import { getAuth, onAuthStateChanged } from "firebase/auth";
   import Toastify from "toastify-js";
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

   let _details = {
     firstname: "",
     lastname: "",
   };
 
   let _images = [];
   let inputElement;
 
   let editStatus = false;
   let currentId = "";
 
   // Grabbing Array of Users
   const grabData = onSnapshot(
     collection(_firestore_, "AllUsers"),
     (querySnapshot) => {
       _images = querySnapshot.docs.map((doc) => ({
         ...doc.data(),
         id: doc.id,
       }));
     },
     (err) => {
       console.error(err);
     }
   );
 
   const deleteTask = async (id) => {
     try {
       await deleteDoc(doc(_firestore_, "AllUsers", id));
     } catch (error) {
       console.error(error);
     }
   };
 
   const editTask = (currenTask) => {
     currentId = currenTask.id;
     _details.firstname = currenTask.firstname;
     _details.lastname = currenTask.lastname;
 
     editStatus = true;
   };
 
   const updateTask = async () => {
     try {
       await updateDoc(doc(_firestore_, "AllUsers", currentId), _details);
       Toastify({
         text: "Task updated",
       }).showToast();
     } catch (error) {
       console.error(error);
     }
   };
 
   const handleSubmit = () => {
     if (!_details.firstname) return;
 
     if (!editStatus) {
       addTask();
     } else {
       updateTask();
       editStatus = false;
       currentId = "";
     }
     _details = { firstname: "", lastname: "" };
     inputElement.focus();
   };
 
   const onCancel = () => {
     editStatus = false;
     currentId = "";
     _details =  { firstname: "", lastname: "" };
   };
 
   onDestroy(grabData);
</script>
 
 <!-- TEMPLATE -->
{#if editStatus}
 <div class="container p-4">
   <div class="row">
     <div class="col-md-6 offset-md-3">
       <!-- Task Form -->
       <form on:submit|preventDefault={handleSubmit} class="card card-body p-5">
         <div class="mb-3">
           <label for="title" class="fs-5 text-secondary">FirstName</label>
           <input
             type="text"
             bind:value={_details.firstname}
             bind:this={inputElement}
             placeholder="First"
             class="form-control"
           />
         </div>
 
         <div class="mb-2">
           <label for="description" class="fs-5 text-secondary"
             >LastName</label
           >
           <input
             bind:value={_details.lastname}
             rows="3"
             placeholder="Last"
             class="form-control"
           />
         </div>
 
         <div class="d-flex gap-2 mt-2">
           <button class="btn btn-primary btn-sm d-flex" >
            
             <span class="ms-2">
               {#if !editStatus} Save {:else} Update {/if}
             </span>
           </button>
           {#if editStatus}
             <button on:click={onCancel} class="btn btn-info btn-sm"
               >Cancel</button>
           {/if}
         </div>
       </form>
       </div>
       </div>
       </div>
 {:else}
       <!-- Render all _images -->
       {#each _images as _details}
       {#if _details.userid == _uid && _details.email == _email} 
         <div>
           <div>
             <h1>{_details.firstname}</h1>
           </div>
           <h1>{_details.lastname}</h1>
           <h1>{_details.userid}</h1>
           <div>
             <span on:click={editTask(_details)}>
             Edit
           </span>
             <button on:click={deleteTask(_details.id)} >
               <span>
                 Delete
               </span>
               <span >Archive</span>
             </button>
           </div>
         </div>
         {/if}
       {/each}
 {/if}
 <style>
 </style>