
//we can get the modal
var simple_modal = document.getElementById("simpleModal");

//we can get the modal open button
//var modal_btn = document.getElementById("open-modal");
var modal_btn = document.querySelector("#open-modal");
//we can get the modal close button
//var close_btn = document.getElementById("closeBtn");
var close_btn = document.querySelector("#closeBtn");

//we can the listen for both buttons

modal_btn.addEventListener('click', openModal);
close_btn.addEventListener('click', closeModal);


function openModal(){
    simple_modal.style.display = 'block';
}

function closeModal(){
    simple_modal.style.display = 'none';
}



  
