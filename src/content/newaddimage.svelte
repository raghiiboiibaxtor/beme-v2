<script>
    import {_firestore_, _fbstorage_} from "../routes/firebase/firebase.js";
    import { getStorage, ref, uploadBytes } from "firebase/storage";
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore"; 
   


    // Grabbing auth from firebase
    const auth = getAuth();
    let _user;
    let _uid;
    let _email;
    onAuthStateChanged(auth, (user) => {
        _user = user;
    if (user) {
        _uid = user.uid;
        _email = user.email;
        // If user is authenticated, assign their data into global variables.
    } else {
        // User is signed out (logic to be included here)
    }
    });

    let emptyRecord = { title: "", file: null };
    let record = { ...emptyRecord };
    let records = [];

    //const _fbstorage_ = getStorage();
    const _collection = collection(_firestore_, "AllUsers");
    const storageRef = ref(_fbstorage_);

    // Grabbing Array of Users
    const grabData = onSnapshot(
        collection(_firestore_, "AllUsers"),
        (querySnapshot) => {
        records = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        },
        (err) => {
        console.error(err);
        }
    );

    async function submit(e) {
        await updateDoc(doc(_firestore_, "AllUsers", _uid), record);
        e.target.reset();
    }

    async function remove(id, file) {
        if(file) {
        await storageRef.child(file).delete();
        }
        await collection.doc(id).delete();
    }

    async function upload(e) {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (window.BrowserImageResizer) {
        const blob = await window.BrowserImageResizer.readAndCompressImage(
          file,
          {
            quality: 0.8,
            maxWidth: 400,
            maxHeight: 400
          }
        );
        await storageRef.child(file.name).put(blob);
      } else {
        await storageRef.child(file.name).put(file);
      }
      record.file = file.name;
    }
  
    /*
    if (e.target.files && e.target.files.length > 0) {
        const file = e.target.files[0];
        await uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
        });
      record.file = file.name;
      console.log(e.target.files)
    }*/
  }
</script>

<style>
  .record {
    position: relative;
  }

  .record .delete {
    position: absolute;
    top: 0px;
    right: 0px;
  }
</style>


<form on:submit|preventDefault={submit}>
  <input bind:value={record.title} placeholder="say something" required />
  <br />
  <input type="file" accept="image/*" on:change={upload}/>
  <br />
  <button type="submit" on:click={submit}>Submit</button>
</form>

<ul>
  {#each records as [id, rec] (id)}
    <li title={id} class="record">
      <button class="delete" on:click={() => remove(id, rec.file)}>
        delete
      </button>
      <p>{rec.title}</p>
      {#if rec.file}
        {#await storageRef.child(rec.file).getDownloadURL()}
          <p>loading ...</p>
        {:then url}
          <img src={url} alt={rec.file} />
        {/await}
      {/if}
    </li>
  {/each}
</ul>
