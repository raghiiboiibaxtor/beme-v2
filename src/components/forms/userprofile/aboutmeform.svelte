<script>
    
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
      currentrole: "",
      field_of_interest: "",
      level_experience: "",
      professional_goals: "",
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
      _info = {
      currentrole: "",
      field_of_interest: "",
      level_experience: "",
      professional_goals: "",
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
            class="form-control"
        />
        </div>

       
        <div class="button-flex">
        <button class="button" >Save </button>
        </div>
    </form>
    </div>
</div>

<style>

    .body-container{
        display: flex;
        flex-direction: column;
        margin-left: 1.23rem;
        padding-top: 1.23rem;
        width: 444px;
    
    }


    .form-container{
        width: 100%;
        height: auto; 
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: space-between;
        margin-bottom: 1.23rem;
        padding: 1.23rem;
        background-color: var(--light);
        border: 2.23px solid rgba(112, 156, 212, 0.0);
        background: 
      linear-gradient(var(--light), var(--light)) padding-box,
      linear-gradient(90deg, #5271FF 0%, #38B6FF 100%) border-box;
        box-shadow: 1px 4px 4px rgba(82, 101, 165, 0.12);
        border-radius: 44px;
    }

    .form-heading{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 33px;
        letter-spacing: -0.02em;
        background: -webkit-linear-gradient(45deg, #5271FF, #38B6FF);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .form-subtitle{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 119.7%;
        letter-spacing: -0.02em;
        color: var(--dark);
    }

    .form-card{
        margin-top: 0.55rem;
    }

    .input-title-flex{
        margin-top: 0.55rem;
    }

    .label-input{
        margin-top: 0.23rem;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 0.23px;
        color: var(--placeholdertext);
    }

    input{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        height: 2.23rem;
        border-radius: 23rem;
        border: 2.23px solid rgba(112, 156, 212, 0.44);
        width: 100%;
        color: var(--main);
        font-size: 14px;
    }

    input::placeholder, textarea::placeholder{
        color: var(--placeholdertext);
    }

    input:focus, textarea:focus{
        outline-style: none;
	    box-shadow: none;
	    border-color: transparent;
        background: 
      linear-gradient(var(--light), var(--light)) padding-box,
      linear-gradient(90deg, #5271FF 0%, #38B6FF 100%) border-box;
    }

    textarea{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        border-radius: 1.23rem;
        border: 2.23px solid rgba(112, 156, 212, 0.44);
        width: 100%;
        color: var(--main);
        font-size: 14px;
        resize: none !important;
    }

    .button-flex{
        display: flex;
        justify-content: flex-end;
        margin-top: 0.55rem;
    }
    
    .button{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.23px;
    width: 8.8rem;
    font-size: large;
    color: white;
    background-image: linear-gradient(
    45deg,
    hsl(237deg 81% 60%) 0%,
    hsl(218deg 94% 54%) 20%,
    hsl(210deg 100% 50%) 40%,
    hsl(205deg 100% 50%) 60%,
    hsl(201deg 100% 50%) 80%,
    hsl(202deg 100% 61%) 100% );
    border-radius: 23rem;
    text-align: center !important;
  }
    


</style>
