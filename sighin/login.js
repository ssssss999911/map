'use strict';

import { users } from './users.js';

const loginBlock = document.querySelector('.login');
const idInput = loginBlock.querySelector('.login_ID > input');
const passInput = loginBlock.querySelector('.login_password > input');
const loginButton = loginBlock.querySelector('button');

const passMessage = loginBlock.querySelector('.pass_message');

function login() {
  const idValue = idInput.value;
  const passValue = passInput.value;
  let correctId = false, correctPassword = false;

  if (!(idValue && passValue)) {
    alert('아이디와 비밀번호를 전부 입력해야합니다.');
    return;
  }

  if (passValue.length < 7) {
    passMessage.textContent = '7자리 이상의 비밀번호를 입력해야합니다.';
    return;
  }

  const filteredUser = users.filter((item) => item.userId === idValue);

  if (filteredUser.length > 0) {
    correctId = true;
    alert('존재하는 유저입니다.');
  }

  if (correctId && passValue === filteredUser[0].password) {
    correctPassword = true;
    alert('비밀번호가 일치합니다.');
  } else {
    alert('아이디나 비밀번호가 일치하지 않습니다.');
    return;
  }

  if (correctId && correctPassword) {
    alert(`${filteredUser[0].name}님 환영합니다.`);
    location.pathname = '/sighin/complete.html';
  }
}

loginButton.addEventListener('click', function (e) {
  e.preventDefault();
  login();
});

passInput.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    login();
  }
});