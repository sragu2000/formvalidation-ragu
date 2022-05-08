var correct=1;
function formValidation(){
    correct=1;
    document.getElementById("errormsg").innerHTML="";
    var fname = frm.fname.value;
    var lname = frm.lname.value;
    var dob = frm.dob.value;
    var email = frm.email.value;
    var username = frm.username.value;
    var password = frm.password.value;
    var age = frm.age.value;
    var confirmpass = frm.confirmpass.value;
    checkAll(fname,lname,dob,email,username,password,confirmpass,age);
    if(correct==1){
        alert("Form Submitted Successfully");
        location.reload();
    }
}
function checkAll(fname,lname,dob,email,username,password,confirmpass,age){
    lengthCheck(fname,30,"First Name");
    lengthCheck(lname,30,"Last Name");
    isAvailable(dob,"Date of Birth");
    isAvailable(email,"Email");
    isAvailable(username,"Username");
    isAvailable(password,"Password");
    isAvailable(confirmpass,"Confirm Password");
    passwordcheck(password,confirmpass);
    lengthCheck(username,10,"Username")
    usernameCheck(username);
    validateEmail(email);
    passwordLengthCheck(password);
    passwordFormatCheck(password);
    console.log(age);
    ageCheck(age);
}
function ageCheck(age){
    if(age<0){
        addAlert("Age is not valid");
        correct=0;
        return 0;
    }
    return true;
}
function passwordLengthCheck(pass){
    var len=pass.length;
    if(len>=6 && len <15){
        return true;
    }else{
        addAlert("Password length should be between 6 and 15 characters");
        correct=0;
        return 0;
    }
}

function passwordFormatCheck(pass){
    if(pass.search(/[0-9]/)==-1){
        addAlert("Passwordshould contain atleast one number");
        correct=0;
        return 0;
    }
    return true;
}

function validateEmail(frm) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = frm;
    if (reg.test(address) == false) {
        addAlert("Please enter a valid email address");
        correct=0;
        return 0;
    }
    return true;
}

function usernameCheck(username){
    if(username.search(/[\sA-Z`~!@#$%^&*()-_+{}[\]\\|,.//?;':"]/)!=-1){
        addAlert("Username should be in simple letters. no spaces, special characters, upper case letters allowed");
        correct = 0;
        return 0;
    }
    return true;
}

function passwordcheck(pass, conpass){
    if(pass != conpass){
        addAlert("Passwords do not match");
        correct=0;
        return 0;
    }
    return true;
}

function isAvailable(value,fieldname){
    if(value.trim() == ''){
        addAlert(fieldname+" field can not be empty");
        correct=0;
        return 0;
    }
    return true;
}

function lengthCheck(value,target,manname){
    if(value.trim() == ''){
        addAlert(manname + " cannot be empty");
        correct=0;
        return 0;
    }
    if(value.length>target){
        addAlert(manname+" cannot be longer than "+target+" characters");
        correct=0;
        return 0;
    }
    return true;
}

function addAlert(msg){
    const val=document.getElementById("errormsg").innerHTML;
    document.getElementById("errormsg").innerHTML=val+"<div class='alertError'>"+msg+"</div><br>";
}