<script>
     import './formsglobal.css';
    // add data
    import {_firestore_} from "../../../routes/firebase/firebase.js"; //Importing Firestore component that was initialised in firebase.js
    import {collection, addDoc,} from "firebase/firestore";


    // Creating list of variables that will pass data to Firestore ()
    let _info = {
      worktitle: "",
      time: "",
      newskill: "",
      skillsapplied:{skill1:"",skill2:"",skill3:"",skill4:""}
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

    // Handling form submission & passing addUserToFirestore()
    const handleSubmit = () => {
      addUserToFirestore();
      _info = {worktitle: "",
      time: "",
      newskill: "",
      skillsapplied:{skill1:"",skill2:"",skill3:"",skill4:""}
      };
      inputElement.focus();
    };

</script>



<!-- HTML TEMPLATE BEGINS -->
<div class="body-container">
    <div class="form-container">
    <!-- Task Form  handleSubmit() called when form is submitted. Default form response prevented-->
    <h1 class="form-heading"> Favourite Experience </h1>
    <h1 class="form-subtitle"> Let the world know what you're up to!</h1>
    <form on:submit|preventDefault={handleSubmit} class="form-card">
        <div class="input-title-flex">
        <label for="title" class="label-input">Title</label>
        <!-- Binding firestore variables to ui and grabbing user entered text -->
        <input
            type="text"
            bind:value={_info.worktitle}
            bind:this={inputElement}
            placeholder= "Describe your role or position"
            class="form-control"
        />
        </div>

        <div class="input-title-flex">
          <label for="title" class="label-input">Length of Time</label>
          <input
              type="text"
              bind:value={_info.time}
              bind:this={inputElement}
              placeholder= "How long did you work for?"
              class="form-control"
          />
          </div>

        <div class="input-title-flex">
        <label for="description" class="label-input">New Skill Learned</label>
        <input
            type="text"
            bind:value={_info.newskill}
            bind:this={inputElement}
            placeholder="Eg: Confidence"
            class="form-control"
        />
        </div>

        <div class="input-title-flex">
        <label for="description" class="label-input"
            >Soft Skills Applied</label>
            <p for="description" class="label-p-input">Soft skills are core qualities & values that can be applied to all professions.</p>
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
                placeholder="Eg: Communication"
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
                placeholder="Eg: Patience"
                class="skill-form-control"/> </div>
            </div>
            
        </div>

        <div class="button-flex">
        <button class="button" >Save </button>
        </div>
    </form>
    </div>
</div>
