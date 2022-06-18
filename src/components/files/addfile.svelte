<script>
  import Filetable from "./filetable.svelte";
  import UploadRow from "./uploadRow.svelte";
  import { getStorage, ref, getMetadata, listAll, getDownloadURL } from "firebase/storage";
  import { onMount } from "svelte";


  const storage = getStorage();
  const refs = ["userfile"];
  $: files = {
    userfile: [],
  };


  function getFileData() {
    files = {
      userfile: [],
    };

    const user = localStorage.getItem("uid");
    refs.forEach((folder) => {
      let reference = ref(storage, `${user}/${folder}`);
      listAll(reference)
        .then((res) => {
          res.items.forEach((itemRef) => {
            getMetadata(itemRef).then((metaData) => {
              files[folder] = [...files[folder], metaData];
            });
          });
        })
        .catch((error) => {});
    });

  }

  onMount(() => {
    let user = "";
    getFileData();
  });

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

<button>
  Add User File
</button>
<UploadRow folder="userfile" functionProp={() => getFileData()} />
  {#if files.userfile.length > 0}
    <Filetable
      data={files.userfile}
      folder="userfile"
      functionProp={() => getFileData()}
    />
   
  {/if}

  <img id="myimg" alt=""/> 
  
 
 

