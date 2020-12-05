'use strict';

document.querySelector('.menu-btn').addEventListener
('click', () => document.querySelector('.main-menu')
.classList.toggle('show'));
/* 
classList.toggle()함수는 클래스명에 
()안에 있는 값이 존재한다면 제거하고 false를 반환하고,
존재하지 않으면 값을 추가하고 true를 반환하는 함수.

즉, .main-menu show (해당 태그의 클래스명에 show가 있음)일 때는 show클래스를 제거하고,
.main-menu (해당 태그의 클래스며엥 show가 없음)일 때는 show 클래스를 추가해줌.
*/