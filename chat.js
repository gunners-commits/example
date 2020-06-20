'use strict';
window.onload = function(){
       let  overScrollChat = document.querySelectorAll('.overScrollChat');
       overScrollChat.forEach((e)=>{
            e.scrollTo(0, e.scrollHeight);
       });
}



let btnMobChat = document.querySelector('.chats_mobile'),
    filterDropdown = document.querySelector('.filter_dropdown');

btnMobChat.addEventListener('click', (e)=>{
    chatsMobileAdaptive.classList.toggle('sidebar_mobile-seek')
    chatsMobileAdaptive.classList.toggle('sidebar_mobile-hide')
});

filterBtn.addEventListener('click', (e)=>{
    filterDropdown.classList.toggle('filter_dropdown-show');
    filterDropdown.classList.toggle('filter_dropdown-hide')
});