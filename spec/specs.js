describe('pingPong', function(){
  it("returns an array up to the number input", function() {
    expect(pingPong(33)).to.eql("1 2")
  });
});




// it("is going to be false", function(){
//   expect(pingPong()).to.equal(false);
// });
// it("returns true when a number is divisible by 15", function(){
//   expect(pingPong(30)).to.equal(true);
// });
// it("returns true when a number is divible by 5", function(){
//   expect(pingPong(5)).to.equal(true);
// });
// it("returns true when a number is divisible by 3", function(){
//   expect(pingPong(6)).to.equal(true);
// });
// it("returns the number input when the number is divisible by neither 3, 5, nor 15", function(){
//   expect(pingPong(7)).to.equal(7);
// });



// for(var i = 1; i <= 100; i++) {
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
