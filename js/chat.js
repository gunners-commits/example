'use strict';
window.onload = function(){
       let  overScrollChat = document.querySelectorAll('.overScrollChat');
       overScrollChat.forEach((e)=>{
            e.scrollTo(0, e.scrollHeight);
       });
}



let btnMobChat = document.querySelector('.chats_mobile');
let filterBtnMob = document.querySelector('#filterBtnMob');
let filterBtn = document.querySelector('#filterBtn');
if(btnMobChat){
    btnMobChat.addEventListener('click', (e)=>{
        chatsMobileAdaptive.classList.toggle('sidebar_mobile-seek')
        chatsMobileAdaptive.classList.toggle('sidebar_mobile-hide')
    });
}

if(filterBtnMob){
    filterBtnMob.addEventListener('click', (e)=>{
        let filterDropdown = e.target.closest('button').nextElementSibling;
        console.log(filterDropdown)
        filterDropdown.classList.toggle('filter_dropdown-show__mobile');
        filterDropdown.classList.toggle('filter_dropdown-hide')
    });
}


if(filterBtn){
    filterBtn.addEventListener('click', (e)=>{
        let filterDropdown = e.target.closest('button').nextElementSibling;
        filterDropdown.classList.toggle('filter_dropdown-show');
        filterDropdown.classList.toggle('filter_dropdown-hide');
    });
}