<script>
    import './formsglobal.css';
    // add data
    import {_firestore_} from "../../../routes/firebase/firebase.js"; //Importing Firestore component that was initialised in firebase.js
    import {collection, addDoc,} from "firebase/firestore";

    // Creating list of variables that will pass data to Firestore ()
    let _info = {
      favskill: "",
      skillsapplied:{skill1:"",skill2:"",skill3:"",skill4:"",skill5:"",skill6:"",skill7:"",skill8:""}
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
      _info = {favskill: "",
      skillsapplied:{skill1:"",skill2:"",skill3:"",skill4:"",skill5:"",skill6:"",skill7:"",skill8:""}
      };
      inputElement.focus();
    };

</script>



<!-- HTML TEMPLATE BEGINS -->


<div class="body-container">
    <div class="form-container">
    <!-- Task Form  handleSubmit() called when form is submitted. Default form response prevented-->
    <h1 class="form-heading"> Professional Skills </h1>
    <h1 class="form-subtitle"> The only toolbox you need.</h1>
    <form on:submit|preventDefault={handleSubmit} class="form-card">
        <div class="input-title-flex">
        <label for="title" class="label-input">Personal Favourite</label>
        <!-- Binding firestore variables to ui and grabbing user entered text -->
        <input
            type="text"
            bind:value={_info.favskill}
            bind:this={inputElement}
            placeholder= "What's your favourite skill you've aquired?"
            class="form-control"
        />
        </div>

        <div class="input-title-flex">
        <label for="description" class="label-input"
            >My Skills</label>
            <p for="description" class="label-p-input">Most people include a mixture of their talents and traits.</p>
            <div class="skill-flex">
              <div class="left-items">
                <input
                type="text"
                bind:value={_info.skill1}
                bind:this={inputElement}
                placeholder="Eg: Confidence"
                class="skill-form-control"/> </div>
              <div class="right-items">
                <input
                type="text"
                bind:value={_info.skill2}
                bind:this={inputElement}
                placeholder="Eg: Design"
                class="skill-form-control"/> </div>
            </div>
            <div class="skill-flex">
              <div class="left-items">
                <input
                type="text"
                bind:value={_info.skill3}
                bind:this={inputElement}
                placeholder="Eg: Time Management"
                class="skill-form-control"/> </div>
              <div class="right-items">
                <input
                type="text"
                bind:value={_info.skill4}
                bind:this={inputElement}
                placeholder="Eg: Coding"
                class="skill-form-control"/> </div>
            </div>

            <div class="skill-flex">
              <div class="left-items">
                <input
                type="text"
                bind:value={_info.skill5}
                bind:this={inputElement}
                placeholder="Eg: Agile Methodology"
                class="skill-form-control"/> </div>
              <div class="right-items">
                <input
                type="text"
                bind:value={_info.skill6}
                bind:this={inputElement}
                placeholder="Eg: Flexibility"
                class="skill-form-control"/> </div>
            </div>
            <div class="skill-flex">
              <div class="left-items">
                <input
                type="text"
                bind:value={_info.skill7}
                bind:this={inputElement}
                placeholder="Eg: Team Work"
                class="skill-form-control"/> </div>
              <div class="right-items">
                <input
                type="text"
                bind:value={_info.skill8}
                bind:this={inputElement}
                placeholder="Eg: Communication"
                class="skill-form-control"/> </div>
            </div>
            
        </div>

        <div class="button-flex">
        <button class="button" >Save </button>
        </div>
    </form>
    </div>
</div>
