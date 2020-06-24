'use strict'

let emailLog   = document.querySelector('.email_log'),
    passLog    = document.querySelector('.pass_log'),
    emailError = document.querySelector('.emailError'),
    btnLog     = document.querySelector('.btn_log'),
    passError  = document.querySelector('.passError'),
    btnResPas  = document.querySelector('.btn_res'),
    btnNewPas  = document.querySelector('.btn_newPas'),
    form       = document.forms[0],
    val,
    item,
    examplePassword = 12345;


if(btnLog)
    btnLog.addEventListener('click', checkForm);

if(btnResPas)
    btnResPas.addEventListener('click', restoreEmail);

if(btnNewPas)
    btnNewPas.addEventListener('click', newPass);

function checkEmail(e){
    item = form.elements.email;
    val = item.value;
    if( val.indexOf('@') == -1 || val.length < 5){
        return false;       
    } else{
       
        return true;
    }  
}
function checkPass(e){
    item = form.elements.password;
    val = item.value;
    if(val == examplePassword){
      return true ;
    } else{
       return false
    }   
}
function checkForm(e){
    if(checkEmail() == false ){
        item.classList.add('btn-outline-danger');
        emailError.style.display = 'block';
        return;
    } else{
        item.classList.remove('btn-outline-danger');
        emailError.style.display = 'none';
    }

    if(checkPass() == false ){
        item.classList.add('btn-outline-danger');
        passError.style.display = 'block';
        return;
    } else{
        item.classList.remove('btn-outline-danger');
        passError.style.display = 'none';
    }
}


function restoreEmail(e){
    if(checkEmail()!=true){
        item.classList.add('btn-outline-danger');
        emailError.style.display = 'block';
        return;
    } else{
        item.classList.remove('btn-outline-danger');
        emailError.style.display = 'none';
    }
}

function newPass(e){
    item = form.elements.password;
    if(item[1].value != item[0].value || (item[1].value.length < 5  && item[0].value.length < 5 ) ){
        form.querySelector('.newPasError').style.display = 'block';
    } else{
        form.querySelector('.newPasError').style.display = 'none';
    }
}