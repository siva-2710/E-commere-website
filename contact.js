function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // You can perform further validation if needed

    alert("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);

    // You can send the form data to a server using AJAX or other methods here

    // Reset the form
    document.getElementById("myForm").reset();
}