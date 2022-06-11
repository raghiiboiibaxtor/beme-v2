<script>
    import './formsglobal.css';
    // add data
    import {_firestore_} from "../../../routes/firebase/firebase.js"; //Importing Firestore component that was initialised in firebase.js
    import {collection, addDoc,} from "firebase/firestore";


    // Creating list of variables that will pass data to Firestore ()
    let _education= {
      qualification: "",
      _: "",
      _: "",
      _favsubject: "",
      year: "",
    };

    let inputElement; // Declaring input element used for binding ui to list variables

    /* Adding User to Firestore*/
    const addUserToFirestore = async () => {
      try {
        await addDoc(collection(_firestore_, "AllUsers"), {
          ..._education,
          createdAt: Date.now(),
        });
        // Waiting to catch errors
      } catch (error) {
        console.error(error);
      }
    };

    // Handling form submission & passing addUserToFirestore()
    const handleSubmit = () => {
      addUserToFirestore();
      _education= { qualification: "",
      study_level: "",
      study_place: "",
      fav_subject: "",
      year: "",
      };
      inputElement.focus();
    };

</script>

<!-- HTML TEMPLATE BEGINS -->
<div class="body-container">
    <div class="form-container">
    <!-- Task Form  handleSubmit() called when form is submitted. Default form response prevented-->
    <h1 class="form-heading"> Education </h1>
    <h1 class="form-subtitle"> Life is all about learning, then learning again.</h1>
    <form on:submit|preventDefault={handleSubmit} class="form-card">
        <div class="input-title-flex">
        <label for="title" class="label-input">Qualification</label>
        <!-- Binding firestore variables to ui and grabbing user entered text -->
        <input
            type="text"
            bind:value={_education.qualification}
            bind:this={inputElement}
            placeholder= "What did you graduate with?"
            class="form-control"
        />
        </div>

        <div class="input-title-flex">
          <label for="title" class="label-input">Level of Study</label>
          <!-- Binding firestore variables to ui and grabbing user entered text -->
          <input
              type="text"
              bind:value={_education._}
              bind:this={inputElement}
              placeholder= "Eg: NZQA Level 8"
              class="form-control"
          />
          </div>

          <div class="input-title-flex">
            <label for="title" class="label-input">Place of Study</label>
            <input
                type="text"
                bind:value={_education._}
                bind:this={inputElement}
                placeholder= "Where did you study?"
                class="form-control"
            />
            </div>
    
        <div class="input-title-flex">
        <label for="description" class="label-input">Favourite Subject</label>
        <input
            type="text"
            bind:value={_education._favsubject}
            bind:this={inputElement}
            placeholder="What did you enjoy learning the most?"
            class="form-control"
        />
        </div>

        <div class="input-title-flex">
          <label for="description" class="label-input">Graduation Year </label>
          <input
              type="text"
              bind:value={_education.year}
              bind:this={inputElement}
              placeholder="When did you graduate?"
              class="form-control"
          />
          </div>
       
        <div class="button-flex">
        <button class="button" >Save </button>
        </div>
    </form>
    </div>
</div>
