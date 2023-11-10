const firebaseConfig = {
    apiKey: "AIzaSyCvGmBfUcAw9_2j0DcvK1oCpAJPChjS6og",
    authDomain: "simple-bootstrap-919d5.firebaseapp.com",
    projectId: "simple-bootstrap-919d5",
    storageBucket: "simple-bootstrap-919d5.appspot.com",
    messagingSenderId: "770238241162",
    appId: "1:770238241162:web:adff9ea688ab48719d5073",
    measurementId: "G-YX13V9LLZP"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signIn() {
    //console.log("Sign In clicked");
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            //console.log(user);
            window.location.href = 'index.html'
        })
        .catch((error) => {
            const errorMessage = "Invalid credentials.";
            displayErrorMessage(errorMessage);
            //console.error(errorMessage);
        });
}

function signUp() {
    //console.log("Sign up clicked");
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    auth.createUserWithEmailAndPassword(newUsername, newPassword)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            window.location.href = 'sign-in.html'
        })
        .catch((error) => {
            const errorMessage = "Invalid credentials.";
            displayErrorMessage(errorMessage);
            //console.error(errorMessage);
        });
}

function displayErrorMessage(message) {
    const errorMessageContainer = document.getElementById('error-message');
    errorMessageContainer.textContent = message;
    errorMessageContainer.style.display = 'block';
    setTimeout(() => {
        errorMessageContainer.style.display = 'none';
    }, 5000); // Adjust the timeout duration as needed
}

// Sign in with Google
function signInWithGoogle() {
    //console.log("Google clicked");
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then((userCredential) => {
            // Signed in with Google
            const user = userCredential.user;
            //console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            //console.error(errorMessage);
        });
}
