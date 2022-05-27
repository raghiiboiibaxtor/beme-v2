<script>
    import {firestore} from "./firebase/firebase.js";
    import {
      collection,
      addDoc,
    } from "firebase/firestore";


    const addTask = async () => {
      try {
        await addDoc(collection(firestore, "tasks"), {
          ...task,
          createdAt: Date.now(),
        });
        Toastify({
          text: "New Task created",
        }).showToast();
      } catch (error) {
        console.error(error);
      }
    };
</script>

