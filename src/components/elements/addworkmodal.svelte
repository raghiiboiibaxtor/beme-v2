<script>
    import AddFile from "../files/addfile.svelte";
  </script>

  <div class="modal-container">
  <h2> Add Work  </h2>
  <p> Drop your files in the box below. </p>
 <AddFile/>
</div>

<style>
    h2 {
        font-family: 'Montserrat';
        color: var(--light);
        font-style: normal;
        font-weight: 700;
        font-size: 33px;
        text-align: left;
      }

    p{
        font-family: 'Inter';
        color: var(--light);
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        text-align: left;
    }

      .modal-container{
        padding: 2.23rem;
        position: relative;
        bottom: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: left;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
        45deg,
        hsl(237deg 81% 60%) 0%,
        hsl(218deg 94% 54%) 20%,
        hsl(210deg 100% 50%) 40%,
        hsl(205deg 100% 50%) 60%,
        hsl(201deg 100% 50%) 80%,
        hsl(202deg 100% 61%) 100% );
        box-shadow: 1px 4px 4px rgba(82, 101, 165, 0.12);
        text-align: center !important;
      }

  </style>