<script>
    import './formsglobal.css';
    // add data
    import {_firestore_} from "../../../routes/firebase/firebase.js"; //Importing Firestore component that was initialised in firebase.js
    import {
      onSnapshot,
      collection,
      addDoc,
      doc,
      getDoc,
      query,
      where,
    } from "firebase/firestore";
    import { onDestroy } from "svelte";


    // Creating list of variables that will pass data to Firestore ()
    let _info = {
      role: "",
      company: "",
      time: "",
      reference: "",
      contact: "",
    };

    let inputElement; // Declaring input element used for binding ui to list variables
    let _user = [];
    
    // Reading Multiple Documents from Firestore
      const _collection = query(collection(_firestore_, "AllUsers"), where("email", "==", 'lesedingoma@gmail.com'));
      const _snapshot = onSnapshot(_collection, (querySnapshot) => {
        const _fireuser = [];
        querySnapshot.forEach((doc) => {
            _fireuser.push(doc.data());
        });
        _user = _fireuser;
      });

    /* Adding User to Firestore *
     *** Async function declared with nested Try/Catch(error handling). Code will continue to execute (even if function is long running) until promise (await) has been made. */ 
    const addUserToFirestore = async () => {
      try {
        await addDoc(collection(_firestore_, "AllUsers"), {
          ..._info,
          createdAt: Date.now(),
        });
        // Waiting to catch errors
      } catch (error) {
        console.error(error);
      }
    };

    // Handling form submission. Passing addUserToFirestore() as well as relevant variables so that function executes when form submitted.
    const handleSubmit = () => {
      addUserToFirestore();
      _info = { role: "",
      company: "",
      time: "",
      reference: "",
      contact: "",
      };
      inputElement.focus();
    };

    // Destroying _Snapshot obj from Firestore 
    onDestroy(_snapshot);
</script>



<!-- HTML TEMPLATE BEGINS -->


<div class="body-container">
    <div class="form-container">
    <!-- Task Form  handleSubmit() called when form is submitted. Default form response prevented-->
    <h1 class="form-heading"> Past Work </h1>
    <h1 class="form-subtitle"> The journey that got you here.</h1>
    <form on:submit|preventDefault={handleSubmit} class="form-card">
        <div class="input-title-flex">
        <label for="title" class="label-input">Job Title</label>
        <!-- Binding firestore variables to ui and grabbing user entered text -->
        <input
            type="text"
            bind:value={_info.role}
            bind:this={inputElement}
            placeholder= "What was your job title?"
            class="form-control"
        />
        </div>

        <div class="input-title-flex">
          <label for="title" class="label-input">Workplace / Company</label>
          <!-- Binding firestore variables to ui and grabbing user entered text -->
          <input
              type="text"
              bind:value={_info.company}
              bind:this={inputElement}
              placeholder= "What company did you work for?"
              class="form-control"
          />
          </div>

          <div class="input-title-flex">
            <label for="title" class="label-input">Length of Time</label>
            <input
                type="text"
                bind:value={_info.time}
                bind:this={inputElement}
                placeholder= "How long did you work?"
                class="form-control"
            />
            </div>
    
        <div class="input-title-flex">
        <label for="description" class="label-input">Reference</label>
        <input
            type="text"
            bind:value={_info.reference}
            bind:this={inputElement}
            placeholder="Who's your reference?"
            class="form-control"
        />
        </div>

        <div class="input-title-flex">
          <label for="description" class="label-input">Reference Contact</label>
          <input
              type="text"
              bind:value={_info.contact}
              bind:this={inputElement}
              placeholder="What's their email?"
              class="form-control"
          />
          </div>
       
        <div class="button-flex">
        <button class="button" >Save </button>
        </div>
    </form>
    </div>
</div>
