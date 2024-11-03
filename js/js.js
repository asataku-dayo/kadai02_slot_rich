// トップページ
jQuery(".first-btn").on("click", function () {
  jQuery(".first-modal").fadeOut(3000);
});

// 変数宣言
let timeRunning = false;
let timer;
let timer2;
let timer3;
let count = 0;
let num1 = 10;
let num2 = 20;
let num3 = 30;

// スロット実行
jQuery(".start").on("click", function () {
  if (timeRunning) {
    return;
  }
  num1 = 10;
  num2 = 20;
  num3 = 30;

  timer = setInterval(function () {
    jQuery(".all-one").animate({ bottom: "+=700px" }, 100);
    jQuery(".all-one").animate({ bottom: "-=700px" }, 100);
  }, 200);
  timer2 = setInterval(function () {
    jQuery(".all-two").animate({ bottom: "+=700px" }, 100);
    jQuery(".all-two").animate({ bottom: "-=700px" }, 100);
  }, 200);
  timer3 = setInterval(function () {
    jQuery(".all-three").animate({ bottom: "+=700px" }, 100);
    jQuery(".all-three").animate({ bottom: "-=700px" }, 100);
  }, 200);
  timeRunning = true;
});

//スロットストップ
jQuery(".btn1").on("click", function () {
  clearInterval(timer);
  num1 = Math.floor(Math.random() * 7);
  let place = "one-two";
  picture(num1, place);
  count += 1;
  if (count == 3) {
    timeRunning = false;
    count = 0;
  }
});

jQuery(".btn2").on("click", function () {
  clearInterval(timer2);
  num2 = Math.floor(Math.random() * 7);
  let place = "one-three";
  picture(num2, place);
  count += 1;
  if (count == 3) {
    timeRunning = false;
    count = 0;
  }
});

jQuery(".btn3").on("click", function () {
  clearInterval(timer3);
  num3 = Math.floor(Math.random() * 7);
  let place = "one-four";
  picture(num3, place);

  count += 1;
  if (count == 3) {
    timeRunning = false;
    count = 0;
  }
});

//画像ランダム切替関数
function picture(num, place) {
  if (num == 0) {
    document.getElementById(place).src = "img/slot1.png";
  } else if (num == 1) {
    document.getElementById(place).src = "img/slot2.png";
  } else if (num == 2) {
    document.getElementById(place).src = "img/slot3.png";
  } else if (num == 3) {
    document.getElementById(place).src = "img/slot4.png";
  } else if (num == 4) {
    document.getElementById(place).src = "img/slot5.png";
  } else if (num == 5) {
    document.getElementById(place).src = "img/slot6.png";
  } else if (num == 6) {
    document.getElementById(place).src = "img/slot7.png";
  }

  //  ３つ画像がそろったとき
  if (num1 == num2 && num1 == num3) {
    jQuery(".hit-modal").fadeIn(4000);
  }
}
jQuery(".hit-btn").on("click", function () {
  num1 = 10;
  num2 = 20;
  num3 = 30;
  jQuery(".hit-modal").fadeOut(3000);
});
