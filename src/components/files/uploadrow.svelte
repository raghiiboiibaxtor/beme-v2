<script>
    // If you are using JavaScript/ECMAScript modules:
    import Dropzone from "dropzone";
    import { onMount } from "svelte";
    import { getStorage, ref, uploadBytes } from "firebase/storage";
  
    const storage = getStorage();
  
    export let folder;
    export let functionProp = () => {};
  
    onMount(() => {
      const userId = localStorage.getItem("uid");
      const path = `${userId}/${folder}`;
  
      let myDropzone = new Dropzone(`#my-form-${folder}`, {dictDefaultMessage: "Drop files here."});
     
      myDropzone.options.disablePreviews = true;
      myDropzone.on("addedfile", (upload) => {
        let storageRef = ref(storage, `${path}/${upload.name}`);
        uploadBytes(storageRef, upload).then((snapshot) => {
          console.log("Uploaded a blob or file!");
          functionProp();
        });
      });
    });
  </script>
  
  <!-- Example of a form that Dropzone can take over -->
  <form action="/target" class="dropzone" id="my-form-{folder}"/>
  
  <style>
    .dropzone {
      margin-top: 1.23rem;
      border: 2.23px dashed rgba(112, 156, 212, 0.55);
      box-shadow: 1px 4px 4px rgba(82, 101, 165, 0.12);
      border-radius: 12px;
      background-color: rgba(112, 156, 212, 0.23);
      opacity: 88%;
      font-family: 'Montserrat' !important;
        font-style: normal;
        font-weight: 500;
        letter-spacing: 0.33px;
    }

  </style>