describe('pingPong', function(){

  it("is going to be false", function(){
    expect(pingPong()).to.equal(false);
  });
  it("returns true when a number is divisible by 15", function(){
    expect(pingPong(30)).to.equal(true);
  });
  it("returns true when a number is divible by 5", function(){
    expect(pingPong(5)).to.equal(true);
  });
  it("returns true when a number is divisible by 3", function(){
    expect(pingPong(6)).to.equal(true);
  });
  it("returns the number input when the number is divisible by neither 3, 5, nor 15", function(){
    expect(pingPong(7)).to.equal(7);
  });
  it("returns an array up to the number input", function() {
    expect(pingPong(33)).to.eql("1 2")
  });
  it("searches through array and converts all divisors above to their respective ping-pongs", function(){
    expect(pingPong(5)).to.eql([1,2,'ping',4,'pong']);
  });
});

//
//   for (var i = 1; i <= numIn; i ++) {
//     var numArray = [];
//       if (num % 3 === 0 && numIn % 5 === 0) {
//         numArray.push("pingpong");
//       } else if (numIn % 5 === 0) {
//         numArray.push("pong");
//       } else if (numIn % 3 === 0) {
//         numArray.push("ping");
//       } else {
//         numArray.push(i);
//       };
//     console.log(numArray);
//     return numArray
//   };
// };

// for(var i = 1; i <= numIn; i++) {
//   var output = "";
//     if ((i%3)=== 0) {
//       output += "ping";
//     }
//     if((i%5) === 0) {
//       outut += "pong";
//     }
//     if(output.length === 0) {
//       output = i.toString();
//     }
//     console.log(output);
//     return output
// }
// };
