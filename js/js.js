// トップページ
jQuery(".first-btn").on("click", function () {
  jQuery(".first-modal").fadeOut(3000);
});

// 変数宣言
let timeRunning = false;
let timer;
let timer2;
let timer3;
let click_count = 0;
let num1 = 10;
let num2 = 20;
let num3 = 30;
let hit_count = 0;

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

  if (hit_count == 1) {
    document.getElementById("one-two").style.transform =
      "rotate(" + -360 + "deg) scale(1)";
    document.getElementById("one-three").style.transform =
      "rotate(" + -360 + "deg) scale(1)";
    document.getElementById("one-four").style.transform =
      "rotate(" + -360 + "deg) scale(1)";
  }
});

//スロットストップ
jQuery(".btn1").on("click", function () {
  clearInterval(timer);
  num1 = Math.floor(Math.random() * 7);
  let place = "one-two";
  picture(num1, place);
  click_count += 1;
  if (click_count == 3) {
    timeRunning = false;
    click_count = 0;
  }
});

jQuery(".btn2").on("click", function () {
  clearInterval(timer2);
  num2 = Math.floor(Math.random() * 7);
  let place = "one-three";
  picture(num2, place);
  click_count += 1;
  if (click_count == 3) {
    timeRunning = false;
    click_count = 0;
  }
});

jQuery(".btn3").on("click", function () {
  clearInterval(timer3);
  num3 = Math.floor(Math.random() * 7);
  let place = "one-four";
  picture(num3, place);

  click_count += 1;
  if (click_count == 3) {
    timeRunning = false;
    click_count = 0;
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

  if (num1 == num2 && num1 == num3) {
    hit_count += 1;
  }
  console.log(hit_count);
  //  １回目、３つ画像がそろったとき
  if (hit_count == 1 && num1 == num2 && num1 == num3) {
    hit1audio.play();
    document.getElementById("one-two").style.transform =
      "rotate(" + 0 + "deg)  scale(1.2)";
    document.getElementById("one-three").style.transform =
      "rotate(" + 0 + "deg)  scale(1.2)";
    document.getElementById("one-four").style.transform =
      "rotate(" + 0 + "deg)  scale(1.2)";
    jQuery(".hit1").fadeIn(300);
  }

  //  ２回目、３つ画像がそろったとき
  if (hit_count == 2 && num1 == num2 && num1 == num3) {
    if (num1 == 0 || num1 == 1 || num1 == 2) {
      jQuery(".hit-img").attr("src", "img/hit2.png");
    } else if (num1 == 3 || num1 == 5) {
      jQuery(".hit-img").attr("src", "img/hit2-2.png");
    } else if (num1 == 4 || num1 == 6) {
      jQuery(".hit-img").attr("src", "img/hit2-3.png");
    }
    jQuery(".hit2-modal").animate({ left: "+=1000px" }, 5000);
    jQuery(".hit2-modal").fadeOut(100);
    jQuery(".hit2-modal").animate({ left: "-=1000px" }, 5000);
    jQuery(".hit2-modal").fadeIn(100);
    hit2audio.play();
    jQuery(".hit2").fadeIn(300);
  }

  //  ３回目、３つ画像がそろったとき
  if (hit_count == 3 && num1 == num2 && num1 == num3) {
    jQuery(".hit-modal").fadeIn(4000);
    hit_count = 0;
    jQuery(".hit3").fadeIn(300);
    jQuery(".hit1").fadeOut(5000);
    jQuery(".hit2").fadeOut(5000);
    jQuery(".hit3").fadeOut(5000);
  }
}

// あたりモーダル閉じる
jQuery(".hit-btn").on("click", function () {
  num1 = 10;
  num2 = 20;
  num3 = 30;
  jQuery(".hit-modal").fadeOut(3000);
});

// サウンドstart
function audio() {
  document.getElementById("start-audio").currentTime = 0; //連続クリックに対応
  document.getElementById("start-audio").play(); //クリックしたら音を再生
}

//サウンドstop
function audio1() {
  document.getElementById("stop-audio").currentTime = 0; //連続クリックに対応
  document.getElementById("stop-audio").play(); //クリックしたら音を再生
}
