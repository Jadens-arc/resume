function loadInfo() {
    let username = localStorage.getItem("username");
    
    username = username.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
    document.getElementById("titleMsg").innerHTML = `Hi ${username}!`;
    document.title = `Hi ${username}`;

}