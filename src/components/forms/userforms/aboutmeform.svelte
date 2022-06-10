<script>
    import './formsglobal.css'; // Importing global form css
    import {_firestore_} from "../../../routes/firebase/firebase.js"; //Importing Firestore component that was initialised in firebase.js
    import {collection, addDoc,} from "firebase/firestore";


    // Creating list of variables that will pass data to Firestore ()
    let _info = {
      currentrole: "",
      field_of_interest: "",
      bio: "",
      professional_goals: "",
    };

    let inputElement; // Declaring input element used for binding ui to list variables

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
      _info = {
      currentrole: "",
      field_of_interest: "",
      bio: "",
      professional_goals: "",
      };
      inputElement.focus();
    };

</script>

<!-- HTML TEMPLATE BEGINS -->
<div class="body-container">
    <div class="form-container">
    <!-- Task Form  handleSubmit() called when form is submitted. Default form response prevented-->
    <h1 class="form-heading"> More About Me</h1>
    <h1 class="form-subtitle"> Describe your professional life and goals.</h1>
    <form on:submit|preventDefault={handleSubmit} class="form-card">

        <div class="input-title-flex">
        <label for="description" class="label-input"
            >Current Role</label
        >
        <input
            type="text"
            bind:value={_info.currentrole}
            bind:this={inputElement}
            placeholder="Add your current role"
            class="form-control"
        />
        </div>

        <div class="input-title-flex">
        <label for="description" class="label-input"
            >Field of Interest</label
        >
        <input
            type="text"
            bind:value={_info.field_of_interest}
            bind:this={inputElement}
            placeholder="What are you specialising in?"
            class="form-control"
        />
        </div>

        <div class="input-title-flex">
        <label for="description" class="label-input"
            >Level of Experience</label
        >
        <input
            type="text"
            bind:value={_info.level_experience}
            bind:this={inputElement}
            placeholder="What is your level of experience?"
            class="form-control"
        />
        </div>

        <div class="input-title-flex">
        <label for="description" class="label-input"
            >Professional Goal</label
        >
        <textarea
            type="text"
            bind:value={_info.professional_goals}
            bind:this={inputElement}
            placeholder="Shoot for the stars in 123 characters."
            class="textarea-form-control"
        />
        </div>

        <div class="button-flex">
        <button class="button" >Save </button>
        </div>
    </form>
    </div>
</div>

