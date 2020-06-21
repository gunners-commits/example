'use strict';
window.onload = function(){
       let  overScrollChat = document.querySelectorAll('.overScrollChat');
       overScrollChat.forEach((e)=>{
            e.scrollTo(0, e.scrollHeight);
       });
}


filterBtnMob.addEventListener('click', (e)=>{
    let filterDropdown = e.target.closest('button').nextElementSibling;
    filterDropdown.classList.toggle('filter_dropdown-show__mobile');
    filterDropdown.classList.toggle('filter_dropdown-hide')
});

filterBtn.addEventListener('click', (e)=>{
    let filterDropdown = e.target.closest('button').nextElementSibling;
    filterDropdown.classList.toggle('filter_dropdown-show');
    filterDropdown.classList.toggle('filter_dropdown-hide');
});