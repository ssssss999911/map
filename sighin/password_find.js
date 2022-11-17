'use strict';
const main= document.querySelector('main');
const ID_password = document.getElementById('ID_password');
const password_find_submit = document.querySelector('.password_find_submit');
const forget= document.querySelector('.forget_id');

const id = ['NIHILncunia', 'dukjin', 'sujini', 'yoonja'];

password_find_submit.addEventListener('click', function (e) {
  e.preventDefault();

  if (id.includes(ID_password.value)) {
    forget.style.display='none';
    const form = document.createElement('form');
    const pw=document.createElement('input');
    const pwcheck=document.createElement('input');
    const checkbutton=document.createElement('button');

    form.appendChild(pw,pwcheck,checkbutton);
    main.appendChild(form);
        

  } else {
    console.log('일치하는 아이디가 없습니다.');
  }
});