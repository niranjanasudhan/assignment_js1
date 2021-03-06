//********** Sign Up Validations **********//
function validate_name(val) {
    if (val.trim() == "") {
        document.getElementById('error_name').style.display = "block";
        document.getElementById('name').style.border = "2px solid tomato";
        document.getElementById('error_name').innerHTML = "* Please Enter Your Name";
        return false;
    } else {
        document.getElementById('error_name').style.display = "none";
        document.getElementById('name').style.border = "2px solid #120f66";
        document.getElementById('error_name').innerHTML = "";
        return true;
    }

}

function validate_gender(val) {
    if (val.trim() == "") {
        document.getElementById('error_gender').style.display = "block";
        document.getElementById('gender').style.border = "2px solid tomato";
        document.getElementById('error_gender').innerHTML = "* Please Select Gender";
        return false;
    } else {
        document.getElementById('error_gender').style.display = "none";
        document.getElementById('error_gender').innerHTML = "";
        document.getElementById('gender').style.border = "2px solid #120f66";
        return true;
    }

}

function validate_dob(val) {
    if (val.trim() == "") {
        document.getElementById('error_dob').style.display = "block";
        document.getElementById('dob').style.border = "2px solid tomato";
        document.getElementById('error_dob').innerHTML = "* Please Enter Date of Birth";
        return false;
    } else {


        var myDate = new Date(val);
        var today = new Date();
        if (myDate > today) {
            document.getElementById('error_dob').style.display = "block";
            document.getElementById('dob').style.border = "2px solid tomato";
            document.getElementById('error_dob').innerHTML = "* You cannot enter a date in the future!.";
            return false;
        } else {
            document.getElementById('error_dob').style.display = "none";
            document.getElementById('error_dob').innerHTML = "";
            document.getElementById('dob').style.border = "2px solid #120f66";
            return true;
        }
    }

}

function validate_address(val) {
    if (val.trim() == "") {
        document.getElementById('error_address').style.display = "block";
        document.getElementById('address').style.border = "2px solid tomato";
        document.getElementById('error_address').innerHTML = "* Please Enter Address";
        return false;
    } else {
        document.getElementById('error_address').style.display = "none";
        document.getElementById('address').style.border = "2px solid #120f66";
        document.getElementById('error_address').innerHTML = "";
        return true;
    }

}

function validate_email(val) {
    if (val.trim() == "") {
        document.getElementById('error_email').style.display = "block";
        document.getElementById('email').style.border = "2px solid tomato";
        document.getElementById('error_email').innerHTML = "* Please Enter Email";
        return false;
    } else {
        let regexp = /^([\w\d\-\.]+)@{1}(([\w\d\-]{1,67})|([\w\d\-]+\.[\w\d\-]{1,67}))\.(([a-zA-Z\d]{2,4})(\.[a-zA-Z\d]{2})?)$/;
        if (regexp.test(email.value)) {
            document.getElementById('error_email').style.display = "none";
            document.getElementById('error_email').innerHTML = "";
            document.getElementById('email').style.border = "2px solid #120f66";
            return true;
        } else {
            document.getElementById('error_email').style.display = "block";
            document.getElementById('error_email').innerHTML = "* Enter Valid Email ID";
            document.getElementById('email').style.border = "2px solid tomato";
            return false;
        }
    }

}

function validate_phone(val) {
    if (val.trim() == "") {
        document.getElementById('error_phone').style.display = "block";
        document.getElementById('phone').style.border = "2px solid tomato";
        document.getElementById('error_phone').innerHTML = "* Please Enter Phone Number";
        return false;
    } else {
        var regexp = /^\d{10}$/;
        var regexp1 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (regexp.test(val.trim()) || regexp1.test(val.trim())) {
            document.getElementById('error_phone').style.display = "none";
            document.getElementById('error_phone').innerHTML = "";
            document.getElementById('phone').style.border = "2px solid #120f66";
            return true;
        } else {
            document.getElementById('error_phone').style.display = "block";
            document.getElementById('phone').style.border = "2px solid tomato";
            document.getElementById('error_phone').innerHTML = "* Enter Valid Mobile Number";
            return false;
        }
    }

}


function validate_password(val) {
    document.getElementById('bub').style.display = "none";
    if (val.trim() == "") {
        document.getElementById('error_password').style.display = "block";
        document.getElementById('password').style.border = "2px solid tomato";
        document.getElementById('error_password').innerHTML = "* Please Enter Password";
        return false;
    } else {
        var regexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;

        if (regexp.test(val.trim())) {
            document.getElementById('error_password').style.display = "none";
            document.getElementById('error_password').innerHTML = "";
            document.getElementById('password').style.border = "2px solid #120f66";
            return true;
        } else {
            document.getElementById('error_password').style.display = "block";
            document.getElementById('password').style.border = "2px solid tomato";
            document.getElementById('error_password').innerHTML = "* Enter valid password";
            return false;

        }
    }

}


function validate_confirm_password(val) {
    if (val.trim() == "") {
        document.getElementById('error_confirm_password').style.display = "block";
        document.getElementById('confirm_password').style.border = "2px solid tomato";
        document.getElementById('error_confirm_password').innerHTML = "* Please Enter Confirm Password";
        return false;
    } else {
        if (document.getElementById('password').value != val) {
            document.getElementById('error_confirm_password').style.display = "block";
            document.getElementById('confirm_password').style.border = "2px solid tomato";
            document.getElementById('error_confirm_password').innerHTML = "* password mismatch";
            return false;
        } else {
            document.getElementById('error_confirm_password').style.display = "none";
            document.getElementById('error_confirm_password').innerHTML = "";
            document.getElementById('confirm_password').style.border = "2px solid #120f66";
            return true;
        }
    }

}

function signup_validate() {

    var flag = 1;
    let name = document.getElementById('name').value;
    let gender = document.getElementById('gender').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let password = document.getElementById('password').value;
    let dob = document.getElementById('dob').value;
    let confirm_password = document.getElementById('confirm_password').value;

    if (!validate_name(name)) {
        flag = 0;
        document.getElementById('name').focus();
    } else if (!validate_gender(gender)) {
        flag = 0;
        document.getElementById('gender').focus();
    } else if (!validate_dob(dob)) {
        flag = 0;
        document.getElementById('dob').focus();
    } else if (!validate_address(address)) {
        flag = 0;
        document.getElementById('address').focus();
    } else if (!validate_email(email)) {
        flag = 0;
        document.getElementById('email').focus();
    } else if (!validate_phone(phone)) {
        flag = 0;
        document.getElementById('phone').focus();
    } else if (!validate_password(password)) {
        flag = 0;
        document.getElementById('password').focus();
    } else if (!validate_confirm_password(confirm_password)) {
        flag = 0;
        document.getElementById('confirm_password').focus();
    }
    if (flag == 1) {
        modal.style.display = "block";
        return true;
    } else {
        return false;
    }


}


//password instruction
function passwordStrenght(val) {
    var res = validate_password(val);
    if (val.length > 8 && res == true) {
        document.getElementById('strength').style.width = (val.length * 10) + "%";
        document.getElementById("strength").classList.remove('bg-danger');
        document.getElementById("strength").classList.remove('bg-warning');
        document.getElementById("strength").classList.remove('bg-success');
        document.getElementById("strength").classList.add('bg-success');
        document.getElementById('strength').innerHTML = "Strong";




    } else if (val.length >= 6) {
        document.getElementById('strength').style.width = (val.length * 10) + "%";
        document.getElementById("strength").classList.remove('bg-danger');
        document.getElementById("strength").classList.remove('bg-warning');
        document.getElementById("strength").classList.remove('bg-success');
        document.getElementById("strength").classList.add('bg-warning');
        document.getElementById('strength').innerHTML = "Medium";

    } else if (val.length < 6) {
        document.getElementById('strength').style.width = (val.length * 10) + "%";
        document.getElementById("strength").classList.remove('bg-warning');
        document.getElementById("strength").classList.remove('bg-success');
        document.getElementById("strength").classList.add('bg-danger');
        document.getElementById('strength').innerHTML = "Poor";

    }

}

function show_instructions() {
    document.getElementById('bub').style.display = "block";
}

function hide_instructions() {
    document.getElementById('bub').style.display = "none";
}


//********** Sign In Validations **********//

function validate_lemail(val) {
    if (val.trim() == "") {
        document.getElementById('error_lemail').style.display = "block";
        document.getElementById('lemail').style.border = "2px solid tomato";
        document.getElementById('error_lemail').innerHTML = "* Please Enter Your Email";
        return false;
    } else {
        document.getElementById('error_lemail').style.display = "none";
        document.getElementById('lemail').style.border = "2px solid #120f66";
        document.getElementById('error_lemail').innerHTML = "";
        return true;
    }

}

function validate_lpassword(val) {
    if (val.trim() == "") {
        document.getElementById('error_lpassword').style.display = "block";
        document.getElementById('lpassword').style.border = "2px solid tomato";
        document.getElementById('error_lpassword').innerHTML = "* Please Enter Your Password";
        return false;
    } else {
        document.getElementById('error_lpassword').style.display = "none";
        document.getElementById('lpassword').style.border = "2px solid #120f66";
        document.getElementById('error_lpassword').innerHTML = "";
        return true;
    }

}





function signin_validate() {

    var flag = 1;

    let lemail = document.getElementById('lemail').value;
    let lpassword = document.getElementById('lpassword').value;
    if (!validate_lemail(lemail)) {
        flag = 0;
        document.getElementById('lemail').focus();
    } else if (!validate_lpassword(lpassword)) {
        flag = 0;
        document.getElementById('lpassword').focus();
    }
    if (flag == 1) {
        modal_login.style.display = "block";
        return true;

    } else {
        return false;
    }


}


///sign up message modal

var modal = document.getElementById("myModal");
// var btn = document.getElementById("myBtn");
// var span = document.getElementsByClassName("close")[0];
// span.onclick = function() {
//     modal.style.display = "none";
// }

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


///sign in message modal

var modal_login = document.getElementById("myModal_login");
// var btn1 = document.getElementById("myBtn");


window.onclick = function(event) {
    if (event.target == modal_login) {
        modal_login.style.display = "none";
    }
}


//sign up
var form = document.getElementById("myForm");
// var form_login = document.getElementById("myForm");

function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);
// form_login.addEventListener('submit', handleForm);
//sign in