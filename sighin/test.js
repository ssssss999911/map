'use strict';

// ==================== 비밀번호 찾기 ====================
const main = document.querySelector('main');
const ID_password = main.querySelector('#ID_password');
const password_find_submit = main.querySelector('.password_find_submit');
const forget = main.querySelector('.forget_id');
const find_message = main.querySelector('.find_message');

const id = ['NIHILncunia', 'dukjin', 'sujini', 'yoonja'];

password_find_submit.addEventListener('click', function (e) {
  e.preventDefault();

  if (id.includes(ID_password.value)) {
    forget.style.display = 'none';
    password_find_submit.style.marginBottom = '30px';
    
    const form = document.createElement('form');
    const pw = document.createElement('input');
    const pwcheck = document.createElement('input');
    const checkbutton = document.createElement('button');

    pw.type = 'password';
    pw.required = true;
    pw.name = 'password';
    pw.placeholder = '7자리 이상';
    pw.classList.add('re-pass');

    pwcheck.type = 'password';
    pwcheck.required = true;
    pwcheck.name = 'password_check';
    pwcheck.placeholder = '7자리 이상';
    pwcheck.classList.add('re-passcheck');

    checkbutton.type = 'button';
    checkbutton.textContent = '비밀번호 재설정';
    checkbutton.classList.add('re-pass-button');

    form.classList.add('re-pass-form');
    form.appendChild(pw);
    form.appendChild(pwcheck);
    form.appendChild(checkbutton);

    main.appendChild(form);

    // ==================== 비밀번호 재설정 ====================
    const rePassInput = main.querySelector('.re-pass');
    const rePassCheckInput = main.querySelector('.re-passcheck');
    const rePassButton = main.querySelector('.re-pass-button');

    rePassButton.addEventListener('click', function () {
      if (rePassInput.value !== rePassCheckInput.value) {
        alert('동일하게 입력해주세요');
        return;
      }

      if (rePassInput.value && rePassCheckInput.value) {
        alert('비밀번호가 재설정되었습니다.');
        return;
      }

      alert('새로운 비밀번호를 입력해주세요.');
    });
  } else {
    find_message.classList.add('red-text');
    find_message.textContent = '일치하는 회원정보가 없습니다. 다시 확인해주세요.';
  }
});