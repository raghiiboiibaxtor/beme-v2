<script>
     import {_firestore_} from "../routes/firebase/firebase.js";
      //Importing Firestore component that was initialised in firebase.js
      import { getAuth,onAuthStateChanged} from "firebase/auth";
    import {
      updateDoc,onSnapshot,doc
     
    } from "firebase/firestore";
    
    let  avatar, fileinput;
	
	const onFileSelected =(e)=>{
    let image = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                 avatar = e.target.result
            };
    }	
        
    const handleClick = () => {
      const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
        //successfully logging the current user signed ins data on console
        const _uid = user.uid;       
        
        // console log reference of current user signed in
        onSnapshot(doc(_firestore_, "AllUsers", _uid), (doc) => {
            console.log("Current user logged in: ", doc.data());
        })

    
        //we only need update, since the user gets their data created / addedwhen they sign up, 
        const _imageupdate = doc(_firestore_, 'AllUsers', _uid)
        updateDoc(_imageupdate,{
            ...fileinput,   
        })        
        }})
       
     
    }

</script>

<div id="app">
	<h1>Upload Image</h1>
  
        {#if avatar}
        <img class="avatar" src="{avatar}" alt="d" />
        <div class="d-flex gap-2 mt-2">
            <button class="btn btn-primary btn-sm d-flex" on:click|preventDefault={handleClick} >Save</button>
          </div>
        {:else}
        <img class="avatar" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="" /> 
        {/if}
		<img class="upload" src="https://static.thenounproject.com/png/625182-200.png" alt="" on:click={()=>{fileinput.click();}} />
        <div class="chan" on:click={()=>{fileinput.click();}}>Choose Image</div>
        <input style="display:none" type="file" accept=".jpg, .jpeg, .png" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} >
      

</div>

<img class="upload" src={avatar} alt="" />

<style>
	#app{
	display:flex;
		align-items:center;
		justify-content:center;
		flex-flow:column;
}
 
	.upload{
		display:flex;
	height:50px;
		width:50px;
		cursor:pointer;
	}
	.avatar{
		display:flex;
		height:200px;
		width:200px;
	}
</style>

 