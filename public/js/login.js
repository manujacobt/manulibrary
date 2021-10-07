let email=document.getElementById("user");
let pwd=document.getElementById("password");

let error=document.getElementById("error");
let error1=document.getElementById("error1");


var flag=0;
var flag1=0;
var flag2=0;
function mailvalidate(){            
        if((email.value=="admin") ){
            error.innerHTML="valid UserName";
            error.style.color="green";
            flag=1;            
        }
        else {
            error.innerHTML="Invalid UserName, UserName : admin";
            error.style.color="red";
            flag=0;               
        }                     
            }
            function pwdvalidate(){            
              if((pwd.value=="12345") ){
                  error1.innerHTML="valid Password";
                  error1.style.color="green";
                  flag1=1;            
              }
              else {
                  error1.innerHTML="Invalid Password, Password : 12345";
                  error1.style.color="red";
                  flag1=0;               
              }                     
                  }



function validate(){
    




if ((flag==1)&&(flag1==1)){
    
    
        return true;
}

else{
  alert("Check Username and Password")
  return false;
}


}

email.addEventListener('contextmenu', function (e) {
  alert("Right click not enabled in email");
  e.preventDefault();
}, false);
pwd.addEventListener('contextmenu', function (e) {
  alert("Right click not enabled in password");
  e.preventDefault();
}, false);