<script>
    
    // add data
    import {_firestore_} from "../../routes/firebase/firebase.js"; //Importing Firestore component that was initialised in firebase.js
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
      firstname: "",
      lastname: "",
      currentrole: "",
      field_of_interest: "",
      level_experience: "",
      professional_goals: "",
      skills:{skill1:"",skill2:"",skill3:""}

    };

    let inputElement; // Declaring input element used for binding ui to list variables
    let _user = [];
    

    // Reading Multiple Documents from Firestore
      const _collection = query(collection(_firestore_, "AllUsers"), where("email", "==", "raghiibaxtor@gmail.com"));
      const unsubscribe = onSnapshot(_collection, (querySnapshot) => {
        const _fireuser = [];
        querySnapshot.forEach((doc) => {
            _fireuser.push(doc.data());
        });
        console.log("Firebase Read Raghii: ", _fireuser.join(", "));
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
      _info = {firstname: "",
      lastname: "",
      currentrole: "",
      field_of_interest: "",
      level_experience: "",
      professional_goals: "",
      skills:{skill1:"",skill2:"",skill3:""}};
      inputElement.focus();
    };


    onDestroy(unsubscribe);
</script>


<h1>{_user}</h1>
<h1>{_info}</h1>
<!-- HTML TEMPLATE BEGINS -->
{#each _user as _info}
<div class="card card-body mt-2">
  <div class="d-flex justify-content-between">
    <h5>{_info.firstname}</h5>
  </div>
  <p>{_info.lastname}</p>
  <div>
  </div>
</div>
{/each}

<div class="container p-4">
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <!-- Task Form  handleSubmit() called when form is submitted. Default form response prevented-->
      <form on:submit|preventDefault={handleSubmit} class="card card-body p-5">
        <div class="mb-3">
            <h5 class="card-title"> Welcome Your BeMe page <br></h5>
          <label for="title" class="fs-5 text-secondary">Firstname</label>
          <!-- Binding firestore variables to ui and grabbing user entered text -->
          <input
            type="text"
            bind:value={_info.firstname}
            bind:this={inputElement}
            placeholder={_info.firstname == '' ? "First Name" : "Firestore Name"}
            class="form-control"
          />
        </div>

        <div class="mb-2">
          <label for="description" class="fs-5 text-secondary"
            >Lastname</label
          >
          <input
            type="text"
            bind:value={_info.lastname}
            bind:this={inputElement}
            placeholder="Lastname"
            class="form-control"
          />
        </div>

        <div class="mb-4">
          <label for="description" class="fs-5 text-secondary"
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

        <div class="mb-5">
          <label for="description" class="fs-5 text-secondary"
            >Field of Interest</label
          >
          <input
            type="text"
            bind:value={_info.field_of_interest}
            bind:this={inputElement}
            placeholder="What are you specialising in now"
            class="form-control"
          />
        </div>

        <div class="mb-6">
          <label for="description" class="fs-5 text-secondary"
            >Level of Experience</label
          >
          <input
            type="text"
            bind:value={_info.level_experience}
            bind:this={inputElement}
            placeholder="Level of Experience"
            class="form-control"
          />
        </div>

        <div class="mb-7">
          <label for="description" class="fs-5 text-secondary"
            >Skill</label
          >
          <input
            type="text"
            bind:value={_info.professional_goals}
            bind:this={inputElement}
            placeholder="What is your next role"
            class="form-control"
          />
        </div>

        <h5 class="card-title"> Add your top 2 skills <br></h5>
        <div class="mb-8">
          <label for="description" class="fs-5 text-secondary"
            >Skill 1</label
          >
          <input
            type="text"
            bind:value={_info.skills.skill1}
            bind:this={inputElement}
            class="form-control"
          />
        </div>
        <div class="mb-9">
          <label for="description" class="fs-5 text-secondary"
            >Skill 2</label
          >
          <input
            type="text"
            bind:value={_info.skills.skill2}
            bind:this={inputElement}
            class="form-control"
          />
        </div>
        <div class="mb-10">
          <label for="description" class="fs-5 text-secondary"
            >Skill 3</label
          >
          <input
            type="text"
            bind:value={_info.skills.skill3}
            bind:this={inputElement}
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


