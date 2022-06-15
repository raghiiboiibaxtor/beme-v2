<script>
  import Filetable from "./filetable.svelte";
  import UploadRow from "./uploadRow.svelte";
  import { getStorage, ref, getMetadata, listAll, getDownloadURL } from "firebase/storage";
  import { onMount } from "svelte";

  const storage = getStorage();
  const refs = ["work", "clients", "pictures", "misc"];
  $: files = {
    work: [],
    clients: [],
    pictures: [],
    misc: [],
  };

  function getFileData() {
    files = {
      work: [],
      clients: [],
      pictures: [],
      misc: [],
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
 
getDownloadURL(ref(storage, 'gs://bucket/_MG_0088.jpg'))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

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

<div class="accordion accordion-flush" id="fileAccordion">
  <div class="accordion-item">
    <h5 class="accordion-header" id="flush-headingOne">
      <button
        class="accordion-button collapsed fw-bold"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseOne"
        aria-expanded="false"
        aria-controls="flush-collapseOne"
      >
        Work Files
      </button>
    </h5>
    <div
      id="flush-collapseOne"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingOne"
      data-bs-parent="#fileAccordion"
    >
      <div class="accordion-body">
        <UploadRow folder="work" functionProp={() => getFileData()} />
        {#if files.work.length > 0}
          <Filetable
            data={files.work}
            folder="work"
            functionProp={() => getFileData()}
          />
        {/if}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h5 class="accordion-header" id="flush-headingTwo">
      <button
        class="accordion-button collapsed fw-bold"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseTwo"
        aria-expanded="false"
        aria-controls="flush-collapseTwo"
      >
        Client Files
      </button>
    </h5>
    <div
      id="flush-collapseTwo"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingTwo"
      data-bs-parent="#fileAccordion"
    >
      <div class="accordion-body">
        <UploadRow folder="clients" functionProp={() => getFileData()} />
        {#if files.clients.length > 0}
          <Filetable
            data={files.clients}
            folder="clients"
            functionProp={() => getFileData()}
          />
        {/if}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h5 class="accordion-header" id="flush-headingOne">
      <button
        class="accordion-button collapsed fw-bold"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseThree"
        aria-expanded="false"
        aria-controls="flush-collapseThree"
      >
        Pictures
      </button>
    </h5>
    <div
      id="flush-collapseThree"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingOne"
      data-bs-parent="#fileAccordion"
    >
      <div class="accordion-body">
        <UploadRow folder="pictures" functionProp={() => getFileData()} />
        {#if files.pictures.length > 0}
          <Filetable
            data={files.pictures}
            folder="pictures"
            functionProp={() => getFileData()}
          />
        {/if}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h5 class="accordion-header" id="flush-headingThree">
      <button
        class="accordion-button collapsed fw-bold"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseFour"
        aria-expanded="false"
        aria-controls="flush-collapseFour"
      >
        Misc Files
      </button>
    </h5>
    <div
      id="flush-collapseFour"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingThree"
      data-bs-parent="#fileAccordion"
    >
      <div class="accordion-body">
        <UploadRow folder="misc" functionProp={() => getFileData()} />
        {#if files.misc.length > 0}
          <Filetable
            data={files.misc}
            folder="misc"
            functionProp={() => getFileData()}
          />
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  .accordion-button:focus {
    box-shadow: none;
    border-color: rgba(0, 0, 0, 0.125);
  }
</style> 