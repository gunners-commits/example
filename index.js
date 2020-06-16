'use strict';

let deleteIcon = document.querySelectorAll('.deleteIcon');

$('#edit').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) 
    var recipient = button.data('whatever') 

    var modal = $(this)
    modal.find('.modal-title').text('Проект' + recipient)
    modal.find('.modal-body input').val(recipient)
})

$('#channel').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) 
    var recipient = button.data('whatever') 

    var modal = $(this)
    modal.find('.modal-title').text(recipient)
    modal.find('.modal-body input').val(recipient)
})

$('#deleteProject').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var recipient = button.data('whatever') 
    var modal = $(this)
    modal.find('.name_project').text(recipient)
    modal.find('.modal-body input').val(recipient)
})

$('#deleteMembers').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var recipient = button.data('whatever') 
    var modal = $(this)
    modal.find('.modal-title').html('<span class="font-weight-bold ">'+recipient+'</span>')
    modal.find('.modal-body input').val(recipient)
})

$('#delteIntegration').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var recipient = button.data('whatever') 
    var modal = $(this)
    modal.find('.modal-title').html('Удалить интеграцию <span class="font-weight-bold ">'+recipient+'</span>?')
    modal.find('.modal-body input').val(recipient)
})

$('#modalField').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var recipient = button.data('whatever') 
    var modal = $(this)
    modal.find('.modal-title').html(recipient)
    modal.find('.modal-body input').val(recipient)
})

// $('#myModal').modal(options)


let btnMobChat = document.querySelector('.chats_mobile');
let chatsMobileAdaptive = document.querySelector('.chats-mobile-adaptive');
let navbarTogglerIcon = document.querySelector('.navbar-toggler-icon')


btnMobChat.addEventListener('click', (e)=>{
    chatsMobileAdaptive.classList.toggle('sidebar_mobile-seek')
    chatsMobileAdaptive.classList.toggle('sidebar_mobile-hide')
});
navbarTogglerIcon.addEventListener('click', (e)=>{
    chatsMobileAdaptive.classList.remove('sidebar_mobile-seek')
    chatsMobileAdaptive.classList.add('sidebar_mobile-hide')
});



