function validateForm() {
    let nameInput = document.forms["myForm"]["txtName"].value;
    let emailInput = document.forms["myForm"]["txtEmail"].value;
    let txtInput = document.getElementById("txt").value;

    if (nameInput.trim() === "" || emailInput.trim() === "" || txtInput.trim() === "") {
        alert("SOME INPUTS NEED TO BE FILLED OUT!");
        return false;
    } else {
        alert("YEAH! ☺");
    }
}
