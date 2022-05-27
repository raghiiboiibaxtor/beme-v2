<script>
    import {goto} from '$app/navigation';
    import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
    
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
  
  <div class="login">
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
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        {#if title == "Login"}
          <p class="float-end mt-3">
            Not a user? <a href="/signup"  class="card-link">Sign Up</a>
          </p>
        {/if}
      </div>
    </div>
  </div>
  



  <style>
    .card {
      width: 50%;
      margin: 0 auto;
    }
    .login {
      margin-top: 50px;
      margin-bottom: 50px;
    }
    .login-form {
      width: 60%;
      margin: 0 auto;
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
  