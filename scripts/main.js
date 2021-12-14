console.log("hello world");

$(document).ready(function () {
  listenToNavBtn();
});

const listenToNavBtn = () => {
  const btn = $(".btns__nav");
  btn.click(function () {
    $(".navigation__mobile").toggleClass("navigation__mobile--open");
  });
  return btn;
};
