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
        <form on:submit|preventDefault={Login}>
          <h5 class="card-title">{title}</h5>
          <div class="mb-3">
            <label for="login-email-input" class="form-label">Email address</label>
            <input
              type="email"
              class="form-control"
              id="login-email-input"
              aria-describedby="emailHelp"
              placeholder="Email Address"
            />
            {#if title != "Enter your details to login."}
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
          <div class="horizontal-flex">
          <button type="submit" class="button">Submit</button></div>
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
	    height: 100vh;
    }

    .card {
      width: 100%;
      margin: 0 auto;
      
    }

    #local-h1{
      margin-top: 1.23rem;
      color: var(--dark);
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-size: 2.3rem;
      line-height: 44px;
    }

    #local-h3{
      margin-top: 1.23rem;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 300;
      font-size: 1.23rem;
    }

    .card-title, #emailHelp{
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 0.77rem;
      margin-bottom: 1.23rem;
    }

    form{
      margin-top: 1.23rem;
      width: 100%;
    }


    .form-label{
      margin-top: 0.23rem;
      margin-bottom: 0.23rem;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-size: 0.77rem;
      letter-spacing: 0.23px;
      color: var(--dark);
    }

    .button{
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      letter-spacing: 0.23px;
      width: 15rem;
      font-size: large;
      margin-top: 3.23rem;
      color: white;
      background-image: linear-gradient(
      45deg,
      hsl(237deg 81% 60%) 0%,
      hsl(218deg 94% 54%) 20%,
      hsl(210deg 100% 50%) 40%,
      hsl(205deg 100% 50%) 60%,
      hsl(201deg 100% 50%) 80%,
      hsl(202deg 100% 61%) 100% );
      border-radius: 23rem;
    }

    .button:hover{
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      letter-spacing: 0.23px;
      width: 8.23rem;
      font-size: medium;
      margin-top: 1.23rem;
      color: white;
      opacity: 88%;
    }
  
    .login-form {
      width: 100%;
      margin: 0 auto;
      padding-top: 1.23rem;
    }

    input{
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      height: 3.23rem;
      background: 
        linear-gradient(var(--light), var(--light)) padding-box,
        linear-gradient(90deg, #5271FF 0%, #38B6FF 100%) border-box;
      border-radius: 23rem;
      border: 2.3px solid transparent;
      width: 100%;
      color: var(--dark);
      font-size: large;
    }

    input::placeholder{
      color: var(--lighttext);
      font-size: large;
    }

    input:focus{
	    background: 
        linear-gradient(var(--light), var(--light)) padding-box,
        linear-gradient(90deg, #5271FF 0%, #38B6FF 100%) border-box;
      border-radius: 23rem;
      border: 2.3px solid transparent;
}
  
    .horizontal-flex{
      display: flex;
      justify-content: flex-end;
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
  