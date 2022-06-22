<script>
    import {
      getStorage,
      ref,
      getDownloadURL,
      deleteObject,
    } from "firebase/storage";
  
    function bytesToSize(bytes) {
      const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
      if (bytes === 0) return "n/a";
      const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
      if (i === 0) return `${bytes} ${sizes[i]})`;
      return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
    }
  
    const storage = getStorage();
  
    function downloadFile(folder, name) {
      const uid = localStorage.getItem("uid");
      let path = `${uid}/${folder}/${name}`;

      getDownloadURL(ref(storage, path))
        .then((url) => {
          const link = document.createElement("a");
          link.href = url;
          link.click();
        })
        .catch((error) => {
          console.error(error);
        });
    }
    function deleteFile(folder, name) {
      const uid = localStorage.getItem("uid");
      let path = `${uid}/${folder}/${name}`;
      const fileRef = ref(storage, path);
  
      // Delete the file
      window.confirm("Permanently delete this file?");
      deleteObject(fileRef)
        .then(() => {
          functionProp();
        })
        .catch((error) => {
          // Uh-oh, an error occurred!
        });
    }
  
    export let data;
    export let folder;
    export let functionProp = () => {};
  </script>
  
  <table class="table">
  
    <tbody>
      {#each data as { name, timeCreated, size }}
        <tr>
          <td >{name}</td>
        
          <td>
            <button
              class="btn btn-primary"
              on:click={() => downloadFile(folder, name)}>Download</button
            >
            <button
              class="btn btn-danger"
              on:click={() => deleteFile(folder, name)}>Delete</button
            >
          </td>
        </tr>
      {/each}
    </tbody>
  </table>