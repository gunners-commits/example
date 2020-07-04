'use strict';



let deleteIcon = document.querySelectorAll('.deleteIcon');
let overScroll = document.querySelectorAll('.overScroll-watch');

overScroll.forEach((e)=>{
    e.addEventListener('mouseout', function(){
        console.log(e)
        e.classList.toggle('overScroll');
        e.classList.toggle('overScroll-Y')
    });
    e.addEventListener('mouseover', function(){
        e.classList.toggle('overScroll');
        e.classList.toggle('overScroll-Y')
    });
});

const button = document.querySelector('#button');
const tooltip = document.querySelector('#tooltip');


$(function () {
    $('[data-toggle="tooltip"]').tooltip({
        boundary: 'scrollParent',
        
    })
 })

$('#integration_settings').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) 
    var recipient = button.data('whatever') 

    var modal = $(this)
    modal.find('.modal-title').text(recipient)
})

$('#contact_value').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) 
    var recipient = button.data('whatever') 

    var modal = $(this)
    modal.find('.modal-title').text(recipient)
})

$('#edit').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) 
    var recipient = button.data('whatever') 

    var modal = $(this)
    modal.find('.modal-title').text('Проект ' + recipient)
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
    modal.find('.modal-title').html( recipient)
    modal.find('.modal-body input').val(recipient)
})

$('#addTag').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var recipient = button.data('whatever') 
    var modal = $(this)
    modal.find('.modal-title').html()
    modal.find('.modal-body input').val(recipient)
})

// $('#myModal').modal(options)



let chatsMobileAdaptive = document.querySelector('.chats-mobile-adaptive'),
    navbarTogglerIcon = document.querySelector('.navbar-toggler-icon');


if(navbarTogglerIcon){
    navbarTogglerIcon.addEventListener('click', (e)=>{
        chatsMobileAdaptive.classList.remove('sidebar_mobile-seek')
        chatsMobileAdaptive.classList.add('sidebar_mobile-hide')
    });
}
