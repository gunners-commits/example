'use strict';
window.onload = function(){
       let  overScrollChat = document.querySelectorAll('.overScrollChat');
       overScrollChat.forEach((e)=>{
            e.scrollTo(0, e.scrollHeight);
       });
}


let btnMobChat = document.querySelector('.chats_mobile');
btnMobChat.addEventListener('click', (e)=>{
    chatsMobileAdaptive.classList.toggle('sidebar_mobile-seek')
    chatsMobileAdaptive.classList.toggle('sidebar_mobile-hide')
});