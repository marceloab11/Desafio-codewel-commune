"use strict";
var menu = document.querySelector("#menu");
var modal = document.querySelector("#modal");
var overlay = document.querySelector('#overlay');
menu.addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
});
