
<script>
    import {_firestore_} from "../../routes/firebase/firebase.js"; //Importing Firestore component that was initialised in firebase.js
    import {collection, addDoc,getDocs} from "firebase/firestore"; // Importing functions from Firestore

    const collData = collection(_firestore_, 'AllUsers')

    getDocs(collData)
    .then((snapshot)=>{
    let user =[]

  //cycle through the snapshot and console log the data in the database
      snapshot.docs.forEach((doc) => {
    user.push({ ...doc.data(), id:doc.id})
    })
      console.log(user)
    }).catch(err => {
      console.log(err.message)
    })

</script>