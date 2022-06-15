<script>
  import Filetable from "./filetable.svelte";
  import UploadRow from "./uploadRow.svelte";
  import { getStorage, ref, getMetadata, listAll, getDownloadURL } from "firebase/storage";
  import { onMount } from "svelte";

  const storage = getStorage();
  const refs = ["user"];
  $: files = {
    user: [],
  };

  function getFileData() {
    files = {
      work: [],
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

</script>

<button>
  Add User File
</button>
<UploadRow folder="user" functionProp={() => getFileData()} />
  {#if files.user.length > 0}
    <Filetable
      data={files.user}
      folder="user"
      functionProp={() => getFileData()}
    />
  {/if}

