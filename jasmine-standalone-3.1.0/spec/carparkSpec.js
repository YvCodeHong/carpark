'use strict';

describe('Carpark', function() {

  var carpark;
  var car;

beforeEach(function () {
    carpark = new Carpark();
    car = new Car();
  });

 it('has no cars by default', function() {
    expect(carpark.showCarpark()).toEqual([]);
  });

  it('should park the car', function() {
      carpark.park()
     expect(carpark.storage).toContain(car);
   });



});
