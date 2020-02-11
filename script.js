window.onload = function() {
  var screen = document.getElementById("output");
  screen.innerHTML = "0";
  var total = 0;
  var btn0 = this.document.getElementById("btn0");
  var btn1 = this.document.getElementById("btn1");
  var btn2 = this.document.getElementById("btn2");
  var btn3 = this.document.getElementById("btn3");
  var btn4 = this.document.getElementById("btn4");
  var btn5 = this.document.getElementById("btn5");
  var btn6 = this.document.getElementById("btn6");
  var btn7 = this.document.getElementById("btn7");
  var btn8 = this.document.getElementById("btn8");
  var btn9 = this.document.getElementById("btn9");
  var btnc = this.document.getElementById("btnc");
  var btnb = this.document.getElementById("btnb");
  var btnPlus = this.document.getElementById("btnPlus");
  var btnEquals = this.document.getElementById("btnEquals");
  var btnMinus = this.document.getElementById("btnMinus");
  var btnMulti = this.document.getElementById("btnMulti");
  var btnDiv = this.document.getElementById("btnDiv");
  btnDiv.onclick = function() {

    
    total += parseInt(screen.innerHTML);


screen.innerHTML = "/";
};


  btnMulti.onclick = function() {

    
        total += parseInt(screen.innerHTML);
    
    
    screen.innerHTML = "*";
  };


  btnMinus.onclick = function() {
    total += parseInt(screen.innerHTML);
    screen.innerHTML = "-";
  };

  btnPlus.onclick = function() {
    total += parseInt(screen.innerHTML);
    screen.innerHTML = "+";
  };
  btnEquals.onclick = function() {
    if (screen.innerHTML.charAt(0) == "+") {
      total = total + parseInt(screen.innerHTML.substring(1));
      screen.innerHTML = total;
      total = 0;
    }
    if (screen.innerHTML.charAt(0) == "-") {
      total = total - parseInt(screen.innerHTML.substring(1));
      screen.innerHTML = total;
      total = 0;
    }
    if (screen.innerHTML.charAt(0) == '*') {
        total =  total * parseInt(screen.innerHTML.substring(1));
        screen.innerHTML = total;
        total = 0;
      }
      if (screen.innerHTML.charAt(0) == '/') {
        total =  parseInt(total / parseInt(screen.innerHTML.substring(1)));
        screen.innerHTML = total;
        total = 0;
      }
  };

  btnb.onclick = function() {
    if (
      screen.innerHTML == 0 ||
      screen.innerHTML == null ||
      screen.innerHTML.length == 1
    ) {
      screen.innerHTML = "0";
    } else {
      screen.innerHTML = screen.innerHTML.substring(
        0,
        screen.innerHTML.length - 1
      );
    }
  };

  btnc.onclick = function() {
    total = 0;
    if (screen.innerHTML == 0) {
    } else {
      screen.innerHTML = "0";
    }
  };

  btn0.onclick = function() {
    if (screen.innerHTML == 0) {
    } else {
      screen.innerHTML += "0";
    }
  };

  btn1.onclick = function() {
    if (screen.innerHTML == 0) {
      screen.innerHTML = 1;
    } else {
      screen.innerHTML += "1";
    }
  };
  btn2.onclick = function() {
    if (screen.innerHTML == 0) {
      screen.innerHTML = 2;
    } else {
      screen.innerHTML += "2";
    }
  };
  btn3.onclick = function() {
    if (screen.innerHTML == 0) {
      screen.innerHTML = 3;
    } else {
      screen.innerHTML += "3";
    }
  };
  btn4.onclick = function() {
    if (screen.innerHTML == 0) {
      screen.innerHTML = 4;
    } else {
      screen.innerHTML += "4";
    }
  };
  btn5.onclick = function() {
    if (screen.innerHTML == 0) {
      screen.innerHTML = 5;
    } else {
      screen.innerHTML += "5";
    }
  };
  btn6.onclick = function() {
    if (screen.innerHTML == 0) {
      screen.innerHTML = 6;
    } else {
      screen.innerHTML += "6";
    }
  };
  btn7.onclick = function() {
    if (screen.innerHTML == 0) {
      screen.innerHTML = 7;
    } else {
      screen.innerHTML += "7";
    }
  };
  btn8.onclick = function() {
    if (screen.innerHTML == 0) {
      screen.innerHTML = 8;
    } else {
      screen.innerHTML += "8";
    }
  };
  btn9.onclick = function() {
    if (screen.innerHTML == 0) {
      screen.innerHTML = 9;
    } else {
      screen.innerHTML += "9";
    }
  };
};
