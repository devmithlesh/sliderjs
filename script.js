var span = document.getElementsByTagName("span");
var div = document.getElementsByTagName("div");
var l = 0;
span[1].onclick = () => {
  l++;
  for (var i of div) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-740px";
    }
    if (l == 2) {
      i.style.left = "-1480px";
    }
    if (l == 3) {
      i.style.left = "-2220px";
    }
    if (l == 4) {
      i.style.left = "-3100px";
    }
    if (l > 4) {
      l = 4;
    }
  }
};
span[0].onclick = () => {
  l--;
  for (var i of div) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-740px";
    }
    if (l == 2) {
      i.style.left = "-1480px";
    }
    if (l == 3) {
      i.style.left = "-2220px";
    }
    if (l == 4) {
      i.style.left = "-2960px";
    }
    if (l < 0) {
      l = 0;
    }
  }
};
