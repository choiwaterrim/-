
window.onload = function () {
   var big = document.getElementById('bigImg');
   var smallImgs = document.getElementById('smallImgs');

   var bigImg = big.getElementsByTagName('img')[0];
   var smallImgsThumb = smallImgs.getElementsByTagName('imgs');

   for (var i = 0; i < smallImgsThumb.length; i++) {
      smallImgsThumb[i].onmouseover = function () {
         bigImg.src = this.src;
      }
   }
}
function goback() {
   window.history.back();
}

function country(num) {
   if (num == 0) {
      textarea = "국기 위에 마우스를 올려봐요!";
   }
   if (num == 1) {
      textarea = "벨기에 [와플]";
   }
   if (num == 2) {
      textarea = "이탈리아 [피자, 파스타]";
   }
   if (num == 3) {
      textarea = "일본 [사케통, 초밥]";
   }
   if (num == 4) {
      textarea = "대한민국 [알밥, 분식, 냉면]";
   }
   if (num == 5) {
      textarea = "대만 [버블티]";
   }
   if (num == 6) {
      textarea = "아일랜드 [토스트]";
   }
   document.getElementById("text").innerHTML = textarea.fontsize(5);
}
function chooserandomly() {
   var x = parseInt(Math.random() * 10 + 1)

   switch (x) {
      case 1: location.href = "albab.html"; break;
      case 2: location.href = "amasvin.html"; break;
      case 3: location.href = "coldnoodles.html"; break;
      case 4: location.href = "Italy.html"; break;
      case 5: location.href = "mirimbunsik.html"; break;
      case 6: location.href = "salmonstore.html"; break;
      case 7: location.href = "somidang.html"; break;
      case 8: location.href = "sushigun.html"; break;
      case 9: location.href = "toast.html"; break;
      case 10: location.href = "waffle.html"; break;
      default: alert("오류");
   }

}