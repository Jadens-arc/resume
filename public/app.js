document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    console.log(app);
});

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
            .then(result => {
                const user = result.user;
                window.location.pathname = "/homepage.html";
                localStorage.setItem("username", user.displayName);
                localStorage.setItem("userPhoto", user.photoURL);
                console.log("username: " + localStorage.getItem("username"));
            })
            .catch(console.log)
    
}