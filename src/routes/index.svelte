<script>
import Navbar from '../components/layout/navbar.svelte';
import Sidebar from '../components/layout/sidebar.svelte';

let open = false

</script>

<Sidebar bind:open/>
<Navbar/>
<h1> This is the home page </h1>

