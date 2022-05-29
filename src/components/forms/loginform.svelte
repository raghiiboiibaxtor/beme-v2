<script>
    import {goto} from '$app/navigation';
    import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
    import '../../../src/global.css';
    
    // Declaring global varibales
    export let title;
    const auth = getAuth();
  
    function Login()
    {
        // Declaring local variables to grab info from UI 
        // Variables will be used to authenticate user
        let email = document.getElementById('login-email-input').value;
        let password = document.getElementById('login-password-input').value;
        // If title & login match, authenticate the user and sign them in using Firebase Auth SDKs & Cloud Functions
        if (title == "Login"){
            signInWithEmailAndPassword(auth, email, password) // Signing user in
            // Promise (.then) is resolved
            .then((userCredential)=>{
                const user = userCredential.user
                // Storing user ID locally (allowing for access of user's files locally)
                // Tokens & user's private data will be stored in Firebase
                localStorage.setItem('uid', user.uid);
                // Directing to "home page" aka project route 
                goto("/")
            
                // Catching errors
            }).catch((error) => {
                console.error(error)
            })
        }
        else { // If user does not exist: create new user
            createUserWithEmailAndPassword(auth, email, password) 
            .then((userCredential)=>{
                const user = userCredential.user
                localStorage.setItem('uid', user.uid);
                goto("/profile")
            
                // Catching errors
            }).catch((error) => {
                console.error(error)
            })
        }
    }
  
  </script>
  <body>
    
 
  <div class="page-template">
  <div class="login">
    <h1 id='local-h1'> Everything you need in one place. </h1>
    <h3 id='local-h3'> Build and share your portfolio with the click of a button. </h3>
    <div class="card">
      <div class="card-body login-form">
        <h5 class="card-title">{title}</h5>
        <form on:submit|preventDefault={Login}>
          <div class="mb-3">
            <label for="login-email-input" class="form-label">Email address</label>
            <input
              type="email"
              class="form-control"
              id="login-email-input"
              aria-describedby="emailHelp"
              placeholder="Email Address"
            />
            {#if title != "Login"}
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            {/if}
          </div>
          <div class="mb-3">
            <label for="login-password-input" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="login-password-input"
              placeholder="Password"
            />
          </div>
          <button type="submit" class="button">Submit</button>
        </form>
        {#if title == "Login"}
          <p class="float-end mt-3">
            Not a user? <a href="/signup"  class="card-link">Sign Up</a>
          </p>
        {/if}
      </div>
    </div>
  </div>
</div>
</body>


  <style>
    .page-template{
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 1.23rem;
}

    .login{
      color: var(--dark);
      font-weight: 500;
	    width: 100%;
	    background-color: var(--light);
	    height: 100vh;
    }

    .card {
      width: 100%;
      margin: 0 auto;
      
    }

    .button{
     
      font-size: medium;
      margin-top: 1.23rem;
      color: white;
      background-image: linear-gradient(
      45deg,
      hsl(237deg 81% 60%) 0%,
      hsl(218deg 94% 54%) 20%,
      hsl(210deg 100% 50%) 40%,
      hsl(205deg 100% 50%) 60%,
      hsl(201deg 100% 50%) 80%,
      hsl(202deg 100% 61%) 100% );
    }
  
    .login-form {
      width: 100%;
      margin: 0 auto;
      padding-top: 4.23rem;
    }

    input{
  
      height: 3.23rem;
      width: 100%;
      background: 
        linear-gradient(var(--light), var(--light)) padding-box,
        linear-gradient(90deg, #5271FF 0%, #38B6FF 100%) border-box;
      border-radius: 23rem;
      border: 1.23px solid transparent;
    }
    
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      .login-form {
        width: 90%;
      }
      .card {
        width: 90%;
      }
    }
  </style>
  