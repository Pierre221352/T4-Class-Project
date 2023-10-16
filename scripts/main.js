$(document).ready(function(){
    $('signUpForm').submit(function(event) {

        event.preventDefault();

        if(this.checkValidity() === false) {
            event.stopPropagation();
        } else {

        }
        $(this).addClass('was-validated');
    });
});

$(document).ready(function () {
    $('#signUpForm').submit(function (event) {
      event.preventDefault();

      if (this.checkValidity() === false) {
        event.stopPropagation();
      } else {
        const passwordField = $('#password');
        const confirmPasswordField = $('#confirmPassword');

        if (passwordField.val().length < 6) {
          passwordField[0].setCustomValidity("Password must be at least 6 characters long.");
        } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(passwordField.val())) {
          passwordField[0].setCustomValidity("Password must contain at least one number, one uppercase letter, and one lowercase letter.");
        } else if (passwordField.val() !== confirmPasswordField.val()) {
          confirmPasswordField[0].setCustomValidity("Passwords do not match.");
        } else {
          passwordField[0].setCustomValidity(""); // Reset custom validity
          confirmPasswordField[0].setCustomValidity("");
        }
        $(this).addClass('was-validated');
      }
    });
  });