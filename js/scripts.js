// Business Logic

var fillArray = function(numIn) {
  var numArray = [];
  for (var numIn = numIn; numIn > 0; numIn -= 1) {
    numArray.push(numIn);
  }
    return numArray;
};

var threeAndFiveDivisor = function(numIn) {
  if(numIn % 3 === 0 && numIn % 5 === 0) {
    return "pingpong";
  }
};

var threeDivisor = function(numIn) {
  if (numIn % 3 === 0) {
    return "ping";
  }
};

var fiveDivisor = function(numIn) {
  if (numIn % 5 === 0) {
    return "pong";
  }
};

var pingPong = function(numIn) {
  var numArray = fillArray(numIn);
    numArray.forEach(function(number, index, numArray) {
      if(threeAndFiveDivisor(number) === 'pingpong') {
        numArray[index] = 'pingpong';
      } else if (threeDivisor(number) === 'ping') {
        numArray[index] = 'ping';
      } else if (fiveDivisor(number) === 'pong') {
        numArray[index] = 'pong'
      }
    });
    return numArray;
};


// User Interface Logic

$(document).ready(function() {

  $("form#numForm").submit(function(event) {
    var numIn = parseInt($("input#numInput").val());
    var ppResult = pingPong(numIn);

    ppResult.forEach(function(number) {
			$("ul#ppList").prepend("<li>" + number + "</li>");
		});
    event.preventDefault();

  $(function(){
    
        $('.endButton').click(function() {
          location.reload();
        });
  });
  });
});
