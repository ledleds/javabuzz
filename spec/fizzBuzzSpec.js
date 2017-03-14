describe('Javabuzz', function(){

  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function() {

    it ('divisible by 3', function () {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it ('divisible by 5', function () {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

    it ('divisible by 15', function () {
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function() {

    it ('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });

    it ('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(11)).toBe(false);
    });

    it ('divisible by 15', function() {
      expect(javabuzz.isDivisibleByFifteen(16)).toBe(false);
    });
  });

  describe('when playing, says', function(){

    it ('"Java", when number is divisble by 3', function(){
      expect(javabuzz.says(3)).toEqual("Java")
    });

    it ('"Buzz", when number is divisible by 5', function(){
      expect(javabuzz.says(5)).toEqual("Buzz")
    });

    it ('"Javabuzz", when number is divisible by 15', function(){
      expect(javabuzz.says(15)).toEqual("JavaBuzz")
    });
  });
});
