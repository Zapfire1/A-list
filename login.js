// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCFQtw5WeeltTprGSCphAcSXTCeOkLqGz8",
    authDomain: "a-list-innlogging.firebaseapp.com",
    projectId: "a-list-innlogging",
    storageBucket: "a-list-innlogging.firebasestorage.app",
    messagingSenderId: "908870658781",
    appId: "1:908870658781:web:7ac64e02957904b3aa8934"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig); 
  const auth = getAuth(app);


  const submitButton = document.getElementById("login-button"); // Corrected button reference

  submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        console.log("User logged in successfully:", user);
        alert("Logged in successfully!"); // Notify user
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error during account creation:", errorCode, errorMessage);
        alert(`Error: ${errorMessage}`); // Display error to user
      });
  });