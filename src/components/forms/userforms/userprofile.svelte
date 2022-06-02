<script>
    import './formsglobal.css';
    // add data
    import {_firestore_} from "../../../routes/firebase/firebase.js"; //Importing Firestore component that was initialised in firebase.js
    import {collection, addDoc,} from "firebase/firestore";


    // Creating list of variables that will pass data to Firestore ()
    let _info = {
      firstname: "",
      lastname: "",
      workemail: "",
      pronouns: "",
    };

    let inputElement; // Declaring input element used for binding ui to list variables
  
    /* Adding User to Firestore */ 
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
      _info = {firstname: "",
      lastname: "",
      workemail: "",
      pronouns: "",
      };
      inputElement.focus();
    };

</script>



<!-- HTML TEMPLATE BEGINS -->


<div class="body-container">
    <div class="form-container">
    <!-- Task Form  handleSubmit() called when form is submitted. Default form response prevented-->
    <h1 class="form-heading"> My Profile</h1>
    <h1 class="form-subtitle"> Enter your details to get started.</h1>
    <form on:submit|preventDefault={handleSubmit} class="form-card">
        <div class="input-title-flex">
        <label for="title" class="label-input">First Name</label>
        <!-- Binding firestore variables to ui and grabbing user entered text -->
        <input
            type="text"
            bind:value={_info.firstname}
            bind:this={inputElement}
            placeholder= 'Enter your first name'
            class="form-control"
        />
        </div>

        <div class="input-title-flex">
        <label for="description" class="label-input">Last Name</label>
        <input
            type="text"
            bind:value={_info.lastname}
            bind:this={inputElement}
            placeholder="Enter your last name"
            class="form-control"
        />
        </div>

        <div class="input-title-flex">
        <label for="description" class="label-input"
            >Pronouns</label
        >
        <input
            type="text"
            bind:value={_info.pronouns}
            bind:this={inputElement}
            placeholder="What are your pronouns?"
            class="form-control"
        />
        </div>

        <div class="input-title-flex">
        <label for="description" class="label-input"
            >Personal Bio</label
        >
        <input
            type="text"
            bind:value={_info.level_experience}
            bind:this={inputElement}
            placeholder="Keep it short and sweet!"
            class="form-control"
        />
        </div>

        <div class="input-title-flex">
            <label for="description" class="label-input"
                >Professional Email</label
            >
            <input
                type="text"
                bind:value={_info.workemail}
                bind:this={inputElement}
                placeholder="Enter your professional email."
                class="form-control"
            />
            </div>

        <div class="button-flex">
        <button class="button" >Save </button>
        </div>
    </form>
    </div>
</div>
