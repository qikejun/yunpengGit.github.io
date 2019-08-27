onload = function () {
  var click_cnt = 0;
  var $html = document.getElementsByTagName("html")[0];
  var $body = document.getElementsByTagName("body")[0];
  $html.onclick = function (e) {
    var $elem = document.createElement("b");
    $elem.style.color = "#E94F06";
    $elem.style.zIndex = 9999;
    $elem.style.position = "absolute";
    $elem.style.select = "none";
    var x = e.pageX;
    var y = e.pageY;
    $elem.style.left = (x - 10) + "px";
    $elem.style.top = (y - 20) + "px";
    clearInterval(anim);
    switch (++click_cnt) {
      case 2:
        $elem.innerText = "😀";
        break;
      case 3:
        $elem.innerText = "😃";
        break;
      case 4:
        $elem.innerText = "❤";
        break;
      case 5:
        $elem.innerText = "😁";
        break;
      case 6:
        $elem.innerText = "😆";
        break;
      case 7:
        $elem.innerText = "😅";
        break;
      case 8:
        $elem.innerText = "😂";
        break;
      case 9:
        $elem.innerText = "🤣";
        break;
      case 10:
        $elem.innerText = "😊";
        break;
      case 11:
        $elem.innerText = "😚";
        break;
      case 12:
        $elem.innerText = "😙";
        break;
      case 13:
        $elem.innerText = "😗";
        break;
      case 14:
        $elem.innerText = "😘";
        break;
      case 15:
        $elem.innerText = "😍";
        break;
      case 16:
        $elem.innerText = "😌";
        break;
      case 17:
        $elem.innerText = "😉";
        break;
      case 18:
        $elem.innerText = "🙃";
        break;
      case 19:
        $elem.innerText = "🙂";
        break;
      case 20:
        $elem.innerText = "😥";
        break;
      case 21:
        $elem.innerText = "😋";
        break;
      case 22:
        $elem.innerText = "😜";
        break;
      case 23:
        $elem.innerText = "😝";
        break;
      case 24:
        $elem.innerText = "😛";
        break;
      case 25:
        $elem.innerText = "😨";
        break;
      case 26:
        $elem.innerText = "😒";
        break;
      case 27:
        $elem.innerText = "😎";
        break;
      case 28:
        $elem.innerText = "🙄";
        break;
      case 29:
        $elem.innerText = "😭";
        break;
      case 30:
        $elem.innerText = "😖";
        break;
      case 31:
        $elem.innerText = "(๑•́ ∀ •̀๑)";
        break;
      case 32:
        $elem.innerText = "(๑•́ ₃ •̀๑)";
        break;
      case 40:
        $elem.innerText = "(๑•̀_•́๑)";
        break;
      case 50:
        $elem.innerText = "（￣へ￣）";
        break;
      case 60:
        $elem.innerText = "(╯°口°)╯(┴—┴";
        break;
      case 70:
        $elem.innerText = "૮( ᵒ̌皿ᵒ̌ )ა";
        break;
      case 80:
        $elem.innerText = "╮(｡>口<｡)╭";
        break;
      case 90:
        $elem.innerText = "( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃";
        break;
      case 100:
      case 101:
      case 102:
      case 103:
      case 104:
        $elem.innerText = "😏";
        break;
      case 105:
        $elem.innerText = "(ꐦ°᷄д°᷅)";
        break;
      default:
        $elem.innerText = "😂";
        break;
    }
    $elem.style.fontSize = Math.random() * 10 + 8 + "px";
    var increase = 0;
    var anim;
    setTimeout(function () {
      anim = setInterval(function () {
        if (++increase == 150) {
          clearInterval(anim);
          $body.removeChild($elem);
        }
        $elem.style.top = y - 20 - increase + "px";
        $elem.style.opacity = (150 - increase) / 120;
      }, 8);
    }, 70);
    $body.appendChild($elem);
  };
};
