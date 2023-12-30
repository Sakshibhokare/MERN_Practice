function validate(){
    var username= document.getElementById("uname");
    var password= document.getElementById("pass");

    if(username.value=="" || password.value==""){
        alert("Please enter the valide data");
        return false;
    }else{
        return true;
    }
}