// Business Logic
var pingPong = function(num){


    for (var i = 1; i <= num; i ++) {
      var numArray = [];
        if (num % 3 === 0 && num % 5 === 0) {
          numArray.push("pingpong");
        } else if (num % 5 === 0) {
          numArray.push("pong");
        } else if (num % 3 === 0) {
          numArray.push("ping");
        } else {
          numArray.push(i);
        };
      console.log(numArray);
      return numArray
    };
  };


// User Interface Logic
$(document).ready(function() {
  $("form#numForm").submit(function(event) {
     var num = parseInt($("input#numInput"))
//     // variables and shit go here, bitch!
//
//     // link your muthafuckin' variables to yo bad-ass bidness logic function, Yo!
//
//     // Make shit happen here...BITCH!
//
//     // Muthafuckin' variables connect to your output down here hommie.
//
//     // Show me some money, hunny, and reveal that hiddin fine shit you got stashed.
//
//     // It's all good baby.'
    event.preventDefault();
  });
});
