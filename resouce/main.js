function validateform() {
    let validated = true;
    let name = document.getElementById("name").value;


    let age = document.forms["register"]["age"].value;
    let email = document.forms["register"]["email"].value;
    let user = document.forms["register"]["user"].value;
    let pass = document.forms["register"]["pass"].value;
    let rpass = document.forms["register"]["rpass"].value;
    let bio = document.forms["register"]["bio"].value;

    if(!name || name.length <30) {
        validated = false;
        alert("tên o để trống");
    }
    if(!age || age <18 || age > 80) {
        validated = false;
        alert("sai 1");
    }
    if(!email || name.includes("@")) {
        validated = false;
        alert("sai 2");
    }
    if(!user || user.length > 30) {
        validated = false;
        alert("sai 3");
    }
    if(!pass || pass >36 || pass <8 ) {
        validated = false;
        alert("sai 4");
        if (!rpass|| rpass >36 || rpass <8) {
            validated= false;
            alert("sai 5");
        }
    }
    if (!bio || bio.length <300) {
        validated = false;
        alert("thiếu");
    }
    return validated;
}