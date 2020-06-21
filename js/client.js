'use strict';
window.onload = function(){
    let  overScrollChat = document.querySelectorAll('.overScrollChat');
    overScrollChat.forEach((e)=>{
         e.scrollTo(0, e.scrollHeight);
    });
}


let toggleClientBlock = document.querySelector('.page_client-infoViewers'),
    hideBlock = document.querySelector('.hideBlock'),
    visibleBlock = document.querySelector('.visibleBlock');

hideBlock.addEventListener('click', (e)=>{
    toggleClientBlock.classList.toggle('infoViewers-hide');
    toggleClientBlock.classList.toggle('infoViewers-visible');
});
visibleBlock.addEventListener('click', (e)=>{
    toggleClientBlock.classList.toggle('infoViewers-hide');
    toggleClientBlock.classList.toggle('infoViewers-visible');
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip({
        boundary: 'window'
    })
 })
  