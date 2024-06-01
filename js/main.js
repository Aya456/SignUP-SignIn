var signupName=document.getElementById("signupName");
var signupEmail=document.getElementById("signupEmail");
var signupPassword=document.getElementById("signupPassword");
var SignUpBtn=document.getElementById("SignUpBtn");
var usersSignUp=[];
var Sign=document.getElementById("exist");
var logInBtn =document.getElementById("logInBtn");

var signinEmail=document.getElementById("signinEmail");
var signinPassword=document.getElementById("signinPassword");
var logIn=document.getElementById("incorrect");




if (localStorage.getItem('users') == null) {
    usersSignUp = []
} else {
    usersSignUp = JSON.parse(localStorage.getItem('users'));
}

function isEmailExist() {
    for (var i = 0; i < usersSignUp.length; i++) {
        if (usersSignUp[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
            return true
        }
    }
}


var userExists = usersSignUp.some(function(user) {
    return user.email === signupEmail;
});


SignUpBtn.addEventListener("click",function () {
    signUp();  
})
function signUp() {
    if ( signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        Sign.innerHTML = '<p class="text-danger m-3">All inputs is required</p>'
    }else if (validateName() && validateEmail()) {
        var userSignUp = {
            name: signupName.value,
            email: signupEmail.value,
            password: signupPassword.value,
        }
    
            if ( isEmailExist()  == true) {
                Sign.innerHTML = '<p class="text-danger m-3">email already exists</p>'
    
            } else {
                usersSignUp.push(userSignUp )
                localStorage.setItem('users', JSON.stringify(usersSignUp))
                Sign.innerHTML = '<p class="text-success m-3">Success</p>'
            } 
    }else{
        Sign.innerHTML='<p class="text-danger m-3">Enter at least three letters in the name && In the gmail Enter at least three letters then three Number then @gmail.com </p>';
    }
    
    clrForm()

}

function validateName() {
    var regex =  /^[a-z]{3,8}$/i ;  
    return regex.test(signupName.value);
}
function validateEmail() {
    var regex =  /^[a-z]{3,8}[0-9]{1,3}(@gmail.com)$/i ;  
    return regex.test(signupEmail.value);
}
signupName.addEventListener("input" ,function () {
    if (validateName()) {
        signupName.classList.remove("is-invalid");
        signupName.classList.add("is-valid");
    } else{
        signupName.classList.add("is-invalid");
        signupName.classList.remove("is-valid");
    } 
    })
signupEmail.addEventListener("input" ,function () {
        if (validateEmail()) {
        signupEmail.classList.remove("is-invalid");
        signupEmail.classList.add("is-valid");
        } else{
        signupEmail.classList.add("is-invalid");
        signupEmail.classList.remove("is-valid");
        } 
    })

    function clrForm() {
        signupName.value="";
        signupEmail.value="";
        signupPassword.value ="";  
        signupName.classList.remove("is-invalid");
        signupName.classList.remove("is-valid");
        signupEmail.classList.remove("is-invalid");
        signupEmail.classList.remove("is-valid");
    }


// ///////////////////////////////////////////////////////////////////////
// logInBtn.addEventListener("click",function() {
//     userLogIn() ;
// });

function login() {
    if ( signinEmail.value == "" || signinPassword.value == "" ) {
        logIn.innerHTML = '<p class="text-danger m-3">All inputs is required</p>'
    }else if(true){
        var password = signinPassword.value;
        var email = signinEmail.value;
        for (var i = 0; i < usersSignUp.length; i++) {
            if (usersSignUp[i].email.toLowerCase()==email &&usersSignUp[i].password.toLowerCase()==password) {
                localStorage.setItem('sessionUsername', usersSignUp[i].name);
                window.location.href = 'home.html';
            }
            else{
                logIn.innerHTML = '<p class="text-danger m-3">Invalid username or password.</p>';
            }
        }
    }

}


