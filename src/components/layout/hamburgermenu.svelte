<script>
    let active = false;
  </script>
  
  <div class="hamburger-wrapper" on:click={() => active = !active}>🍔</div>
  
  <nav class:active>
    <ul>
      <li>🍔 Cheese burger</li>
      <li>🍔 Bacon burger</li>
      <li>🍔 Veggie burger</li>
    </ul>
  </nav>
  
  <style>
  .hamburger-wrapper {
    border: solid var(--border-size-4) var(--gray-8);
    border-radius: var(--radius-4);
    font-size: var(--font-size-8);
    padding: var(--size-5);
    width: auto;
    cursor: pointer;
  }
  
  .active {
    border-color: var(--orange-8);
  }
  
  nav {
      background-color: var(--red-9);
      border-radius: var(--radius-4);
      border: solid var(--border-size-4) var(--gray-8);
      box-shadow: var(--shadow-5);
      font-weight: var(--font-weight-8);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: var(--size-10) var(--size-3);
      margin: var(--size-3);
    }
  
    ul {
      list-style: none;
      padding: 0;
    }
  
  </style>