<script>
    import Filetable from "./filetable.svelte";
    import UploadRow from "./uploadRow.svelte";
    import { getStorage, ref, getDownloadURL } from "firebase/storage";

  
  
    const storage = getStorage();
  
    let img;
    
    getDownloadURL(ref(storage, '_MG_0088.jpg'))
    .then((url) => {
      // `url` is the download URL for targeted image'
      // This can be downloaded directly:
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
  
      // Or inserted into an <img> element
      img = document.getElementById('myimg');
      img.setAttribute('src', url);
    })
    .catch((error) => {
      // Handle any errors
    }); 
  
  </script>
  
    <img id="myimg" alt=""/> 
    
   <style>
    #myimg {
        border-radius: 23px;
        margin-bottom: 0.55rem;
    }
   </style>
   
  
  