<script>
    import {_firestore_} from "../../routes/firebase/firebase.js"; //Importing Firestore component that was initialised in firebase.js
    import {collection, addDoc,} from "firebase/firestore"; // Importing functions from Firestore

    // Creating list of variables that will pass data to Firestore ()
    let _userinfo = {
      firstname: "",
      lastname: "",
    };

    let inputElement; // Declaring input element used for binding ui to list variables

    /* Adding User to Firestore *
     *** Async function declared with nested Try/Catch(error handling). Code will continue to execute (even if function is long running) until promise (await) has been made. */
    const addUserToFirestore = async () => {
      try {
        await addDoc(collection(_firestore_, "AllUsers"), {
          ..._userinfo,
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
      _userinfo = { firstname: "", lastname: "" };
      inputElement.focus();
    };


</script>

<!-- HTML TEMPLATE BEGINS -->
<div class="container p-4">
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <!-- Task Form  handleSubmit() called when form is submitted. Default form response prevented-->
      <form on:submit|preventDefault={handleSubmit} class="card card-body p-5">
        <div class="mb-3">
            <h5 class="card-title">Add User To Firestore</h5>
          <label for="title" class="fs-5 text-secondary">Firstname</label>
          <!-- Binding firestore variables to ui and grabbing user entered text -->
          <input
            type="text"
            bind:value={_userinfo.firstname}
            bind:this={inputElement}
            placeholder="Firstname"
            class="form-control"
          />
        </div>

        <div class="mb-2">
          <label for="description" class="fs-5 text-secondary"
            >Lastname</label
          >
          <input
            type="text"
            bind:value={_userinfo.lastname}
            bind:this={inputElement}
            placeholder="Lastname"
            class="form-control"
          />
        </div>

        <div class="d-flex gap-2 mt-2">
          <button class="btn btn-primary btn-sm d-flex" >Save</button>
        </div>
      </form>
    </div>
  </div>
</div>

