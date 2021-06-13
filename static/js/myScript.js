function onSignIn(googleUser) {
    let profile = googleUser.getBasicProfile();
    console.log(`Full Nama : ${profile.getName()}`);
    console.log(`Email : ${profile.getEmail()}`);

    let x = document.getElementsByClassName("logged");
    let i;
    for (i = 0; i <= x.length; i++) {
        x[0].classList.remove("logged");
    }
}

function onSignOut() {
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
        console.log("User Signed out");
        hideDashboard();
    });
}

function hideDashboard() {
    let x = document.getElementsByClassName("onlylogged");
    let i;
    for (i = 0; i <= x.length; i++) {
        x[i].classList.add("logged");
    }
}

function gotoDashboard() {
    window.location.replace("http://localhost:9000/dashboard.html");
}