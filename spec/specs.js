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
});
