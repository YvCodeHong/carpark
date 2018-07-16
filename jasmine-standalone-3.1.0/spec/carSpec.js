'use strict';

describe('Car', function() {
  var car;
  var carpark ;

  beforeEach(function(){
    car = new Car();
    carpark = new Carpark();
  });


  it('can park at the carpark', function(){
    carpark.park(car)
    expect(carpark.storage).toContain(car);

  });


});
